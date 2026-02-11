"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullTitle = "LUKA BENDELIANI";
const subtitle = "FULL-STACK ENGINEER";

const stats = [
    { label: "EXPERIENCE", value: "7+ YEARS" },
    { label: "STACK", value: "REACT / NEXT / TS" },
    { label: "LOCATION", value: "TBILISI, GE" },
    { label: "STATUS", value: "TOP 3% TALENT" },
];

export default function Hero() {
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= fullTitle.length) {
                setDisplayedTitle(fullTitle.slice(0, i));
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => setShowSubtitle(true), 200);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            <div className="data-stream" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="section-label mb-6"
                >
                    &#47;&#47; SOFTWARE ENGINEER PORTFOLIO
                </motion.div>

                <h1
                    className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-[-0.05em] leading-tight cursor-default"
                    style={{ color: "#e2e8f0" }}
                >
                    <span className="cursor-blink">{displayedTitle}</span>
                </h1>

                {showSubtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <p
                            className="mt-3 text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-[0.15em]"
                            style={{ color: "#22d3ee" }}
                        >
                            &#47;&#47; {subtitle}
                        </p>
                        <p
                            className="mt-6 text-sm max-w-2xl mx-auto leading-relaxed"
                            style={{ color: "#94a3b8" }}
                        >
                            Building complex, high-impact web products with strong system
                            thinking and taste for polished execution. I design interfaces
                            that feel alive and engineer them to hold up under real usage.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mt-10"
                >
                    <a href="#projects" className="neon-btn">
                        VIEW SIGNATURE WORK →
                    </a>
                    <a href="#contact" className="neon-btn neon-btn-primary">
                        INITIALIZE CONNECTION
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3 + i * 0.1 }}
                            className="p-4 text-center"
                            style={{
                                border: "1px solid #1e293b",
                                background: "rgba(15, 23, 42, 0.5)",
                            }}
                        >
                            <div
                                className="text-xs uppercase tracking-[0.15em] mb-1"
                                style={{ color: "#94a3b8", fontSize: "0.65em" }}
                            >
                                {stat.label}
                            </div>
                            <div
                                className="text-sm font-semibold"
                                style={{ color: "#22d3ee", fontSize: "0.8em" }}
                            >
                                {stat.value}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#94a3b8", fontSize: "0.65em" }}
                >
                    ↓ SCROLL TO EXPLORE
                </motion.div>
            </motion.div>
        </section>
    );
}
