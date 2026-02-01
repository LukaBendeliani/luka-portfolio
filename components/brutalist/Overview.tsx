'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Overview() {
  const { introduction, highlights, databases, testingTools, languages } = portfolioData.overview;

  return (
    <section id="overview" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Overview</h2>
          <p className="mt-4 text-base md:text-lg text-white/80">{introduction}</p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Core Technologies</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {highlights.map((tech) => (
                <li key={tech} className="border border-white px-2 py-1 text-sm md:text-base">{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Databases</h3>
            <ul className="mt-3 space-y-2">
              {databases.map((db) => (
                <li key={db} className="text-sm md:text-base">{db}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Testing Tools</h3>
            <ul className="mt-3 space-y-2">
              {testingTools.map((tool) => (
                <li key={tool} className="text-sm md:text-base">{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12">
          <div className="border border-white p-4">
            <h3 className="text-lg md:text-xl font-semibold uppercase">Languages</h3>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {languages.map((lang) => (
                <li key={lang.language} className="flex items-center justify-between border border-white px-2 py-1 text-sm md:text-base">
                  <span>{lang.language}</span>
                  <span className="text-white/70">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}