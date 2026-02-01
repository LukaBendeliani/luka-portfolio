'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, Lightbulb, Clock } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';

interface AdditionalSkillsSectionProps {
  skills: string[];
}

// Map skills to appropriate icons
const getSkillIcon = (skill: string) => {
  const lowerSkill = skill.toLowerCase();
  
  if (lowerSkill.includes('communication')) {
    return MessageSquare;
  } else if (lowerSkill.includes('ai')) {
    return Sparkles;
  } else if (lowerSkill.includes('problem-solving')) {
    return Lightbulb;
  } else if (lowerSkill.includes('organization') || lowerSkill.includes('time management')) {
    return Clock;
  }
  
  return Sparkles; // Default icon
};

export default function AdditionalSkillsSection({ skills }: AdditionalSkillsSectionProps) {
  return (
    <SectionContainer id="additional-skills" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Additional Skills</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = getSkillIcon(skill);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 sm:p-5 md:p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0" aria-hidden="true">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {skill}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
