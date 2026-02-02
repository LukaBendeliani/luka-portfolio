'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="brutalist-section px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">Key Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <article key={project.id} className="border border-white p-4 flex flex-col justify-between">
              <div>
                <header className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl md:text-2xl font-semibold uppercase">{project.title}</h3>
                </header>
                <p className="mt-2 text-sm md:text-base text-white/80">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2 py-1 border border-white text-[10px] md:text-xs uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
