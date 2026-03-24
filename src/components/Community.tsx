"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

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
          <span className="section-label">Give Back</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Building a
            <br />
            <span className="text-accent">Bridge Home</span>
          </h2>
        </div>
        <p className="text-muted max-w-md text-lg">
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
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted leading-relaxed flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

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
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
