"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Work <span className="gradient-text">Experience</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-card-border" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative pl-8 md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-[6.5px] rounded-full bg-accent border-2 border-background" />

              <div className="card-glow p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <span className="text-sm text-muted">{job.dates}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <p className="text-accent font-medium">{job.role}</p>
                  <span className="text-sm text-muted">{job.location}</span>
                </div>
                {job.tech && (
                  <p className="text-xs text-muted mb-3 font-mono">
                    {job.tech}
                  </p>
                )}
                <ul className="space-y-2">
                  {job.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="text-sm text-muted leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">&#8250;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {job.liveUrl && (
                  <a
                    href={job.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    {job.liveUrl.replace("https://", "")} &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
