'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Contact() {
  const { contact } = portfolioData.personal;

  return (
    <section id="contact" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Contact</h2>
        <div className="mt-6 grid grid-cols-12 gap-4">
          <a href={`mailto:${contact.email}`} className="col-span-12 md:col-span-6 border border-white p-4" aria-label="Email">
            <div className="text-sm md:text-base">Email</div>
            <div className="mt-1 text-base md:text-lg">{contact.email}</div>
          </a>
          <a href={`tel:${contact.phone}`} className="col-span-12 md:col-span-6 border border-white p-4" aria-label="Phone">
            <div className="text-sm md:text-base">Phone</div>
            <div className="mt-1 text-base md:text-lg">{contact.phone}</div>
          </a>
          <div className="col-span-12 border border-white p-4">
            <div className="text-sm md:text-base">Location</div>
            <div className="mt-1 text-base md:text-lg">{contact.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}