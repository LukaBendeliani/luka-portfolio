"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const experiences = [
    {
        company: "LIMESTONE DIGITAL",
        role: "Software Engineer",
        period: "2022 — 2025",
        description:
            "Built and maintained complex web applications for enterprise clients. Led frontend architecture decisions and improved CI/CD pipelines.",
    },
    {
        company: "BOOSTY LABS",
        role: "Software Engineer",
        period: "2021 — 2022",
        description:
            "Developed blockchain and fintech web applications. Implemented real-time data visualization dashboards and trading interfaces.",
    },
    {
        company: "VABACO",
        role: "Frontend Engineer",
        period: "2020 — 2021",
        description:
            "Shipped user-facing features for SaaS products. Focused on component architecture, design systems, and performance optimization.",
    },
    {
        company: "FINA LLC",
        role: "Frontend Engineer",
        period: "2019 — 2020",
        description:
            "Built responsive web interfaces for financial services. Implemented data-driven dashboards and reporting tools.",
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">03 // EXPERIENCE</div>
                    <h2 className="section-title">
                        Hands-on delivery across
                        <br />
                        <span style={{ color: "#22d3ee" }}>
                            startups and scale-up environments.
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className="absolute left-0 md:left-6 top-0 bottom-0 w-px"
                        style={{ background: "#1e293b" }}
                    />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                                className="relative pl-8 md:pl-16"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-0 md:left-6 top-2 w-2 h-2 rounded-full -translate-x-1/2"
                                    style={{
                                        background: "#22d3ee",
                                        boxShadow: "0 0 8px rgba(34,211,238,0.4)",
                                    }}
                                />

                                <GlowCard
                                    className="p-6 transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3
                                            className="text-base font-bold uppercase tracking-[-0.03em]"
                                            style={{ color: "#e2e8f0" }}
                                        >
                                            {exp.company}
                                        </h3>
                                        <span
                                            className="text-xs tracking-[0.1em]"
                                            style={{ color: "#22d3ee", fontSize: "0.7em" }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div
                                        className="text-xs uppercase tracking-[0.1em] mb-3"
                                        style={{ color: "#f472b6", fontSize: "0.7em" }}
                                    >
                                        {exp.role}
                                    </div>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "#94a3b8", fontSize: "0.85em" }}
                                    >
                                        {exp.description}
                                    </p>
                                </GlowCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
