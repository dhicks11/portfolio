"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/resume";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="skills">
      <p className="section-label mb-4">Skills</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight mb-12">
        Technical <span className="text-accent font-serif italic">toolkit</span>
      </h2>

      <div className="border-t border-[var(--color-border)]">
        {skills.map((group, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={group.category} className="border-b border-[var(--color-border)]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-5 md:py-6 group cursor-pointer text-left min-h-[44px]"
                aria-expanded={isOpen}
                aria-controls={`skill-panel-${i}`}
              >
                <h3
                  className={`text-lg md:text-xl font-medium transition-colors duration-150 ${
                    isOpen ? "text-foreground" : "text-[var(--color-muted)] group-hover:text-foreground"
                  }`}
                >
                  {group.category}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={isOpen ? "text-foreground" : "text-[var(--color-hint)]"}
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="tag-pill">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
