/**
 * Framer Motion animation variants for consistent animations across the portfolio
 */

import { Variants } from 'framer-motion';

/**
 * Fade in from bottom animation
 * Used for section entrance animations
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Stagger container for animating children sequentially
 * Used for lists and grids of items
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Hover scale animation
 * Used for interactive elements like cards and buttons
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
};
