'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import InvertToggle from '../brutalist/InvertToggle';

interface NavigationProps {
  activeSection?: string;
}

const navLinks = [
  { id: 'hero', label: 'Hero' },
  // { id: 'proof', label: 'Proof' },
  { id: 'overview', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection: propActiveSection }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set up Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Smooth scroll with 800ms duration
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update active section immediately for better UX
      setActiveSection(targetId);
    }
  };

  const currentActive = propActiveSection || activeSection;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white font-bold text-lg border-1 border-white px-3 py-2.5">LUKA</a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-4">
              {navLinks.map(({ id, label }) => {
                const isActive = currentActive === id;
                
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleNavClick(e, id)}
                      aria-label={`Navigate to ${label} section`}
                      // aria-current={isActive ? 'page' : undefined}
                      className={`
                        relative block sm:px-2 py-2 md:px-3 md:py-2.5
                        text-xs sm:text-sm md:text-base font-medium
                        transition-all duration-150 ease-in-out
                        min-h-[44px] min-w-[44px] flex items-center justify-center
                        focus:outline-none
                        border border-transparent hover:border-white uppercase tracking-wider
                        // ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                      `}
                    >
                      {label}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 border border-white"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                          aria-hidden="true"
                        />
                      )}
                      
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden lg:block">
            <InvertToggle />
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 border border-white text-white hover:bg-white hover:text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    handleNavClick(e, id);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
