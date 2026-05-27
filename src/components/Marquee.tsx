"use client";

interface MarqueeProps {
  items?: string[];
  text?: string;
  className?: string;
}

export default function Marquee({ items, text, className = "" }: MarqueeProps) {
  const tickerItems = items ?? (text ? [text] : []);

  return (
    <div
      className={`w-full py-4 border-y border-[var(--color-border)] overflow-hidden ${className}`}
    >
      <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((iteration) => (
          <div key={iteration} className="flex shrink-0">
            {tickerItems.map((item, i) => (
              <span
                key={`${iteration}-${i}`}
                className="flex items-center text-sm font-medium uppercase tracking-widest mx-8 text-[var(--color-hint)]"
              >
                {item}
                <span className="text-[var(--color-border)] mx-8">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="sr-only">{tickerItems.join(", ")}</p>
    </div>
  );
}
