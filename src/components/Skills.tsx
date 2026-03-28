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
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Technical
            <br />
            <span className="text-accent">toolkit</span>
          </h2>
        </div>
      </div>

      <div className="border-t border-card-border">
        {skills.map((group, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={group.category}
              className="border-b border-card-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-6 md:py-8 group cursor-pointer text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-muted/50 w-6">
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-accent" : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {group.category}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center shrink-0"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-colors duration-300 ${
                      isOpen ? "text-accent" : "text-muted"
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pl-12 pb-8 flex flex-wrap gap-3">
                      {group.items.map((skill, si) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 text-sm rounded-full border border-card-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: si * 0.05, duration: 0.3 }}
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
