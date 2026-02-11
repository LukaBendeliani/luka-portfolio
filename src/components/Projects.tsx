"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
    {
        id: "01",
        title: "RESUME ANALYZER",
        description:
            "AI-powered tool that analyzes resumes for ATS compatibility, provides scoring, and suggests improvements using Gemini AI.",
        tech: ["Next.js", "Gemini AI", "TypeScript", "Tailwind"],
        link: "https://resume-analyzer-peach-ten.vercel.app/",
    },
    {
        id: "02",
        title: "METROPOL",
        description:
            "A premium real estate platform for one of the leading development companies in Georgia. Complex property listings, search, and interactive maps.",
        tech: ["React", "Next.js", "TypeScript", "CMS"],
        link: "https://www.metropol.ge/",
    },
    {
        id: "03",
        title: "MATERIA",
        description:
            "Digital platform for Materia, a contemporary Georgian fashion house. E-commerce, lookbooks, and brand storytelling.",
        tech: ["React", "Next.js", "E-commerce", "CMS"],
        link: "https://materia.ge/ka",
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">02 // PROJECTS</div>
                    <h2 className="section-title">
                        Selected products shipped
                        <br />
                        <span style={{ color: "#22d3ee" }}>for real users.</span>
                    </h2>
                    <p
                        className="text-sm mb-12 max-w-2xl"
                        style={{ color: "#94a3b8" }}
                    >
                        From AI-driven tooling to premium digital platforms, each project
                        emphasizes usability, speed, and business outcome.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                            className="block p-6 md:p-8 transition-all duration-300 group"
                            style={{
                                background: "rgba(15, 23, 42, 0.6)",
                                border: "1px solid #1e293b",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#22d3ee";
                                e.currentTarget.style.boxShadow =
                                    "0 0 30px rgba(34,211,238,0.08)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#1e293b";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span
                                            className="text-xs"
                                            style={{ color: "#94a3b8", fontSize: "0.7em" }}
                                        >
                                            {project.id}
                                        </span>
                                        <h3
                                            className="text-lg font-bold uppercase tracking-[-0.03em]"
                                            style={{ color: "#e2e8f0" }}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p
                                        className="text-sm leading-relaxed mb-4"
                                        style={{ color: "#94a3b8", fontSize: "0.85em" }}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2 py-1"
                                                style={{
                                                    color: "#22d3ee",
                                                    border: "1px solid rgba(34,211,238,0.2)",
                                                    fontSize: "0.7em",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="text-sm uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-300"
                                    style={{ color: "#94a3b8", fontSize: "0.75em" }}
                                >
                                    OPEN PROJECT →
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
