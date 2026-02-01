'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { portfolioData } from '@/lib/data/portfolio-data';

export default function ContactSection() {
  const { email, phone, location } = portfolioData.personal.contact;

  return (
    <SectionContainer id="contact" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Get in Touch</h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="space-y-5 sm:space-y-6">
            {/* Email */}
            <motion.a
              href={`mailto:${email}`}
              aria-label={`Send email to ${email}`}
              className="flex items-center gap-3 sm:gap-4 group transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-text-secondary mb-1">Email</p>
                <p className="text-base sm:text-lg text-white group-hover:text-primary transition-colors duration-300 break-all">
                  {email}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${phone}`}
              aria-label={`Call ${phone}`}
              className="flex items-center gap-3 sm:gap-4 group transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-text-secondary mb-1">Phone</p>
                <p className="text-base sm:text-lg text-white group-hover:text-primary transition-colors duration-300">
                  {phone}
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 group min-h-[44px]"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-text-secondary mb-1">Location</p>
                <p className="text-base sm:text-lg text-white group-hover:text-text-primary transition-colors duration-300">
                  {location}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
