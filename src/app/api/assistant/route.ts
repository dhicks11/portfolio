import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/validation";
import { captureError } from "@/lib/sentry";
import groundingData from "@/data/grounding.json";

const MAX_QUESTION_LENGTH = 500;
const MAX_HISTORY_TURNS = 6;

const FALLBACK_MESSAGE =
  "The assistant is unavailable right now. Please reach out directly through the contact section or email daylenhicks10@gmail.com.";

// Keep the system prompt static across requests so prompt caching can do its job.
const SYSTEM_PROMPT = `You are the AI assistant on Daylen Hicks's portfolio site, daylenhicks.com. You help recruiters, hiring managers, and visitors quickly understand Daylen's background, skills, and projects.

Ground every answer in the CANDIDATE_DATA provided below. Do not invent details, dates, companies, or numbers that are not in that data.

Rules:
1. Answer only questions about Daylen's professional background: education, work experience, projects, skills, competitions, and how to contact him.
2. If asked something outside that scope (general coding help, unrelated trivia, personal opinions, anything unrelated to Daylen), politely redirect: say you're focused on answering questions about Daylen's background and point them to the contact section for anything else.
3. Keep answers concise, 2 to 4 sentences unless the visitor asks for detail. Recruiters skim.
4. Speak about Daylen in the third person, as a knowledgeable colleague would, not as Daylen himself.
5. If the data doesn't cover something asked (e.g. salary expectations, availability dates not listed, personal contact info beyond what's public), say you don't have that detail and suggest reaching out directly via the contact link.
6. Never speculate about skills or experience Daylen doesn't have. If someone asks about something not in the data, say it's not something you have on record rather than guessing.
7. Do not use hyphens in your responses.

CANDIDATE_DATA:
${JSON.stringify(groundingData)}`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn(
      "assistant: ANTHROPIC_API_KEY is not set — returning fallback message"
    );
    return NextResponse.json({ answer: FALLBACK_MESSAGE, fallback: true });
  }

  const rateCheck = await checkRateLimit("assistant", getClientIp(req));
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  let question: string;
  let history: ChatTurn[];
  try {
    const body = await req.json();
    question = String(body.question ?? "").trim();
    history = Array.isArray(body.history) ? body.history : [];
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!question || question.length > MAX_QUESTION_LENGTH) {
    return NextResponse.json(
      { error: `Please ask a question under ${MAX_QUESTION_LENGTH} characters.` },
      { status: 400 }
    );
  }

  // Sanitize history: recent turns only, alternating shape enforced client-side
  const messages: Anthropic.MessageParam[] = [
    ...history
      .slice(-MAX_HISTORY_TURNS)
      .filter(
        (t): t is ChatTurn =>
          (t?.role === "user" || t?.role === "assistant") &&
          typeof t?.content === "string" &&
          t.content.length > 0
      )
      .map((t) => ({
        role: t.role,
        content: t.content.slice(0, MAX_QUESTION_LENGTH * 2),
      })),
    { role: "user", content: question },
  ];

  const client = new Anthropic();

  try {
    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 300,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages,
    });

    const answer = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("")
      .trim();

    if (!answer) {
      return NextResponse.json({ answer: FALLBACK_MESSAGE, fallback: true });
    }

    return NextResponse.json({ answer });
  } catch (err) {
    console.error("assistant: Claude API call failed", err);
    captureError(err, { source: "assistant" });
    return NextResponse.json({ answer: FALLBACK_MESSAGE, fallback: true });
  }
}
