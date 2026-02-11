"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
    {
        quote: "Luka consistently delivers production-quality code with a deep understanding of both user experience and system architecture.",
        author: "Engineering Lead",
        company: "Limestone Digital",
    },
    {
        quote: "Exceptional ability to translate complex requirements into clean, maintainable solutions. A true full-stack thinker.",
        author: "Product Manager",
        company: "Boosty Labs",
    },
    {
        quote: "His attention to performance and polish sets him apart. Every component he builds feels intentional and refined.",
        author: "CTO",
        company: "Vabaco",
    },
    {
        quote: "One of those rare engineers who can own a feature end-to-end — from design collaboration to deployment and monitoring.",
        author: "Tech Lead",
        company: "Limestone Digital",
    },
    {
        quote: "His background in physics gives him a unique edge in reasoning about complex systems and data flows.",
        author: "Senior Developer",
        company: "Boosty Labs",
    },
    {
        quote: "Ships fast without cutting corners. Exactly the kind of engineer you want on a founding team.",
        author: "Startup Founder",
        company: "Tech Advisory",
    },
];

function TestimonialCard({ quote, author, company }: { quote: string; author: string; company: string }) {
    return (
        <div className="flex-shrink-0 w-[340px] p-6 mx-3" style={{ background: "#0f172a", border: "1px solid rgba(34,211,238,0.2)" }}>
            <div className="text-lg mb-4" style={{ color: "#22d3ee", opacity: 0.4 }}>&ldquo;</div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8", fontSize: "0.85em" }}>{quote}</p>
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", fontSize: "0.6em" }}>{author[0]}</div>
                <div>
                    <div className="text-xs font-medium" style={{ color: "#e2e8f0", fontSize: "0.75em" }}>{author}</div>
                    <div className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>{company}</div>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const doubled = [...testimonials, ...testimonials];

    return (
        <section className="relative py-24 overflow-hidden" ref={ref}>
            <div className="max-w-5xl mx-auto px-6 mb-12">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <div className="section-label">// TESTIMONIALS</div>
                    <h2 className="section-title">What collaborators <span style={{ color: "#22d3ee" }}>say about working with me.</span></h2>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="overflow-hidden">
                <div className="marquee-track">
                    {doubled.map((t, i) => (<TestimonialCard key={i} {...t} />))}
                </div>
            </motion.div>
        </section>
    );
}
