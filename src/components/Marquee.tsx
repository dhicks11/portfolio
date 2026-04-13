"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items?: string[];
  text?: string;
  className?: string;
}

export default function Marquee({ items, text, className = "" }: MarqueeProps) {
  // Support either `items` (preferred) or legacy `text` prop
  const tickerItems = items ?? (text ? [text] : []);

  return (
    <motion.div
      className={`w-full py-6 md:py-8 bg-[var(--color-surface)] border-y border-[var(--color-border)] overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="animate-marquee flex whitespace-nowrap"
        aria-hidden="true"
      >
        {/* Render twice so the seamless loop works */}
        {[0, 1].map((iteration) => (
          <div key={iteration} className="flex shrink-0">
            {tickerItems.map((item, i) => (
              <span
                key={`${iteration}-${i}`}
                className="flex items-center text-2xl md:text-3xl font-bold uppercase tracking-tight mx-6 md:mx-10 text-[var(--color-muted)]"
              >
                {item}
                <span className="text-[var(--color-accent)] mx-6 md:mx-10 text-3xl md:text-4xl">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Screen-reader accessible version */}
      <p className="sr-only">{tickerItems.join(", ")}</p>
    </motion.div>
  );
}
