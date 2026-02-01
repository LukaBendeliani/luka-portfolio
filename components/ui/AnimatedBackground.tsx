'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary" />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-96 h-96 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Geometric patterns */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute inset-0 border border-primary/20 rounded-full" />
        <div className="absolute inset-8 border border-primary-dark/20 rounded-full" />
        <div className="absolute inset-16 border border-primary/20 rounded-full" />
      </motion.div>
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-40 right-1/3 w-16 h-16 border-2 border-primary/10"
        style={{ transform: 'rotate(45deg)' }}
        animate={{
          y: [0, -30, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-primary-dark/10 rounded-full"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/4 w-20 h-20 border-2 border-accent-purple/10"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
