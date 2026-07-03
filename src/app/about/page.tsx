import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Daylen Hicks | Software Engineer & AI Developer",
  description:
    "About Daylen Hicks — CS student at NC A&T, founder, TMCF Innovation Challenge winner. Skills, education, and community work.",
  alternates: { canonical: "https://daylenhicks.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <About />
        <Skills />
        <Education />
        <Community />
      </main>
      <Footer />
    </>
  );
}
