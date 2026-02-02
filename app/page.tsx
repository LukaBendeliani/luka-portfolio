import Hero from '@/components/brutalist/Hero';
import LogoWall from '@/components/brutalist/LogoWall';
import Overview from '@/components/brutalist/Overview';
import Experience from '@/components/brutalist/Experience';
import Projects from '@/components/brutalist/Projects';
import Skills from '@/components/brutalist/Skills';
import Education from '@/components/brutalist/Education';
import Contact from '@/components/brutalist/Contact';
import Footer from '@/components/brutalist/Footer';

export default function Home() {
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="min-h-screen">
        <div className="scroll-smooth pt-14 sm:pt-16">
          <Hero />
          {/* <LogoWall /> */}
          <Overview />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
