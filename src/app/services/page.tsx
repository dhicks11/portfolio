import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design, Local SEO & AI Automation in North Carolina | Hicks Digital",
  description:
    "Hicks Digital builds websites that rank on Google, sets up local SEO, and automates client follow-up for small businesses in Greensboro, Halifax County & across NC. Resume & LinkedIn services from $10. Get a free audit — delivered in 24 hours.",
  keywords: [
    "web design Greensboro NC",
    "local SEO North Carolina",
    "small business website design",
    "Google Business Profile setup",
    "AI automation for small business",
    "resume writing service",
    "LinkedIn profile optimization",
    "web developer Halifax County NC",
  ],
  alternates: {
    canonical: "https://daylenhicks.com/services",
  },
  openGraph: {
    title: "Hicks Digital — Web Design, Local SEO & AI Automation in NC",
    description:
      "Websites that rank, local SEO that gets you found, and AI automation that keeps clients coming back. Serving Greensboro, Halifax County & all of North Carolina. Free audit in 24 hours.",
    url: "https://daylenhicks.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hicks Digital — Web Design, Local SEO & AI Automation in NC",
    description:
      "Websites that rank, local SEO that gets you found, and AI automation that keeps clients coming back. Free audit in 24 hours.",
  },
};

const faqs = [
  {
    question: "How much does a small business website cost?",
    answer:
      "Custom Next.js websites start at $750 — no page builders, no templates. Every site is mobile-first, built to load fast, and ships with local SEO and structured data baked in. Book a free call and we'll scope an exact quote before you pay anything.",
  },
  {
    question: "How fast will I get my project?",
    answer:
      "Most business projects are delivered within 5–7 days. Career services move even faster: resume rewrites and LinkedIn optimizations are delivered within 48 hours, and portfolio roasts within 72 hours.",
  },
  {
    question: "What is local SEO and why does my business need it?",
    answer:
      'Local SEO is how customers find you when they search things like "barber near me" or "plumber in Greensboro." We claim and optimize your Google Business Profile, add structured data to your site, and keep your rankings growing — so you show up on Google Maps before your competitors do.',
  },
  {
    question: "Do you only work with businesses in North Carolina?",
    answer:
      "We're based in North Carolina — Greensboro and Halifax County — and love working with local businesses, but every service is delivered remotely. Wherever you are, we can help.",
  },
  {
    question: "How does the free audit work?",
    answer:
      "Fill out the audit form with your business name and website (if you have one). Within 24 hours you'll get a one-page breakdown of exactly what's holding your online presence back — no commitment and no sales pitch.",
  },
  {
    question: "What if I'm not happy with the work?",
    answer:
      "Every project includes revision rounds, and we don't consider a job done until you're satisfied. Our refund policy is published right on this site — no fine print.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Hicks Digital",
  url: "https://daylenhicks.com/services",
  image: "https://daylenhicks.com/profile.jpg",
  description:
    "Web design, local SEO, AI automation, and career services for small businesses and professionals in Greensboro, Halifax County, and across North Carolina.",
  email: "hicksdigital.dev@gmail.com",
  priceRange: "$10 - $750+",
  founder: {
    "@type": "Person",
    name: "Daylen Hicks",
    url: "https://daylenhicks.com",
  },
  areaServed: [
    { "@type": "City", name: "Greensboro" },
    { "@type": "AdministrativeArea", name: "Halifax County" },
    { "@type": "State", name: "North Carolina" },
  ],
  sameAs: [
    "https://www.instagram.com/hicksdigital_/",
    "https://daylenhicks.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hicks Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        price: "10",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "Resume Revamp" },
      },
      {
        "@type": "Offer",
        price: "20",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "LinkedIn Profile Optimization" },
      },
      {
        "@type": "Offer",
        price: "100",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "Google Business Profile Setup" },
      },
      {
        "@type": "Offer",
        price: "150",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "Monthly SEO Retainer" },
      },
      {
        "@type": "Offer",
        price: "300",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "AI Appointment & Follow-Up Automation" },
      },
      {
        "@type": "Offer",
        price: "750",
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: "Website Design & Development" },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const quickWins = [
  {
    title: "Resume Revamp",
    description:
      "Your resume gets 6 seconds. We make every one count. Full rewrite with ATS optimization, modern formatting, and targeted keywords for your dream role.",
    includes: [
      "Complete resume rewrite & redesign",
      "ATS-friendly formatting",
      "Keyword optimization for target roles",
      "Two rounds of revisions",
      "Delivered within 48 hours",
    ],
    price: "$10",
    badge: "Most Popular",
    stripeUrl: "https://buy.stripe.com/4gM5kE4O78Ui8QZ2Yn3F606",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Recruiters search LinkedIn 30M+ times daily. We make sure they find you. Full profile rewrite that turns views into interviews and connections into clients.",
    includes: [
      "Headline & about section rewrite",
      "Experience bullet point optimization",
      "Keyword strategy for recruiter search",
      "Banner image & profile photo guidance",
      "Delivered within 48 hours",
    ],
    price: "$20",
    badge: "High ROI",
    stripeUrl: "https://buy.stripe.com/14AdRa94n2vUc3b6az3F607",
  },
  {
    title: "Portfolio / Landing Page Roast",
    description:
      "Honest, expert feedback you can act on today. Recorded video teardown covering design, copy, SEO, and conversion — with exact fixes to increase results.",
    includes: [
      "5–10 min recorded video walkthrough",
      "Design & UX feedback",
      "SEO quick wins identified",
      "Copy & conversion suggestions",
      "Delivered within 72 hours",
    ],
    price: "$15",
    badge: "Quick Win",
    stripeUrl: "https://buy.stripe.com/aFadRabcvgmKaZ7gPd3F602",
  },
];

