"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Technical <span className="gradient-text">Skills</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            className="card-glow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-full bg-background border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition-colors"
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
