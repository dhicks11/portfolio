import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main id="main-content">
        <Hero />
        <Marquee text="Software Engineer" />
        <About />
        <Skills />
        <Marquee text="Featured Work" />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