const services = [
  {
    number: "01",
    tag: "Local SEO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Google Business Profile Setup",
    description:
      "Most local businesses are invisible on Google Maps. We fix that in under an hour — and customers start finding you the same week.",
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
    stripeUrl: "https://buy.stripe.com/bJe5kE2FZ2vUgjr1Uj3F603",
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
      "Rankings don't maintain themselves. We keep your Google presence growing every month so new customers keep finding you — without you lifting a finger.",
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
    stripeUrl: "https://buy.stripe.com/00wfZi80jdayebjaqP3F604",
  },
  {
    number: "03",
    tag: "Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "AI Literacy Workshop",
    description:
      "Hands-on AI training for students, community organizations, and small business teams. Practical, not theoretical — participants leave knowing how to use these tools.",
    includes: [
      "1–2 hour hands-on session",
      "AI for resumes, career planning & productivity",
      "Custom curriculum for your audience",
      "Slides, handouts & follow-up resources",
    ],
    price: "$300",
    priceLabel: "/ session",
    badge: "Schools & orgs",
    stripeUrl: "https://buy.stripe.com/4gM5kE4O78Ui8QZ2Yn3F606",
  },
  {
    number: "04",
    tag: "Foundation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website Design & Development",
    description:
      "Your website is your first impression. We build fast, mobile-first sites designed to rank on Google and convert visitors into paying customers.",
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
    stripeUrl: "https://calendly.com/daylenhicks10",
    buttonLabel: "Book a Call",
  },
];

const featuredService = {
  number: "05",
  tag: "High Impact",
  title: "AI Appointment & Follow-Up Automation",
  description:
    "Stop losing clients to no-shows and forgotten follow-ups. We build an automated system that handles reminders, review requests, and re-engagement — so you focus on the work, not the admin.",
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
  stripeUrl: "https://calendly.com/daylenhicks10",
  buttonLabel: "Book a Call",
};

const processSteps = [
  {
    title: "Free Audit",
    description:
      "We review your current online presence and send a one-page breakdown of exactly what's holding you back — no strings attached.",
  },
  {
    title: "Proposal",
    description:
      "Based on the audit, we recommend the service that gives you the best ROI. You only pay for what actually moves the needle.",
  },
  {
    title: "Build",
    description:
      "We get to work. Most projects are delivered within 5–7 days. You're updated throughout — no disappearing acts.",
  },
  {
    title: "Results",
    description:
      "You start ranking, booking, and growing. Retainer clients get monthly reports showing exactly what's improving.",
  },
];

const stats = [
  { value: "48hr", label: "Avg. Delivery" },
  { value: "8+", label: "Services" },
  { value: "$10", label: "Starting At" },
  { value: "24hr", label: "Free Audit Turnaround" },
];

