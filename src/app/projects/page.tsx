import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Projects by Daylen Hicks — Scholar Shield (1st place, TMCF Innovation Challenge), PitchPad (1st place, Hack NCAT), I Got Next, Forte, and more.",
  alternates: { canonical: "https://daylenhicks.com/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
