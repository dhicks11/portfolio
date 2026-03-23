"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education, activities, certificate } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <span className="section-label">Education</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16 leading-tight">
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
            <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/20 text-accent border border-accent/30">
                  Certified
                </span>
                <span className="text-xs text-muted font-mono">
                  {certificate.date}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2">
                {certificate.name}
              </h3>
              <p className="text-sm text-accent/80 font-medium mt-1">
                {certificate.issuer}
              </p>
              <p className="text-muted text-sm mt-3 max-w-xl leading-relaxed">
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
            <h3 className="text-xl font-bold mb-2">{school.school}</h3>
            <p className="text-accent text-sm font-medium mb-4">
              {school.degree}
            </p>
            <div className="flex justify-between text-sm text-muted">
              <span>{school.dates}</span>
              <span>{school.location}</span>
            </div>
            {school.gpa && (
              <div className="mt-4 pt-4 border-t border-card-border">
                <span className="text-sm text-muted">GPA: </span>
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
        <h3 className="text-lg font-bold mb-6">
          Competitions & Activities
        </h3>
        <div className="flex flex-wrap gap-3">
          {activities.map((activity) => (
            <span
              key={activity}
              className="px-4 py-2.5 text-sm rounded-full border border-card-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
            >
              {activity}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
