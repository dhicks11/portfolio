"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

interface VolunteerEntry {
  organization: string;
  activity: string;
  date: string;
  location?: string;
  hours?: number;
  upcoming?: boolean;
  image?: string;
}

const volunteerWork: VolunteerEntry[] = [
  {
    organization: "Boys 2 Men AI Workshop",
    activity:
      "Delivered an AI literacy workshop to 30+ young men in Halifax County — covering practical AI tools, career paths in tech, and hands-on demos.",
    location: "Roanoke Rapids, NC",
    date: "May 2026",
    image: "/community/boys2men-workshop.jpg",
  },
  {
    organization: "Northampton County Schools — AI Workshop",
    activity:
      "Partnered with Northampton County Schools to deliver an AI education session for students, focused on real-world applications and pathways into tech careers.",
    location: "Northampton County, NC",
    date: "Jul. 2026",
    upcoming: true,
  },
  {
    organization: "First Presbyterian Church",
    activity: "Packing plates for the homeless and less fortunate",
    hours: 2,
    date: "Mar. 2026",
  },
];

const services = [
  {
    title: "College Transition Guidance",
    description:
      "Helping high school students navigate the leap to college — from applications and scholarships to what the first semester actually looks like.",
  },
  {
    title: "Motivational Speaking",
    description:
      "Sharing my journey from Northampton County to NC A&T, hackathon stages, and the tech industry. Available for schools, youth programs, and community organizations.",
  },
  {
    title: "General Consultations",
    description:
      "One-on-one conversations about getting into tech, choosing a major, building a portfolio, or starting your first project. No question is too basic.",
  },
];

export default function Community() {
  return (
    <SectionWrapper id="community">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="section-label mb-4">Give Back</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
            Building a <span className="text-accent font-serif italic">bridge home</span>
          </h2>
        </div>
        <p className="text-[var(--color-muted)] max-w-md text-sm leading-relaxed">
          I&apos;m building a gateway program to give back to my community —
          making the path from where I started to where I am now a little
          clearer for those coming next.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.title} className="bento-card p-6 md:p-8 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Volunteer Log */}
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Community Service</h3>
        <div className="space-y-3">
          {volunteerWork.map((item) => (
            <div
              key={`${item.organization}-${item.date}`}
              className="bento-card overflow-hidden"
            >
              {item.image && (
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={item.image}
                    alt={`${item.organization} — group photo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover object-center"
                  />
                </div>
              )}
              <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="font-semibold">{item.organization}</p>
                    {item.upcoming && <span className="award-badge">Upcoming</span>}
                  </div>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{item.activity}</p>
                  {item.location && (
                    <p className="text-xs text-[var(--color-hint)] mt-1 font-mono">{item.location}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--color-muted)] shrink-0">
                  {item.hours && <span className="tag-pill">{item.hours} hrs</span>}
                  <span className="font-mono text-xs">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-pill btn-outline"
        >
          Book a Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </div>
    </SectionWrapper>
  );
}
