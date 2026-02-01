'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Skills</h2>
        <div className="mt-6 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Frontend</h3>
            <ul className="mt-3 space-y-1 text-sm md:text-base">
              {skills.frontend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Backend</h3>
            <ul className="mt-3 space-y-1 text-sm md:text-base">
              {skills.backend.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Databases</h3>
            <ul className="mt-3 space-y-1 text-sm md:text-base">
              {skills.databases.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Tools</h3>
            <ul className="mt-3 space-y-1 text-sm md:text-base">
              {skills.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}