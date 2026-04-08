"use client";

import { useEffect, useState } from "react";
import { identity } from "@/data/content";
import { copy } from "@/lib/copy";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 h-16 flex items-center justify-between px-6 md:px-10"
      style={{
        zIndex: 50,
        background: scrolled ? "rgba(10, 10, 12, 0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        transition:
          "background 220ms ease, border-color 220ms ease, backdrop-filter 220ms ease",
      }}
    >
      <a
        href="#top"
        className="font-mono text-[13px]"
        style={{ color: "var(--color-text-1)", letterSpacing: "-0.01em" }}
      >
        {identity.wordmark}
      </a>

      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--color-accent)" }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[11px] uppercase"
            style={{ color: "var(--color-text-3)", letterSpacing: "0.08em" }}
          >
            {copy.locationLine}
          </span>
        </div>
        <a
          href={`mailto:${identity.email}`}
          className="font-mono text-[11px] uppercase px-3 py-1.5 border transition-colors duration-200 hover:border-[var(--color-accent)]"
          style={{
            color: "var(--color-text-1)",
            borderColor: "var(--color-border)",
            letterSpacing: "0.08em",
          }}
        >
          contact
        </a>
      </div>
    </header>
  );
}
