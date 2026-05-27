"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/resume";
import { sendContactEmail } from "@/app/actions/contact";

const CALENDLY_URL = "https://calendly.com/daylenhicks10";

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "Job Opportunity", label: "Job Opportunity" },
  { value: "Consultation", label: "Consultation" },
  { value: "Project Work", label: "Project Work" },
  { value: "Speaking Engagement", label: "Speaking Engagement" },
  { value: "Other", label: "Other" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const result = await sendContactEmail(form);
      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-accent font-serif italic">together</span>
          </h2>
        </div>
        <p className="text-[var(--color-muted)] max-w-md text-sm leading-relaxed">
          I&apos;m always open to new opportunities, collaborations, and
          conversations. Send a message or book a time to chat.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 mb-8 border-b border-[var(--color-border)]" role="tablist">
        {[
          { key: "message" as const, label: "Send Message" },
          { key: "schedule" as const, label: "Schedule Meeting" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`px-4 py-3 text-sm font-medium transition-colors relative min-h-[44px] ${
              activeTab === tab.key
                ? "text-foreground"
                : "text-[var(--color-muted)] hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
            )}
          </button>
        ))}
      </div>

      {activeTab === "message" ? (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <form onSubmit={handleSubmit} className="lg:col-span-3 bento-card p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--color-muted)] mb-1.5">Name</label>
                <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-foreground placeholder:text-[var(--color-hint)] focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--color-muted)] mb-1.5">Email</label>
                <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-foreground placeholder:text-[var(--color-hint)] focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-[var(--color-muted)] mb-1.5">Subject</label>
              <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent appearance-none">
                {subjects.map((s) => (
                  <option key={s.value} value={s.value} disabled={!s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-[var(--color-muted)] mb-1.5">Message</label>
              <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project, opportunity, or question..." className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-4 py-3 text-foreground placeholder:text-[var(--color-hint)] focus:outline-none focus:border-accent resize-none" />
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" disabled={status === "sending"} className="btn-pill btn-primary disabled:opacity-50">
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
              </button>
              <div id="contact-status" aria-live="polite" className="text-sm">
                {status === "sent" && <span className="text-green-400">Message sent successfully!</span>}
                {status === "error" && <span className="text-red-400">{errorMsg}</span>}
              </div>
            </div>
          </form>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bento-card p-6">
              <h3 className="font-semibold mb-2">Direct Email</h3>
              <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline text-sm break-all">{personalInfo.email}</a>
            </div>

            <div className="bento-card p-6">
              <h3 className="font-semibold mb-2">Connect</h3>
              <div className="flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-accent hover:border-accent transition-colors" aria-label="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-accent hover:border-accent transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>

            <div className="bento-card p-6">
              <h3 className="font-semibold mb-2">Based in</h3>
              <div className="space-y-1.5 text-sm text-[var(--color-muted)]">
                <p>Greensboro, NC <span className="text-[var(--color-hint)]">— school year</span></p>
                <p>Cary & Henrico, NC <span className="text-[var(--color-hint)]">— summer</span></p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bento-card overflow-hidden rounded-xl" style={{ minHeight: 700 }}>
          <iframe
            src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=0a0f1a&text_color=e8ecf4&primary_color=3B82F6`}
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a meeting with Daylen Hicks"
            className="w-full"
          />
        </div>
      )}
    </SectionWrapper>
  );
}
