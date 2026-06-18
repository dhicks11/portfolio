import type { Metadata } from "next";
import { personalInfo } from "@/data/resume";

export const metadata: Metadata = {
  title: "Quick Links — Daylen Hicks",
  description:
    "Find all of Daylen Hicks' projects, socials, and ways to connect.",
  openGraph: {
    title: "Quick Links — Daylen Hicks",
    description:
      "Find all of Daylen Hicks' projects, socials, and ways to connect.",
    url: "https://daylenhicks.com/links",
  },
};

const projects = [
  {
    label: "I Got Next",
    href: "https://igotnextapp.vercel.app",
    description: "Real-time basketball court finder with GPS check-ins",
    tag: "Live App",
  },
  {
    label: "Aggie Aid",
    href: "https://aggie-aid.vercel.app",
    description: "Student resource platform for NC A&T",
    tag: "Live App",
  },
  {
    label: "Services",
    href: "https://daylenhicks.com/services",
    description: "Web dev, AI automation, SEO — starting at $5",
    tag: "Hire Me",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dhicks11",
    username: "@dhicks11",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/daylenhicks",
    username: "in/daylenhicks",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hicksdigital_/",
    username: "@hicksdigital_",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Calendly",
    href: "https://calendly.com/daylenhicks10",
    username: "Book a free call",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hicksdigital.dev@gmail.com",
    username: "hicksdigital.dev@gmail.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
          <a
            href="/"
            className="text-xl font-bold text-foreground tracking-tight"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-muted hover:text-accent transition-colors">
              Home
            </a>
            <a href="/services" className="text-sm text-muted hover:text-accent transition-colors">
              Services
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-40 pb-20">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Quick Links
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Let&apos;s <span className="text-accent">connect</span>.
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-[45ch]">
            Everything in one place — projects, socials, and ways to work together.
          </p>
        </div>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
            Projects
          </h2>
          <div className="border border-card-border">
            {projects.map((project, i) => (
              <a
                key={project.label}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-5 hover:bg-surface transition-colors ${
                  i < projects.length - 1 ? "border-b border-card-border" : ""
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.label}
                    </p>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/20 px-2 py-0.5">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted">{project.description}</p>
                </div>
                <svg
                  className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* Socials */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
            Connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 p-4 border border-card-border hover:border-accent/50 hover:bg-surface transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 transition-colors">
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {social.label}
                  </p>
                  <p className="text-xs text-muted truncate">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border border-card-border p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Ready to work together?</h2>
            <p className="text-sm text-muted mb-6 max-w-[40ch]">
              Get a free one-page audit of your online presence — delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZbdNsUgJ_oM60jHLssIhaLX-0yU4QXkAeXkwrxy0qPPr0gQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-center text-sm"
              >
                Get Free Audit
              </a>
              <a
                href="/"
                className="btn-pill btn-outline text-center text-sm"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border">
        <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
