'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * SectionContainer component with scroll-triggered animations
 * Uses Intersection Observer to trigger fade-in animations when section enters viewport
 */
export default function SectionContainer({
  id,
  children,
  className = '',
}: SectionContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when section is 20% visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
