"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG flowing-path background — inspired by kokonutd's
 * "background-paths" pattern. Two layered fans of bezier curves drift
 * across the viewport, each path animating its dash offset and opacity
 * for a continuous "current" effect.
 *
 * Notes:
 * - Stroke colour is `var(--color-accent)` so it follows the design tokens.
 * - Durations are deterministic (no Math.random in render) to avoid
 *   hydration mismatches during SSR.
 * - SVG is `aria-hidden` and `pointer-events: none`.
 * - Animations freeze under `prefers-reduced-motion` because globals.css
 *   forces `animation-duration: 0.01ms` on `*` for that media query.
 */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => {
    const offset = i * 5 * position;
    return {
      id: i,
      d: `M-${380 - offset} -${189 + i * 6}C-${380 - offset} -${189 + i * 6} -${312 - offset} ${216 - i * 6} ${152 - offset} ${343 - i * 6}C${616 - offset} ${470 - i * 6} ${684 - offset} ${875 - i * 6} ${684 - offset} ${875 - i * 6}`,
      width: 0.5 + i * 0.035,
      strokeOpacity: 0.07 + i * 0.012,
      // Deterministic per-path duration variation (~22-30s)
      duration: 22 + ((i * 1.7) % 8),
    };
  });

  return (
    <div className="absolute inset-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="var(--color-accent)"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            strokeLinecap="round"
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.6, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
