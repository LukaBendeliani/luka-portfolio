"use client";

import { identity } from "@/data/content";
import { copy } from "@/lib/copy";
import { MonoLabel, Reveal, AccentRule } from "@/components/ui";

const socialItems = [
  { label: "github", href: identity.socials.github },
  { label: "linkedin", href: identity.socials.linkedin },
  { label: "x", href: identity.socials.x },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative z-10 px-6 md:px-10 pt-24 md:pt-32 pb-16"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <MonoLabel>{copy.sections.contact}</MonoLabel>
          <h2
            className="mt-4 text-5xl md:text-6xl lg:text-7xl max-w-3xl"
            style={{
              color: "var(--color-text-1)",
              letterSpacing: "-0.035em",
              lineHeight: 1.04,
              fontWeight: 700,
            }}
          >
            {copy.headlines.contact}
          </h2>
          <p
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--color-text-2)" }}
          >
            {copy.contact.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <MonoLabel>{copy.contact.emailLabel}</MonoLabel>
                <div className="mt-2">
                  <a
                    href={`mailto:${identity.email}`}
                    className="text-xl md:text-2xl transition-colors hover:text-[var(--color-accent)]"
                    style={{
                      color: "var(--color-text-1)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {identity.email}
                  </a>
                </div>
              </div>

              <div>
                <MonoLabel>{copy.contact.phoneLabel}</MonoLabel>
                <div className="mt-2">
                  <a
                    href={identity.phoneHref}
                    className="text-lg md:text-xl font-mono transition-colors hover:text-[var(--color-accent)]"
                    style={{
                      color: "var(--color-text-1)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {identity.phone}
                  </a>
                </div>
              </div>

              <div>
                <MonoLabel>{copy.contact.locationLabel}</MonoLabel>
                <div className="mt-2">
                  <span
                    className="text-xl md:text-2xl"
                    style={{ color: "var(--color-text-1)" }}
                  >
                    {identity.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <MonoLabel>{copy.contact.socialsLabel}</MonoLabel>
              <AccentRule className="mt-3 mb-6 max-w-[60px]" />
              <ul className="space-y-3">
                {socialItems.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-base transition-colors hover:text-[var(--color-accent)]"
                      style={{ color: "var(--color-text-1)" }}
                    >
                      <span aria-hidden="true">→</span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div
                className="mt-12 p-5 border"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-accent-soft)",
                }}
              >
                <span
                  className="font-mono text-[10px] uppercase"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {identity.toptal.toLowerCase()}
                </span>
                <a
                  href={identity.toptalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 text-[15px] transition-colors hover:text-[var(--color-accent)]"
                  style={{ color: "var(--color-text-1)" }}
                >
                  view toptal profile →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-24 pt-8 flex flex-wrap items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <MonoLabel>{copy.contact.rights}</MonoLabel>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-accent)" }}
              aria-hidden="true"
            />
            <MonoLabel>nominal</MonoLabel>
          </div>
        </div>
      </div>
    </footer>
  );
}
