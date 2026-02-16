"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const skillCategories = [
    {
        title: "FRONTEND",
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5 / CSS3",
            "Tailwind CSS",
            "Framer Motion",
            "Redux",
            "Zustand",
        ],
    },
    {
        title: "BACKEND",
        skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Prisma"],
    },
    {
        title: "DATABASES",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
        title: "TOOLS",
        skills: [
            "Git",
            "Docker",
            "CI/CD",
            "Vercel",
            "Figma",
            "Cypress",
            "Jest",
            "Storybook",
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-label">04 // TOOLKIT</div>
                    <h2 className="section-title">
                        A wide stack,{" "}
                        <span style={{ color: "#22d3ee" }}>with depth where it matters.</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((cat, i) => (
                        <GlowCard
                            key={cat.title}
                            as={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                            className="p-6 transition-all duration-300"
                        >
                            <div
                                className="text-xs uppercase tracking-[0.15em] font-bold mb-4"
                                style={{ color: "#22d3ee", fontSize: "0.7em" }}
                            >
                                {cat.title}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-2 py-1 transition-all duration-200"
                                        style={{
                                            color: "#94a3b8",
                                            border: "1px solid #1e293b",
                                            fontSize: "0.7em",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#22d3ee";
                                            e.currentTarget.style.color = "#22d3ee";
                                            e.currentTarget.style.boxShadow =
                                                "0 0 8px rgba(34,211,238,0.15)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#1e293b";
                                            e.currentTarget.style.color = "#94a3b8";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
