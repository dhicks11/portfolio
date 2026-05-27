"use client";

import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
        <div className="px-6 md:px-12 lg:px-24 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:border-r lg:border-[var(--color-border)]">
          <div>
            <p className="section-label mb-4">Experience</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
              Where I&apos;ve{" "}
              <span className="text-accent font-serif italic">worked</span>
            </h2>
            <p className="text-[var(--color-muted)] mt-4 max-w-sm text-sm leading-relaxed">
              From AI engineering at scale to founding products from scratch.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 lg:py-12 space-y-0">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="border-b border-[var(--color-border)] py-8 md:py-10"
            >
              <p className="font-mono text-xs text-[var(--color-hint)] mb-1">
                {job.dates} · {job.location}
              </p>

              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-4">
                <h3 className="text-lg md:text-xl font-semibold">{job.role}</h3>
                <span className="text-[var(--color-muted)] text-base">{job.company}</span>
              </div>

              {job.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tech.split(", ").map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              )}

              <ul className="space-y-2">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="text-[var(--color-muted)] text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-hint)]">
                    {bullet}
                  </li>
                ))}
              </ul>

              {job.liveUrl && (
                <a href={job.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:underline" aria-label={`Visit ${job.company} live site`}>
                  {job.liveUrl.replace("https://", "")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                </a>
              )}

              {job.articleUrl && (
                <a href={job.articleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:underline">
                  Read the article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
