"use client";

import { experiences } from "@/data/content";
import { copy } from "@/lib/copy";
import { Section, MonoLabel, Reveal } from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <MonoLabel>{copy.sections.history}</MonoLabel>
        <h2
          className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: "var(--color-text-1)",
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {copy.headlines.history}
        </h2>
      </Reveal>

      <div className="mt-16">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={0.08 + i * 0.05}>
            <div
              className="grid grid-cols-[auto_1fr] gap-6 md:gap-16 py-8 md:py-10 border-t transition-colors duration-300 hover:border-t-[var(--color-accent)]"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="pt-1 w-24 md:w-32">
                <MonoLabel>{exp.period}</MonoLabel>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3
                    className="text-2xl md:text-3xl"
                    style={{
                      color: "var(--color-text-1)",
                      letterSpacing: "-0.02em",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </h3>
                  <span
                    className="font-mono text-[11px] uppercase"
                    style={{
                      color: "var(--color-accent)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {exp.role.toLowerCase()}
                  </span>
                </div>
                <p
                  className="mt-3 max-w-2xl text-[15px] leading-relaxed"
                  style={{ color: "var(--color-text-2)" }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
