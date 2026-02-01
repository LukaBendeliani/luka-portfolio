'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Experience() {
  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Work Experience</h2>
        <div className="mt-6 space-y-4">
          {experiences.map((exp) => (
            <article key={exp.id} className="border border-white p-4">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-semibold uppercase">{exp.company}</h3>
                <p className="text-sm md:text-base text-white/70">
                  <time dateTime={exp.startDate}>{exp.startDate}</time> — <time dateTime={exp.endDate}>{exp.endDate}</time>
                </p>
              </header>
              <p className="mt-2 text-base md:text-lg">{exp.position}</p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm md:text-base">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="px-2 py-1 border border-white text-xs md:text-sm">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}