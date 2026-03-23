"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-0 min-h-[80vh]">
        {/* Left — Sticky heading */}
        <div className="px-6 md:px-12 lg:px-24 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:border-r lg:border-card-border">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Where
              <br />
              I&apos;ve{" "}
              <span className="text-accent font-serif italic">worked</span>
            </h2>
            <p className="text-muted mt-6 max-w-sm leading-relaxed">
              From AI engineering at scale to founding products from scratch.
            </p>
          </motion.div>
        </div>

        {/* Right — Scrollable cards */}
        <div className="px-6 md:px-12 lg:px-16 lg:py-12 space-y-0">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="group border-b border-card-border py-10 md:py-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              {/* Dates in monospace */}
              <p className="font-mono text-xs md:text-sm text-accent/70 tracking-wide mb-1">
                {job.dates}
              </p>
              <p className="font-mono text-xs text-muted mb-4">{job.location}</p>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-5">
                {/* Role in sans-serif bold */}
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                  {job.role}
                </h3>
                <span className="text-muted hidden md:inline">—</span>
                {/* Company in serif */}
                <span className="font-serif text-lg md:text-xl text-muted italic">
                  {job.company}
                </span>
              </div>

              {job.tech && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tech.split(", ").map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full bg-surface border border-card-border text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <ul className="space-y-3">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="text-muted leading-relaxed flex gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {job.liveUrl && (
                <a
                  href={job.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm text-accent hover:underline"
                >
                  {job.liveUrl.replace("https://", "")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
