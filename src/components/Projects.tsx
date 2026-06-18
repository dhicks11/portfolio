"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="section-label mb-4">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
            Featured <span className="text-accent font-serif italic">projects</span>
          </h2>
        </div>
        <p className="text-[var(--color-muted)] max-w-md text-sm leading-relaxed">
          A selection of projects built at hackathons and beyond — from
          AI-powered platforms to surgical robot dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`bento-card group relative overflow-hidden ${i === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="relative w-full h-48 md:h-56 border-b border-[var(--color-border)] overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 40%, #BFDBFE 100%)" }}
                >
                  <span className="text-4xl font-bold text-accent/20 tracking-tight select-none">
                    {project.name}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                {project.event && (
                  <span className="award-badge">{project.event}</span>
                )}
                <span className="text-xs text-[var(--color-hint)] font-mono">
                  {project.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                {project.name}
              </h3>

              <div className="text-[var(--color-muted)] text-sm leading-relaxed mb-5 space-y-2">
                {project.bullets.map((bullet, j) => (
                  <p key={j}>{bullet}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                    aria-label={`Visit ${project.name} live site`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    Live Site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
                    aria-label={`Watch ${project.name} demo video`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
