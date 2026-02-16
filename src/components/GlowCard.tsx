"use client";

import { useCallback, useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type GlowCardProps<T extends ElementType = "div"> = {
    as?: T;
    children: ReactNode;
    className?: string;
    glowColor?: string;
    glowSize?: number;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

export default function GlowCard<T extends ElementType = "div">({
    as,
    children,
    className = "",
    glowColor = "34, 211, 238",
    glowSize = 200,
    ...rest
}: GlowCardProps<T>) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
            el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
            el.style.setProperty("--glow-opacity", "1");
        },
        []
    );

    const handleMouseLeave = useCallback(() => {
        ref.current?.style.setProperty("--glow-opacity", "0");
    }, []);

    const Component = (as || "div") as ElementType;

    return (
        <Component
            ref={ref}
            className={`glow-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                "--glow-size": `${glowSize}px`,
                "--glow-color": glowColor,
                ...((rest as Record<string, unknown>).style as Record<string, unknown> || {}),
            } as React.CSSProperties}
            {...rest}
        >
            {children}
        </Component>
    );
}
