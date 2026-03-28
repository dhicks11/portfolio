"use client";

import Image from "next/image";
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

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className={`bento-card group relative overflow-hidden ${
              i === 0 ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="p-8 md:p-10">
              {/* Top row: badge + date + arrow */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  {project.event && (
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.event}
                    </span>
                  )}
                  <span className="text-xs text-muted font-mono">
                    {project.date}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-4 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>

              {/* Project image if available */}
              {project.image && (
                <div className="relative mb-6 rounded-lg overflow-hidden border border-card-border h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              )}

              <div className="text-muted leading-relaxed mb-6 max-w-2xl space-y-2">
                {project.bullets.map((bullet, j) => (
                  <p key={j}>{bullet}</p>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs rounded-full bg-surface border border-card-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action links row */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Live Site
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
