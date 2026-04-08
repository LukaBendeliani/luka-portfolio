"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { identity } from "@/data/content";
import { copy } from "@/lib/copy";
import { Button, Stat } from "@/components/ui";

const BOOT_INTERVAL_MS = 280;
const bootSteps = copy.readout.boot;

export default function Hero() {
  const [bootIndex, setBootIndex] = useState(0);

  useEffect(() => {
    if (bootIndex >= bootSteps.length) return;
    const t = setTimeout(() => setBootIndex((i) => i + 1), BOOT_INTERVAL_MS);
    return () => clearTimeout(t);
  }, [bootIndex]);

  const bootDone = bootIndex >= bootSteps.length;

  return (
    <section
      id="top"
      className="relative z-10 min-h-screen px-6 md:px-10 pt-32 pb-20 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-10"
        >
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
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,9.5vw,7.5rem)]"
          style={{
            color: "var(--color-text-1)",
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            letterSpacing: "-0.038em",
            lineHeight: 1.02,
          }}
        >
          {identity.name.toLowerCase()}
        </motion.h1>

        {/* role */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-5 flex items-center gap-3"
        >
          <span
            className="font-mono text-[11px] uppercase"
            style={{ color: "var(--color-accent)", letterSpacing: "0.08em" }}
          >
            /
          </span>
          <span
            className="font-mono text-[13px] uppercase"
            style={{ color: "var(--color-text-1)", letterSpacing: "0.08em" }}
          >
            {identity.role.toLowerCase()}
          </span>
        </motion.div>

        {/* bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-text-2)" }}
        >
          {identity.bio}
        </motion.p>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
        >
          <Stat label={copy.stats.experience} value={identity.yearsExperience} />
          <Stat label={copy.stats.stack} value={identity.stack} />
          <Stat label={copy.stats.location} value={identity.locationShort} />
          <Stat label={copy.stats.status} value={identity.toptal} />
        </motion.div>

        {/* ctas */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button variant="primary" href="#projects">
            {copy.buttons.work} →
          </Button>
          <Button href="#contact">{copy.buttons.contact}</Button>
        </motion.div>
      </div>

      {/* corner instrument readout — static labels, NOT a live FPS counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="hidden md:flex absolute bottom-10 right-10 flex-col gap-1.5 text-right"
        aria-hidden="true"
      >
        <ReadoutLine>{copy.readout.lat}</ReadoutLine>
        <ReadoutLine>{copy.readout.lon}</ReadoutLine>
        <ReadoutLine>{copy.readout.build}</ReadoutLine>
        <ReadoutLine accent={bootDone}>
          {bootDone
            ? copy.readout.status
            : `> ${bootSteps[Math.min(bootIndex, bootSteps.length - 1)]}`}
        </ReadoutLine>
      </motion.div>
    </section>
  );
}

function ReadoutLine({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className="font-mono text-[10px] uppercase"
      style={{
        color: accent ? "var(--color-accent)" : "var(--color-text-3)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}
