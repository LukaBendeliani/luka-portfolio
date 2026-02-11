"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">05 // EDUCATION</div>
                    <h2 className="section-title">
                        Academic grounding with{" "}
                        <span style={{ color: "#22d3ee" }}>
                            strong analytical thinking.
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-8 max-w-2xl transition-all duration-300"
                    style={{
                        background: "rgba(15, 23, 42, 0.5)",
                        border: "1px solid #1e293b",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#22d3ee";
                        e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(34,211,238,0.06)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#1e293b";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3
                                className="text-lg font-bold uppercase tracking-[-0.03em]"
                                style={{ color: "#e2e8f0" }}
                            >
                                TBILISI STATE UNIVERSITY
                            </h3>
                            <div
                                className="text-xs uppercase tracking-[0.1em] mt-1"
                                style={{ color: "#f472b6", fontSize: "0.75em" }}
                            >
                                Faculty — Theoretical Physics
                            </div>
                        </div>
                        <span
                            className="text-xs tracking-[0.1em] whitespace-nowrap"
                            style={{ color: "#22d3ee", fontSize: "0.7em" }}
                        >
                            2018 — 2022
                        </span>
                    </div>
                    <p
                        className="text-sm leading-relaxed mt-4"
                        style={{ color: "#94a3b8", fontSize: "0.85em" }}
                    >
                        Strong foundation in mathematical modeling, computational physics,
                        and analytical problem-solving. Applied rigorous scientific
                        methodology to software engineering practice.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
