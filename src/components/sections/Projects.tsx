"use client";

import { projects, type Project } from "@/data/content";
import { copy } from "@/lib/copy";
import { Section, Panel, MonoLabel, Reveal } from "@/components/ui";

// Per-project fallback gradient. Used when no screenshot exists in
// /public/projects/{slug}.webp — tasteful, intentional, not "broken".
const gradients: Record<Project["slug"], string> = {
  "resume-analyzer":
    "linear-gradient(135deg, rgba(126,195,216,0.14), rgba(126,195,216,0.02) 60%)",
  metropol:
    "linear-gradient(135deg, rgba(126,195,216,0.09), rgba(110,125,140,0.05))",
  materia:
    "linear-gradient(135deg, rgba(126,195,216,0.11), rgba(60,80,110,0.06))",
  "prompt-builder":
    "linear-gradient(135deg, rgba(126,195,216,0.16), rgba(126,195,216,0.02) 60%)",
};

export default function Projects() {
  const total = projects.length.toString().padStart(2, "0");

  return (
    <Section id="projects">
      <Reveal>
        <MonoLabel>{copy.sections.work}</MonoLabel>
        <h2
          className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: "var(--color-text-1)",
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {copy.headlines.work}
        </h2>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.08 + i * 0.07}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full focus-visible:outline-none"
              aria-label={`${project.title} — open live project in new tab`}
            >
              <Panel className="h-full flex flex-col transition-colors duration-300 group-hover:border-[var(--color-accent)] group-focus-visible:border-[var(--color-accent)]">
                {/* Visual preview — gradient fallback, image if present */}
                <div
                  className="mb-6 aspect-[16/10] border flex items-center justify-center overflow-hidden"
                  style={{
                    borderColor: "var(--color-border)",
                    background: gradients[project.slug],
                  }}
                >
                  <span
                    className="font-mono text-5xl transition-transform duration-500 group-hover:scale-105"
                    style={{ color: "var(--color-text-3)" }}
                    aria-hidden="true"
                  >
                    {project.title.charAt(0).toLowerCase()}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <MonoLabel>
                    {project.id} / {total}
                  </MonoLabel>
                  <span
                    className="font-mono text-[11px] uppercase transition-colors duration-200 group-hover:text-[var(--color-accent)] group-focus-visible:text-[var(--color-accent)]"
                    style={{
                      color: "var(--color-text-3)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {copy.buttons.open} ↗
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-3xl"
                  style={{
                    color: "var(--color-text-1)",
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="mt-3 text-[15px] leading-relaxed flex-1"
                  style={{ color: "var(--color-text-2)" }}
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase px-2 py-1 border"
                      style={{
                        color: "var(--color-text-3)",
                        borderColor: "var(--color-border)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Panel>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
