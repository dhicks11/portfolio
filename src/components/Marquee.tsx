"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className = "" }: MarqueeProps) {
  const items = Array(4).fill(text);

  return (
    <motion.div
      className={`overflow-hidden py-8 border-y border-card-border ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mx-8 text-foreground/[0.04]"
            style={{ WebkitTextStroke: "1px rgba(59, 130, 246, 0.2)" }}
          >
            {item}
            <span className="text-accent mx-8">*</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mx-8 text-foreground/[0.04]"
            style={{ WebkitTextStroke: "1px rgba(59, 130, 246, 0.2)" }}
          >
            {item}
            <span className="text-accent mx-8">*</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
