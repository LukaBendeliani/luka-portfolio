'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Education() {
  const education = portfolioData.education;

  return (
    <section id="education" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((edu) => (
            <article key={edu.id} className="border border-white p-4">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-semibold uppercase">{edu.institution}</h3>
                <p className="text-sm md:text-base text-white/70">
                  <time dateTime={`${edu.startYear}`}>{edu.startYear}</time> — <time dateTime={`${edu.endYear}`}>{edu.endYear}</time>
                </p>
              </header>
              {(edu.degree || edu.field) && (
                <p className="mt-2 text-base md:text-lg">{edu.degree} {edu.field ? `— ${edu.field}` : ''}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}