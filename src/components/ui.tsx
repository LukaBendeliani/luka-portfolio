"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type {
  ReactNode,
  CSSProperties,
  AnchorHTMLAttributes,
} from "react";

// ─── Section ──────────────────────────────────────────────────────
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 px-6 md:px-10 py-24 md:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

// ─── Panel ────────────────────────────────────────────────────────
export function Panel({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative border p-6 md:p-8 ${className}`}
      style={{
        background: "rgba(17, 17, 20, 0.55)",
        borderColor: "var(--color-border)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── MonoLabel ────────────────────────────────────────────────────
// Small mono caption used for section labels and instrument readouts.
export function MonoLabel({
  children,
  className = "",
  tone = "muted",
}: {
  children: ReactNode;
  className?: string;
  tone?: "muted" | "accent" | "strong";
}) {
  const color =
    tone === "accent"
      ? "var(--color-accent)"
      : tone === "strong"
        ? "var(--color-text-1)"
        : "var(--color-text-3)";
  return (
    <span
      className={`font-mono text-[12px] uppercase ${className}`}
      style={{ color, letterSpacing: "0.08em", fontWeight: 500 }}
    >
      {children}
    </span>
  );
}

// ─── Stat ─────────────────────────────────────────────────────────
export function Stat({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 py-3 px-4 border ${className}`}
      style={{
        borderColor: "var(--color-border)",
        background: "rgba(17, 17, 20, 0.35)",
      }}
    >
      <span
        className="font-mono text-[11px] uppercase"
        style={{
          color: "var(--color-text-3)",
          letterSpacing: "0.12em",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        className="font-mono text-[15px]"
        style={{
          color: "var(--color-text-1)",
          letterSpacing: "-0.005em",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── Button ───────────────────────────────────────────────────────
type ButtonVariant = "primary" | "secondary";

export function Button({
  variant = "secondary",
  className = "",
  children,
  style,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-[14px] leading-none border no-underline transition-colors duration-200 font-medium";
  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: "var(--color-accent)",
      borderColor: "var(--color-accent)",
      color: "#0a0a0c",
    },
    secondary: {
      background: "rgba(17, 17, 20, 0.4)",
      borderColor: "var(--color-border)",
      color: "var(--color-text-1)",
    },
  };
  return (
    <a
      className={`${base} ${className}`}
      style={{ ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </a>
  );
}

// ─── Reveal ───────────────────────────────────────────────────────
// Fade-up on enter-viewport, once. The `prefers-reduced-motion` media
// query in globals.css already squashes transition/animation durations,
// so this also becomes an instant render under that setting.
export function Reveal({
  delay = 0,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── AccentRule ────────────────────────────────────────────────────
// Thin horizontal accent rule that animates from 0 to full width on
// in-view. Used as section separator accent.
export function AccentRule({
  delay = 0,
  className = "",
}: {
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`h-px origin-left ${className}`}
      style={{ background: "var(--color-accent)" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
