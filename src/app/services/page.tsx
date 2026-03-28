import type { Metadata } from "next";
import { personalInfo } from "@/data/resume";

export const metadata: Metadata = {
  title: "Services — Daylen Hicks | Web Development, SEO & AI Automation",
  description:
    "Web development, local SEO, Google Business setup, and AI automation for small businesses in the NC Triad and Halifax/Northampton County. Built by Daylen Hicks.",
  openGraph: {
    title: "Services — Daylen Hicks",
    description:
      "Web development, local SEO, and AI automation for small businesses across North Carolina.",
    url: "https://daylenhicks.com/services",
  },
};

const services = [
  {
    number: "01",
    tag: "Quick Win",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Google Business Profile Setup",
    description:
      "Most local businesses are invisible on Google Maps. I fix that in under an hour — and customers start finding you the same week.",
    includes: [
      "Claim & verify your Google Business listing",
      "Optimized business description & categories",
      "Photos, hours, services, and Q&A setup",
      "JSON-LD structured data added to your site",
      '"Near me" search optimization',
    ],
    price: "$100",
    priceLabel: "one-time",
    badge: "Fast turnaround",
  },
  {
    number: "02",
    tag: "Ongoing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Monthly SEO Retainer",
    description:
      "Rankings don't maintain themselves. I keep your Google presence growing every month so new customers keep finding you — without you lifting a finger.",
    includes: [
      "Monthly Google Business profile updates & posts",
      "Keyword ranking monitoring",
      "One new local content page per month",
      "Technical SEO fixes as they arise",
      "Monthly performance report",
    ],
    price: "$150",
    priceLabel: "/ month",
    badge: "Recurring",
  },
  {
    number: "04",
    tag: "Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "AI Literacy Workshop",
    description:
      "Hands-on AI training for students, community organizations, and small business teams. Practical, not theoretical — participants leave knowing how to actually use these tools.",
    includes: [
      "1–2 hour hands-on session",
      "AI for resumes, career planning & productivity",
      "Custom curriculum for your audience",
      "Slides, handouts & follow-up resources",
    ],
    price: "$300",
    priceLabel: "/ session",
    badge: "Schools & orgs",
  },
  {
    number: "05",
    tag: "Foundation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website Redesign",
    description:
      "Your website is your first impression. I build fast, mobile-first sites that are built to rank on Google and convert visitors into paying customers.",
    includes: [
      "Custom Next.js design — no GoDaddy or Wix",
      "Mobile-first, lightning fast",
      "Local SEO & structured data built in",
      "Online booking or ordering integration",
      "Google reviews display",
    ],
    price: "$750",
    priceLabel: "starting at",
    badge: "Custom quote",
  },
];

const featuredService = {
  number: "03",
  tag: "High Impact",
  title: "AI Appointment & Follow-Up Automation",
  description:
    "Stop losing clients to no-shows and forgetting to ask for reviews. I build an automated system that handles your reminders, follow-ups, and review requests — so you can focus on the work, not the admin.",
  includes: [
    "Automated booking confirmation via SMS or email",
    "24-hour appointment reminder messages",
    "Post-visit review request (2 hrs after appointment)",
    "New client welcome sequence",
    "Lapsed client re-engagement messages",
    "Google review link integration",
    "Monthly maintenance — $50/mo optional add-on",
  ],
  price: "$300",
  priceLabel: "one-time setup",
  badge: "Best value",
};

const processSteps = [
  {
    title: "Free Audit",
    description:
      "I review your current online presence and send you a one-page breakdown of exactly what's hurting you — no strings attached.",
  },
  {
    title: "Proposal",
    description:
      "Based on the audit, I recommend the service that gives you the best ROI. You only pay for what actually moves the needle.",
  },
  {
    title: "Build",
    description:
      "I get to work. Most projects are delivered within 5–7 days. You're updated throughout — no disappearing acts.",
  },
  {
    title: "Results",
    description:
      "You start ranking, booking, and growing. Ongoing retainer clients get monthly reports showing exactly what's improving.",
  },
];

