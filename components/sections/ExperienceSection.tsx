'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/ui/SectionContainer';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { portfolioData } from '@/lib/data/portfolio-data';

export default function ExperienceSection() {
  // Experiences are already in reverse chronological order in the data
  const experiences = portfolioData.experiences;

  return (
    <SectionContainer id="experience" className="px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 font-display">
          Work Experience
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-8 md:mb-12 max-w-2xl">
          Professional journey building modern web applications and delivering impactful solutions
        </p>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
