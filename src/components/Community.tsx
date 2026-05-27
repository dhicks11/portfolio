"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "College Transition Guidance",
    description:
      "Helping high school students navigate the leap to college — from applications and scholarships to what the first semester actually looks like. I made this transition from a rural community and want to make it smoother for the next generation.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Motivational Speaking",
    description:
      "Sharing my journey from Northampton County to NC A&T, hackathon stages, and the tech industry. Available for schools, youth programs, and community organizations looking to inspire the next wave of builders.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "General Consultations",
    description:
      "One-on-one conversations about getting into tech, choosing a major, building a portfolio, or starting your first project. No question is too basic — I'm here to help you get started.",
  },
];

export default function Community() {
  return (
    <SectionWrapper id="community">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <div className="section-header">
            <span className="section-number">07</span>
            <span className="section-word">Give Back</span>
          </div>
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.1]">
            Building a
            <br />
            <span className="text-accent font-serif italic">Bridge Home</span>
          </h2>
        </div>
        <p className="text-[var(--color-muted)] max-w-md text-base leading-[1.75]">
          I&apos;m building a gateway program to give back to my community —
          making the path from where I started to where I am now a little
          clearer for those coming next.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bento-card p-8 md:p-10 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(59,130,246,0.3)] flex items-center justify-center text-accent mb-6">
              {service.icon}
            </div>
            <h3 className="editorial-heading text-xl mb-3">{service.title}</h3>
            <p className="text-foreground leading-[1.75] flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Volunteer Service Log */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="editorial-heading text-2xl mb-6">Community Service</h3>
        <div className="space-y-4">
          {volunteerWork.map((item) => (
            <div
              key={`${item.organization}-${item.date}`}
              className="bento-card overflow-hidden"
            >
              {item.image && (
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src={item.image}
                    alt={`${item.organization} — group photo`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover object-center"
                  />
                </div>
              )}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-soft)] border border-[rgba(59,130,246,0.3)] flex items-center justify-center text-accent shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="editorial-heading text-lg">
                        {item.organization}
                      </p>
                      {item.upcoming && (
                        <span className="award-badge">Upcoming!</span>
                      )}
                    </div>
                    <p className="text-foreground leading-[1.75]">
                      {item.activity}
                    </p>
                    {item.location && (
                      <p className="text-xs text-[var(--color-hint)] mt-1 font-mono">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-[var(--color-muted)] md:text-right shrink-0">
                  {item.hours && (
                    <span className="tag-pill">{item.hours} hrs</span>
                  )}
                  <span className="font-mono">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-pill btn-outline"
        >
          Book a Consultation
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
