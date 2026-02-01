'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EducationEntry } from '@/lib/data/portfolio-data';
import SectionContainer from '@/components/ui/SectionContainer';

interface EducationSectionProps {
  education: EducationEntry[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <SectionContainer id="education" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Education</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
        </motion.div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-4 sm:p-5 md:p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0" aria-hidden="true">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {edu.institution}
                  </h3>
                  
                  {edu.degree && edu.field && (
                    <p className="text-sm sm:text-base text-primary mb-2">
                      {edu.degree} - {edu.field}
                    </p>
                  )}
                  
                  <p className="text-sm sm:text-base text-text-secondary">
                    <time dateTime={`${edu.startYear}`}>{edu.startYear}</time> - <time dateTime={`${edu.endYear}`}>{edu.endYear}</time>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
