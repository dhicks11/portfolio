"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        A selection of projects I&apos;ve built at hackathons and on my own time
        — from AI-powered pitch platforms to surgical robot dashboards.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="card-glow p-6 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {/* Header gradient bar */}
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-accent to-accent-light mb-5" />

            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="text-xs text-muted whitespace-nowrap ml-2">
                {project.date}
              </span>
            </div>

            {project.event && (
              <span className="inline-block self-start px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
                {project.event}
              </span>
            )}

            <ul className="space-y-2 mb-6 flex-1">
              {project.bullets.map((bullet, bi) => (
                <li
                  key={bi}
                  className="text-sm text-muted leading-relaxed flex gap-2"
                >
                  <span className="text-accent mt-1 shrink-0">&#8250;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-background border border-card-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