const proofPoints = [
  {
    value: "500+",
    title: "Users on platforms we've built",
    description:
      "Our founder built and scaled I Got Next — a full-stack sports platform serving 500+ active players and 120 facilities across 3 cities.",
  },
  {
    value: "1 of 12",
    title: "Selected nationwide",
    description:
      "Chosen from HBCUs across the country for the TMCF × CSAA × Guidewire Innovation Challenge — and pitched a venture directly to insurance executives.",
  },
  {
    value: "30+",
    title: "Students trained in AI",
    description:
      "We deliver hands-on AI literacy workshops for schools and community organizations across North Carolina.",
  },
  {
    value: "R&D",
    title: "Real engineering background",
    description:
      "Built by a software engineer with R&D experience at JMP (SAS Institute) — not a template reseller. Your site is engineered, not assembled.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
          <a
            href="/services"
            className="text-xl font-bold text-foreground tracking-tight"
          >
            Hicks<span className="text-accent">Digital</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted hover:text-accent transition-colors">
              Portfolio
            </Link>
            <a href="#career" className="text-sm text-muted hover:text-accent transition-colors">
              Career Services
            </a>
            <a href="#services" className="text-sm text-muted hover:text-accent transition-colors">
              Business Solutions
            </a>
            <a href="#process" className="text-sm text-muted hover:text-accent transition-colors">
              Process
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-accent transition-colors">
              FAQ
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZbdNsUgJ_oM60jHLssIhaLX-0yU4QXkAeXkwrxy0qPPr0gQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary text-xs"
            >
              Free Audit
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[60%] h-[60%] opacity-[0.07] rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, var(--color-accent), transparent)" }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Hicks Digital
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight max-w-[18ch]">
              Web design, SEO &amp; AI automation that{" "}
              <span className="text-accent">grows</span> your business.
            </h1>
            <p className="mt-8 text-muted text-lg max-w-[58ch] leading-relaxed">
              We build websites that rank on Google, get you found on Google
              Maps, and automate your client follow-up — for small businesses
              and professionals in Greensboro, Halifax County, and across North
              Carolina. Built by someone from the community, for the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZbdNsUgJ_oM60jHLssIhaLX-0yU4QXkAeXkwrxy0qPPr0gQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-center"
              >
                Get Your Free Audit
              </a>
              <a
                href="https://calendly.com/daylenhicks10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline text-center"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-card-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 text-center ${i < stats.length - 1 ? "border-r border-card-border" : ""}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted tracking-wider uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Hicks Digital — proof */}
        <section id="why" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Why Hicks Digital
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-[24ch]">
            Hire an <span className="text-accent">engineer</span>, not an agency.
          </h2>
          <p className="text-muted text-sm mb-12 max-w-[55ch] leading-relaxed">
            No account managers, no outsourcing, no bloated retainers. You work
            directly with the engineer building your product — and the receipts
            are public.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-card-border">
            {proofPoints.map((point, i) => (
              <div
                key={point.title}
                className={`p-8 hover:bg-surface transition-colors ${
                  i < proofPoints.length - 1 ? "border-b lg:border-b-0 lg:border-r border-card-border" : ""
                }`}
              >
                <p className="text-3xl font-bold text-accent mb-3">{point.value}</p>
                <h3 className="font-bold text-sm mb-3">{point.title}</h3>
                <p className="text-xs text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-6 md:mx-12 lg:mx-24" />

        {/* Career Services — Quick Wins */}
        <section id="career" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Career Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-[20ch]">
            Land more interviews. <span className="text-accent">Starting at $10.</span>
          </h2>
          <p className="text-muted text-sm mb-12 max-w-[50ch] leading-relaxed">
            Job hunting is competitive. Your resume and LinkedIn shouldn&apos;t be the reason you&apos;re getting overlooked. Quick turnaround, real results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-card-border">
            {quickWins.map((item, i) => (
              <div
                key={item.title}
                className={`p-8 md:p-10 hover:bg-surface transition-colors group ${
                  i < quickWins.length - 1 ? "border-b md:border-b-0 md:border-r border-card-border" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                    {item.badge}
                  </span>
                  <span className="text-3xl font-bold text-accent">{item.price}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {item.includes.map((inc) => (
                    <li
                      key={inc}
                      className="text-xs text-muted flex items-center gap-3 py-1.5 border-b border-card-border/50"
                    >
                      <span className="text-accent text-[10px] shrink-0">&rarr;</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs font-semibold tracking-wider uppercase py-3 bg-accent text-background hover:bg-accent-dark transition-colors duration-300"
                >
                  Get Started &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-6 md:mx-12 lg:mx-24" />

        {/* Business Solutions */}
        <section id="services" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Business Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-[20ch]">
            Grow your business <span className="text-accent">online.</span>
          </h2>
          <p className="text-muted text-sm mb-12 max-w-[50ch] leading-relaxed">
            From getting found on Google to automating your entire client follow-up — we handle the tech so you can focus on what you do best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-card-border">
            {services.map((service) => (
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
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
                <div className="flex items-baseline gap-3 mb-6">
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
                <a
                  href={service.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs font-semibold tracking-wider uppercase py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-colors duration-300"
                >
                  {service.buttonLabel || "Get Started"} &rarr;
                </a>
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
                <h3 className="text-xl font-bold mb-3">
                  {featuredService.title}
                </h3>
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
                <a
                  href={featuredService.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs font-semibold tracking-wider uppercase py-3 mt-6 border border-accent text-accent hover:bg-accent hover:text-background transition-colors duration-300"
                >
                  {featuredService.buttonLabel || "Get Started"} &rarr;
                </a>
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

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-6 md:mx-12 lg:mx-24" />

        {/* FAQ */}
        <section id="faq" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 max-w-[22ch]">
            Questions, <span className="text-accent">answered.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-card-border">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-8 md:p-10 border-b border-r border-card-border hover:bg-surface transition-colors"
              >
                <h3 className="font-bold text-base mb-3">{faq.question}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
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
                Ready to grow?
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-[45ch]">
                Get a free one-page audit of your current online presence. No commitment, no sales pitch — just honest feedback delivered within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 relative z-10 shrink-0">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdZbdNsUgJ_oM60jHLssIhaLX-0yU4QXkAeXkwrxy0qPPr0gQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-center"
              >
                Get Free Audit
              </a>
              <Link href="/" className="btn-pill btn-outline text-center">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-card-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>
              &copy; {new Date().getFullYear()} Hicks Digital. Serving
              Greensboro, Halifax County &amp; all of North Carolina — remote
              friendly.
            </p>
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
