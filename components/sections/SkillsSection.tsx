'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/ui/SectionContainer';
import SkillBadge from '@/components/ui/SkillBadge';
import { TechnicalSkills } from '@/lib/data/portfolio-data';

interface SkillsSectionProps {
  skills: TechnicalSkills;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionContainer id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-8 md:mb-12 text-center"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Skills</span>
        </motion.h2>

        {/* Frontend Skills */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 md:mb-4">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {skills.frontend.map((skill) => (
              <SkillBadge key={skill} skill={skill} category="frontend" />
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 md:mb-4">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {skills.backend.map((skill) => (
              <SkillBadge key={skill} skill={skill} category="backend" />
            ))}
          </div>
        </motion.div>

        {/* Database Skills */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 md:mb-4">
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {skills.databases.map((skill) => (
              <SkillBadge key={skill} skill={skill} category="databases" />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 md:mb-4">
            Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {skills.tools.map((skill) => (
              <SkillBadge key={skill} skill={skill} category="tools" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
