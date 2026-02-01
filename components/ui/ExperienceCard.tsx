'use client';

import { motion } from 'framer-motion';
import { WorkExperience } from '@/lib/data/portfolio-data';
import { Calendar, Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: WorkExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDateRange = (startDate: string, endDate: string) => {
    const formatDate = (date: string) => {
      const [year, month] = date.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-primary/50"
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{experience.company}</h3>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <h4 className="text-xs sm:text-sm font-semibold text-text-secondary mb-2 uppercase tracking-wide">
          Key Achievements
        </h4>
        <ul className="space-y-2" role="list">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
              <span className="text-primary mt-1 sm:mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-xs sm:text-sm font-semibold text-text-secondary mb-2 uppercase tracking-wide">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2" role="list" aria-label="Technologies used">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              role="listitem"
              className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 transition-colors duration-200 hover:bg-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
