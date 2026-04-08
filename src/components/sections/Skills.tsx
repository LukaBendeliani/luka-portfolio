"use client";

import { skillCategories } from "@/data/content";
import { copy } from "@/lib/copy";
import { Section, MonoLabel, Reveal, AccentRule } from "@/components/ui";

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <MonoLabel>{copy.sections.toolkit}</MonoLabel>
        <h2
          className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: "var(--color-text-1)",
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {copy.headlines.skills}
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {skillCategories.map((cat, i) => (
          <div key={cat.title}>
            <MonoLabel>{cat.title.toLowerCase()}</MonoLabel>
            <AccentRule delay={0.12 + i * 0.08} className="mt-3 mb-5" />
            <ul className="space-y-2.5">
              {cat.skills.map((skill, si) => (
                <Reveal key={skill} delay={0.2 + i * 0.06 + si * 0.018}>
                  <li
                    className="text-[15px]"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {skill}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
