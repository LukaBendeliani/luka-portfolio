"use client";

import { education } from "@/data/content";
import { copy } from "@/lib/copy";
import { Section, Panel, MonoLabel, Reveal } from "@/components/ui";

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <MonoLabel>{copy.sections.education}</MonoLabel>
        <h2
          className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: "var(--color-text-1)",
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {copy.headlines.education}
        </h2>
      </Reveal>

      <div className="mt-12 max-w-3xl">
        <Reveal delay={0.12}>
          <Panel>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <h3
                className="text-2xl md:text-3xl"
                style={{
                  color: "var(--color-text-1)",
                  letterSpacing: "-0.02em",
                  fontWeight: 600,
                }}
              >
                {education.school}
              </h3>
              <MonoLabel>{education.period}</MonoLabel>
            </div>
            <div className="mt-2">
              <span
                className="font-mono text-[11px] uppercase"
                style={{
                  color: "var(--color-accent)",
                  letterSpacing: "0.08em",
                }}
              >
                {education.faculty.toLowerCase()}
              </span>
            </div>
            <p
              className="mt-5 text-[15px] leading-relaxed"
              style={{ color: "var(--color-text-2)" }}
            >
              {education.description}
            </p>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
