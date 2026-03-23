"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span className="section-label">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Featured
            <br />
            <span className="text-accent">Projects</span>
          </h2>
        </div>
        <p className="text-muted max-w-md text-lg">
          A selection of projects built at hackathons and beyond — from
          AI-powered platforms to surgical robot dashboards.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="noura-card p-8 md:p-10 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.event && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.event}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="text-muted leading-relaxed flex gap-3"
                    >
                      <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-full bg-surface border border-card-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <span className="text-sm text-muted">{project.date}</span>
                <div className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted group-hover:text-accent transition-colors duration-300"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
