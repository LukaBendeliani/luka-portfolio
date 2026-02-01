'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import { portfolioData } from '@/lib/data/portfolio-data';

export default function HeroSection() {
  const { name, title, contact, imageUrl } = portfolioData.personal;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-0"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left side: Name, Title, and Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8">
            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-hero-name font-display font-bold text-gradient mb-3 md:mb-4">
                {name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-hero-title font-display text-text-secondary">
                {title}
              </h2>
            </div>

            {/* Contact Information Card */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-4 sm:p-5 md:p-6 space-y-3 md:space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-primary">
                Get in Touch
              </h3>

              {/* Email */}
              <motion.a
                href={`mailto:${contact.email}`}
                aria-label={`Send email to ${contact.email}`}
                className="flex items-center gap-3 group transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-text-secondary group-hover:text-primary transition-colors duration-300 break-all">
                  {contact.email}
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${contact.phone}`}
                aria-label={`Call ${contact.phone}`}
                className="flex items-center gap-3 group transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-text-secondary group-hover:text-primary transition-colors duration-300">
                  {contact.phone}
                </span>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex items-center gap-3 group min-h-[44px]"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {contact.location}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side: Professional Photo */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-30" />
              <div className="relative glass-card p-3 sm:p-4 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${name} - ${title}`}
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
