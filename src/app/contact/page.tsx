import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Get in touch with Daylen Hicks — send a message, book a call, or connect on GitHub and LinkedIn.",
  alternates: { canonical: "https://daylenhicks.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
