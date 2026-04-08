"use client";

import { identity, capabilities } from "@/data/content";
import { copy } from "@/lib/copy";
import {
  Section,
  Panel,
  MonoLabel,
  Reveal,
  AccentRule,
} from "@/components/ui";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <MonoLabel>{copy.sections.identity}</MonoLabel>
        <h2
          className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: "var(--color-text-1)",
            letterSpacing: "-0.028em",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {copy.headlines.about}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p
          className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-text-2)" }}
        >
          {identity.about}
        </p>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={0.15 + i * 0.08}>
            <Panel>
              <MonoLabel>{cap.title.toLowerCase()}</MonoLabel>
              <AccentRule className="mt-4 max-w-[40px]" />
              <ul className="space-y-2.5 mt-5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
