"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span className="section-label">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Technical
            <br />
            <span className="text-accent">toolkit</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            className="noura-card p-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
          >
            <h3 className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-5">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full border border-card-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
