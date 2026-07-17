"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education, activities, certificate } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-header">
        <span className="section-number">03</span>
        <span className="section-word">Education</span>
      </div>
      <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-16 leading-[1.1]">
        Academic
        <br />
        <span className="text-accent">background</span>
      </h2>

      {/* Certificate highlight */}
      <motion.div
        className="cert-highlight p-8 md:p-10 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(124,136,232,0.3)] flex items-center justify-center shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent"
                aria-hidden="true"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="award-badge">Certified</span>
                <span className="text-xs text-[var(--color-muted)] font-mono">
                  {certificate.date}
                </span>
              </div>
              <h3 className="editorial-heading text-xl md:text-2xl text-foreground mt-2">
                {certificate.name}
              </h3>
              <p className="text-sm text-[var(--color-accent-text)] font-medium mt-1">
                {certificate.issuer}
              </p>
              <p className="text-foreground text-sm mt-3 max-w-xl leading-[1.75]">
                {certificate.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {education.map((school, i) => (
          <motion.div
            key={school.school}
            className="noura-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="editorial-heading text-xl mb-2">{school.school}</h3>
            <p className="text-[var(--color-accent-text)] text-sm font-medium mb-4">
              {school.degree}
            </p>
            <div className="flex justify-between text-sm text-[var(--color-muted)] font-mono">
              <span>{school.dates}</span>
              <span>{school.location}</span>
            </div>
            {school.highlight && (
              <p className="text-foreground text-sm mt-4 leading-[1.75]">
                {school.highlight}
              </p>
            )}
            {school.gpa && (
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-muted)]">GPA: </span>
                <span className="text-accent font-bold">{school.gpa}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="editorial-heading text-lg mb-6">
          Competitions & Activities
        </h3>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <span key={activity} className="tag-pill">
              {activity}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
