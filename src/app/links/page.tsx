import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links — Daylen Hicks",
  description:
    "Find all of Daylen Hicks' projects, socials, and ways to connect.",
  openGraph: {
    title: "Links — Daylen Hicks",
    description:
      "Find all of Daylen Hicks' projects, socials, and ways to connect.",
    url: "https://daylenhicks.com/links",
  },
};

const links = [
  {
    label: "Portfolio",
    href: "https://daylenhicks.com",
    description: "My main site — projects, experience, and services",
    icon: "🌐",
  },
  {
    label: "I Got Next",
    href: "https://igotnextapp.vercel.app",
    description: "Real-time basketball court finder with GPS check-ins",
    icon: "🏀",
  },
  {
    label: "Aggie Aid",
    href: "https://aggie-aid.vercel.app",
    description: "Student resource platform for NC A&T",
    icon: "📚",
  },
  {
    label: "Services",
    href: "https://daylenhicks.com/services",
    description: "Web dev, AI automation, SEO — get a free audit",
    icon: "💼",
  },
  {
    label: "Book a Call",
    href: "https://calendly.com/daylenhicks10",
    description: "Schedule a free consultation",
    icon: "📅",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/dhicks11",
    description: "Open-source projects and contributions",
    icon: "⚡",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/daylenhicks",
    description: "Professional profile and network",
    icon: "🔗",
    external: true,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@trustyahwehh",
    description: "@trustyahwehh",
    icon: "🎵",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hicksdigital.dev@gmail.com",
    description: "hicksdigital.dev@gmail.com",
    icon: "✉️",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-16">
      {/* Avatar / Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl font-bold text-accent">DH</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">Daylen Hicks</h1>
        <p className="text-muted text-sm mt-1">
          Software Engineer &bull; AI Developer &bull; Freelancer
        </p>
      </div>

      {/* Links */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-4 rounded-xl border border-card-border bg-card hover:border-accent/50 hover:bg-surface transition-all duration-300"
          >
            <span className="text-2xl shrink-0">{link.icon}</span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {link.label}
              </p>
              <p className="text-xs text-muted truncate">{link.description}</p>
            </div>
            <svg
              className="w-4 h-4 text-muted group-hover:text-accent transition-colors ml-auto shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="text-xs text-muted mt-12">
        &copy; {new Date().getFullYear()} Daylen Hicks
      </p>
    </div>
  );
}
