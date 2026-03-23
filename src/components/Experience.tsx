"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <span className="section-label">Experience</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16 leading-tight">
        Where I&apos;ve
        <br />
        <span className="text-accent">worked</span>
      </h2>

      <div className="space-y-0">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            className="group border-t border-card-border py-8 md:py-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
              <div>
                <p className="text-sm text-muted mb-1">{job.dates}</p>
                <p className="text-sm text-muted">{job.location}</p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {job.role}
                  </h3>
                  <span className="text-muted">—</span>
                  <span className="text-muted">{job.company}</span>
                </div>

                {job.tech && (
                  <p className="text-xs text-accent/70 font-mono mb-4 tracking-wide">
                    {job.tech}
                  </p>
                )}

                <ul className="space-y-2">
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
                    className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:underline"
                  >
                    {job.liveUrl.replace("https://", "")}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-card-border" />
      </div>
    </SectionWrapper>
  );
}
