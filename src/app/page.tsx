import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";

const tickerItems = [
  "AI Engineer",
  "Founder",
  "Builder",
  "Hackathon Winner",
  "LLM Engineer",
  "Basketball Head",
  "Product Thinker",
  "CS Student",
  "Full-Stack Dev",
  "Community Builder",
  "AI Consultant",
  "Problem Solver",
];

function Divider() {
  return <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24"><hr className="border-[var(--color-border)]" /></div>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main id="main-content">
        <Hero />
        <Marquee items={tickerItems} />
        <About />
        <Divider />
        <Skills />
        <div className="bg-[var(--color-surface)]">
          <Projects />
        </div>
        <Experience />
        <div className="bg-[var(--color-surface)]">
          <Education />
        </div>
        <Community />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
