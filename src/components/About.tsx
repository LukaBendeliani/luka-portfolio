"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
    {
        title: "DATABASES",
        items: ["PostgreSQL", "MongoDB"],
        icon: "⬡",
    },
    {
        title: "QUALITY STACK",
        items: ["Cypress", "Jest"],
        icon: "◈",
    },
    {
        title: "LANGUAGES",
        items: ["English — Fluent", "Georgian — Native"],
        icon: "◉",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">01 // ABOUT</div>
                    <h2 className="section-title">
                        Engineering with product instincts
                        <br />
                        <span style={{ color: "#22d3ee" }}>and delivery discipline.</span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm leading-relaxed max-w-3xl mb-12"
                    style={{ color: "#94a3b8" }}
                >
                    Senior Software Engineer with 5+ years of experience building modern
                    web applications with React.js, Next.js, and TypeScript. Proven track
                    record of delivering complex projects, improving test performance and
                    driving best practices in agile environments. Currently focused on
                    product-grade frontend systems, measurable performance gains, and
                    collaborative engineering leadership.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="p-6 transition-all duration-300 group"
                            style={{
                                background: "rgba(15, 23, 42, 0.6)",
                                border: "1px solid #1e293b",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#22d3ee";
                                e.currentTarget.style.boxShadow =
                                    "0 0 20px rgba(34,211,238,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#1e293b";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                className="text-2xl mb-3"
                                style={{ color: "#22d3ee" }}
                            >
                                {cap.icon}
                            </div>
                            <div
                                className="text-xs uppercase tracking-[0.15em] font-semibold mb-3"
                                style={{ color: "#e2e8f0", fontSize: "0.75em" }}
                            >
                                {cap.title}
                            </div>
                            <ul className="space-y-1">
                                {cap.items.map((item) => (
                                    <li
                                        key={item}
                                        className="text-sm"
                                        style={{ color: "#94a3b8", fontSize: "0.8em" }}
                                    >
                                        <span style={{ color: "#22d3ee" }}>→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