export default function ServicesPage() {
  return (
    <>
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
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-muted hover:text-accent transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm text-accent transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm text-muted hover:text-accent transition-colors">
              Process
            </a>
            <a
              href="https://calendly.com/daylenhicks10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary text-xs"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight max-w-[14ch]">
            I build what{" "}
            <span className="text-accent">grows</span> your business.
          </h1>
          <p className="mt-8 text-muted text-lg max-w-[50ch] leading-relaxed">
            Web development, local SEO, and AI automation for small businesses
            across the Triad and Halifax/Northampton County, NC. Built by someone
            from the community, for the community.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-6 md:mx-12 lg:mx-24" />

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-card-border">
            {/* Regular services */}
            {services.slice(0, 2).map((service) => (
              <div
                key={service.number}
                className="p-8 md:p-10 border-b border-r border-card-border hover:bg-surface transition-colors group"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-6 font-mono opacity-70">
                  {service.number} / {service.tag}
                </p>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{service.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted flex items-center gap-3 py-1.5 border-b border-card-border/50"
                    >
                      <span className="text-accent text-[10px] shrink-0">&rarr;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-accent">
                    {service.price}
                  </span>
                  <span className="text-xs text-muted tracking-wider">
                    {service.priceLabel}
                  </span>
                  <span className="ml-auto text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                    {service.badge}
                  </span>
                </div>
              </div>
            ))}

            {/* Featured full-width card */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 border-b border-card-border hover:bg-surface transition-colors group">
              <div className="p-8 md:p-10">
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-6 font-mono opacity-70">
                  {featuredService.number} / {featuredService.tag}
                </p>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-3">
                  {featuredService.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {featuredService.description}
                </p>
                <div className="flex items-baseline gap-3 mt-8">
                  <span className="text-3xl font-bold text-accent">
                    {featuredService.price}
                  </span>
                  <span className="text-xs text-muted tracking-wider">
                    {featuredService.priceLabel}
                  </span>
                  <span className="ml-auto text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                    {featuredService.badge}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 md:border-l border-t md:border-t-0 border-card-border">
                <ul className="space-y-2">
                  {featuredService.includes.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted flex items-center gap-3 py-2 border-b border-card-border/50"
                    >
                      <span className="text-accent text-[10px] shrink-0">&rarr;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Remaining services */}
            {services.slice(2).map((service) => (
              <div
                key={service.number}
                className="p-8 md:p-10 border-b md:border-b-0 border-r border-card-border hover:bg-surface transition-colors group"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-accent mb-6 font-mono opacity-70">
                  {service.number} / {service.tag}
                </p>
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{service.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted flex items-center gap-3 py-1.5 border-b border-card-border/50"
                    >
                      <span className="text-accent text-[10px] shrink-0">&rarr;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-accent">
                    {service.price}
                  </span>
                  <span className="text-xs text-muted tracking-wider">
                    {service.priceLabel}
                  </span>
                  <span className="ml-auto text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                    {service.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-6 md:mx-12 lg:mx-24" />

        {/* Process */}
        <section id="process" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              How it works
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-card-border">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="p-8 border-b sm:border-r border-card-border last:border-b-0 sm:last:border-r-0"
              >
                <span className="text-5xl font-bold text-accent/15 leading-none block mb-4 font-mono">
                  0{i + 1}
                </span>
                <h3 className="font-bold text-sm mb-3">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
          <div className="border border-card-border p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to get started?
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-[45ch]">
                Book a free call or send me an email. I&apos;ll send you a free
                one-page audit of your current online presence within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
              <a
                href="https://calendly.com/daylenhicks10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-center"
              >
                Get Free Audit
              </a>
              <a href="/" className="btn-pill btn-outline text-center">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Legal links */}
        <footer className="border-t border-card-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/refund-policy" className="hover:text-accent transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
