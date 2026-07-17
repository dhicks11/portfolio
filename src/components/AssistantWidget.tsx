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
    "Hi — I can answer questions about Daylen's experience, projects, and skills. What would you like to know?",
};

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l1.9 4.8L18.7 9.7l-4.8 1.9L12 16.4l-1.9-4.8L5.3 9.7l4.8-1.9L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<ChatTurn[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [turns, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
          // Exclude the canned greeting; send recent turns only.
          history: nextTurns.slice(1, -1).slice(-6),
        }),
      });
      const data = await res.json();
      const answer =
        data.answer ??
        data.error ??
        "Something went wrong. Please try again or use the contact page.";
      setTurns((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch {
      setTurns((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't reach the assistant just now. Please try again or head to the contact page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Ask AI about Daylen"}
        initial={false}
        animate={{ rotate: open ? 90 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-foreground shadow-lg shadow-black/30 transition-colors hover:border-[var(--color-accent)] md:h-14 md:w-14"
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <SparkIcon className="h-5 w-5 text-[var(--color-accent)]" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[90] flex h-[min(600px,calc(100dvh-8rem))] w-[min(400px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/50"
            role="dialog"
            aria-label="AI assistant"
          >
            {/* Header */}
            <header className="flex items-center gap-3 border-b border-[var(--color-border)] px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <SparkIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">Ask about Daylen</p>
                <p className="truncate text-xs text-[var(--color-muted)] leading-tight">
                  AI assistant, grounded in his resume
                </p>
              </div>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {turns.map((turn, i) => (
                <div
                  key={i}
                  className={
                    turn.role === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                      turn.role === "user"
                        ? "rounded-2xl rounded-br-md bg-[var(--color-accent)] text-[var(--color-background)] font-medium"
                        : "rounded-2xl rounded-bl-md bg-[var(--color-surface-2)] text-[var(--color-foreground)]"
                    }`}
                  >
                    {turn.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[var(--color-surface-2)] px-4 py-3.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-muted)]"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {turns.length === 1 && !loading && (
                <div className="space-y-2 pt-1">
                  <p className="px-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-hint)]">
                    Suggested
                  </p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="flex w-full items-center justify-between gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-left text-[13px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-foreground"
                    >
                      <span>{q}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="shrink-0 text-[var(--color-hint)]"
                        aria-hidden="true"
                      >
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
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
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, projects…"
                maxLength={500}
                aria-label="Your question"
                className="min-w-0 flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-[var(--color-hint)] focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-background)] transition-all hover:bg-[var(--color-accent-dark)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
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
