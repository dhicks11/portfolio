"use client";

import SectionWrapper from "./SectionWrapper";
import { education, activities, certificate } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <p className="section-label mb-4">Education</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight mb-12">
        Academic <span className="text-accent font-serif italic">background</span>
      </h2>

      {/* Certificate */}
      <div className="cert-highlight p-6 md:p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-soft)] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="award-badge">Certified</span>
              <span className="text-xs text-[var(--color-hint)] font-mono">{certificate.date}</span>
            </div>
            <h3 className="text-lg font-semibold mt-1">{certificate.name}</h3>
            <p className="text-sm text-accent mt-0.5">{certificate.issuer}</p>
            <p className="text-[var(--color-muted)] text-sm mt-2 max-w-xl leading-relaxed">{certificate.description}</p>
          </div>
        </div>
      </div>

      {/* Schools */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {education.map((school) => (
          <div key={school.school} className="bento-card p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-1">{school.school}</h3>
            <p className="text-accent text-sm mb-4">{school.degree}</p>
            <div className="flex justify-between text-xs text-[var(--color-hint)] font-mono">
              <span>{school.dates}</span>
              <span>{school.location}</span>
            </div>
            {school.highlight && (
              <p className="text-[var(--color-muted)] text-sm mt-4 leading-relaxed">{school.highlight}</p>
            )}
            {school.gpa && (
              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-muted)]">GPA: </span>
                <span className="text-foreground font-semibold">{school.gpa}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Competitions & Activities</h3>
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <span key={activity} className="tag-pill">{activity}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
