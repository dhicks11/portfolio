import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const tickerItems = [
  "AI Engineer",
  "Founder",
  "Builder",
  "Hackathon Winner",
  "TMCF Challenge Winner",
  "LLM Engineer",
  "Basketball Head",
  "Product Thinker",
  "CS Student",
  "Full-Stack Dev",
  "Community Builder",
  "AI Consultant",
  "Problem Solver",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee items={tickerItems} />
        <Projects limit={3} showViewAll />
      </main>
      <Footer />
    </>
  );
}
