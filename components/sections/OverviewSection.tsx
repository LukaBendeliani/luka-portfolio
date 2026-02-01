'use client';

import { motion } from 'framer-motion';
import { Code2, Database, TestTube, Languages } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { portfolioData } from '@/lib/data/portfolio-data';

export default function OverviewSection() {
  const { introduction, highlights, databases, testingTools, languages } =
    portfolioData.overview;

  return (
    <SectionContainer id="overview" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-8 md:mb-12 text-center"
          >
            Professional Overview
          </motion.h2>

          {/* Introduction */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 md:mb-12 text-center max-w-4xl mx-auto"
          >
            {introduction}
          </motion.p>

          {/* Key Technologies Highlights */}
          <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
            <div className="glass-card p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 flex-shrink-0" aria-hidden="true">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-primary">
                  Core Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {highlights.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg bg-gradient-primary text-white font-medium shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid for Databases, Testing Tools, and Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Databases */}
            <motion.div variants={fadeInUp} className="glass-card p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-accent-purple/10 flex-shrink-0" aria-hidden="true">
                  <Database className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                  Databases
                </h3>
              </div>
              <ul className="space-y-2" role="list">
                {databases.map((db) => (
                  <li
                    key={db}
                    className="text-sm sm:text-base text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple flex-shrink-0" aria-hidden="true" />
                    {db}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Testing Tools */}
            <motion.div variants={fadeInUp} className="glass-card p-4 sm:p-5 md:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 flex-shrink-0" aria-hidden="true">
                  <TestTube className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                  Testing Tools
                </h3>
              </div>
              <ul className="space-y-2" role="list">
                {testingTools.map((tool) => (
                  <li
                    key={tool}
                    className="text-sm sm:text-base text-text-secondary flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeInUp} className="glass-card p-4 sm:p-5 md:p-6 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 sm:p-2.5 rounded-lg bg-accent-blue/10 flex-shrink-0" aria-hidden="true">
                  <Languages className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                  Languages
                </h3>
              </div>
              <ul className="space-y-2" role="list">
                {languages.map((lang) => (
                  <li
                    key={lang.language}
                    className="text-sm sm:text-base text-text-secondary flex items-center justify-between gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" aria-hidden="true" />
                      {lang.language}
                    </span>
                    <span className="text-xs sm:text-sm text-primary font-medium whitespace-nowrap">
                      {lang.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
