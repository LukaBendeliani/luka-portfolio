'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: string;
  category: 'frontend' | 'backend' | 'databases' | 'tools';
}

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500',
  databases: 'from-green-500 to-emerald-500',
  tools: 'from-orange-500 to-yellow-500',
};

const categoryBorderColors = {
  frontend: 'border-blue-500/30',
  backend: 'border-purple-500/30',
  databases: 'border-green-500/30',
  tools: 'border-orange-500/30',
};

export default function SkillBadge({ skill, category }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`
        relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg
        bg-background-secondary/60 backdrop-blur-sm
        border ${categoryBorderColors[category]}
        overflow-hidden
        cursor-default
        min-h-[44px] flex items-center justify-center
      `}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} opacity-0`}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10 text-xs sm:text-sm font-medium text-text-primary text-center">
        {skill}
      </span>
    </motion.div>
  );
}
