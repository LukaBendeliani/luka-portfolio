"use client";

import { useState, useCallback, useEffect } from "react";
import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <div className="cursor-flashlight" />
      {booted && (
        <>
          <Navbar />
          <main id="main-content" className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Testimonials />
            <FooterCTA />
          </main>
        </>
      )}
    </>
  );
}
