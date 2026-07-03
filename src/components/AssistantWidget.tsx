"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What has Daylen built?",
  "What's his experience with AI?",
  "Tell me about the TMCF Innovation Challenge win",
];

const GREETING: ChatTurn = {
  role: "assistant",
  content:
    "Hi! I can answer questions about Daylen's experience, projects, and skills. What would you like to know?",
};

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<ChatTurn[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [turns, loading]);

  async function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const nextTurns: ChatTurn[] = [...turns, { role: "user", content: trimmed }];
    setTurns(nextTurns);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          // Exclude the canned greeting; send recent turns only
          history: nextTurns.slice(1, -1).slice(-6),
        }),
      });
      const data = await res.json();
      const answer =
        data.answer ??
        data.error ??
        "Something went wrong. Please try again or use the contact form.";
      setTurns((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch {
      setTurns((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't reach the assistant. Please try again or use the contact section below.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Ask AI about Daylen"}
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-[var(--color-background)] px-5 h-12 text-sm font-semibold shadow-[0_8px_30px_rgba(41,151,255,0.35)] hover:bg-[var(--color-accent-dark)] transition-colors"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
        {open ? "Close" : "Ask AI"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-5 z-[90] flex h-[min(560px,calc(100dvh-7rem))] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl"
            role="dialog"
            aria-label="AI assistant chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-5 py-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">Ask about Daylen</p>
                <p className="text-[11px] text-[var(--color-muted)] leading-tight">
                  AI assistant &middot; grounded in his real resume
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {turns.map((turn, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    turn.role === "user"
                      ? "ml-auto bg-[var(--color-accent)] text-[var(--color-background)]"
                      : "bg-[var(--color-surface-2)] text-[var(--color-foreground)]"
                  }`}
                >
                  {turn.content}
                </div>
              ))}
              {loading && (
                <div className="flex w-fit items-center gap-1.5 rounded-2xl bg-[var(--color-surface-2)] px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-muted)]"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              {turns.length === 1 && !loading && (
                <div className="space-y-2 pt-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="block w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-left text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2 border-t border-[var(--color-border)] p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, projects, skills…"
                maxLength={500}
                aria-label="Your question"
                className="min-w-0 flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm outline-none focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send question"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-background)] transition-colors hover:bg-[var(--color-accent-dark)] disabled:opacity-40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
