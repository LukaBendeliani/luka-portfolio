'use client';

import TerminalBackground from './TerminalBackground';
import { portfolioData } from '@/lib/data/portfolio-data';

export default function Hero() {
  const { name, title, contact } = portfolioData.personal;

  return (
    <>
      <TerminalBackground />
    <section id="hero" className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-screen brutalist-section px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
      {/* Live terminal typing background */}

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-bold leading-[0.9] tracking-tight uppercase">
          {name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-white/80">
          {title}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#experience"
            className="px-5 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-150 uppercase tracking-wider"
            aria-label="View Work"
          >
            Experience
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="px-5 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-150 uppercase tracking-wider"
            aria-label="Get in Touch"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
    </>
  );
}