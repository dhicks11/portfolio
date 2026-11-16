import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience — Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Work experience of Daylen Hicks — technical writing intern at JMP/SAS Institute R&D, founder of I Got Next and Hicks Digital, LLM engineering at Handshake, and Resident Assistant at NC A&T.",
  alternates: { canonical: "https://daylenhicks.com/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
