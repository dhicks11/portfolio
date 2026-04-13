"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/resume";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="section-header">
            <span className="section-number">03</span>
            <span className="section-word">Expertise</span>
          </div>
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.1]">
            Technical
            <br />
            <span className="text-accent font-serif italic">toolkit</span>
          </h2>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        {skills.map((group, i) => {
          const isOpen = openIndex === i;
          const numberLabel = `0${i + 1}`;
          return (
            <motion.div
              key={group.category}
              className="border-b border-[var(--color-border)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-6 md:py-8 group cursor-pointer text-left min-h-[44px]"
                aria-expanded={isOpen}
                aria-controls={`skill-panel-${i}`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-accent w-8">
                    {numberLabel}
                  </span>
                  <h3
                    className={`editorial-heading text-xl md:text-2xl transition-colors duration-200 ${
                      isOpen
                        ? "text-accent"
                        : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-colors duration-200 ${
                      isOpen ? "text-accent" : "text-[var(--color-muted)]"
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`skill-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-14 pb-8 flex flex-wrap gap-2">
                      {group.items.map((skill, si) => (
                        <motion.span
                          key={skill}
                          className="tag-pill"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: si * 0.04, duration: 0.3 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
