"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-between px-6"
            style={{
                background: scrolled
                    ? "rgba(2, 6, 23, 0.85)"
                    : "rgba(2, 6, 23, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid #22d3ee",
            }}
        >
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{
                            background: "#4ade80",
                            boxShadow: "0 0 6px rgba(74,222,128,0.6)",
                        }}
                    />
                    <span
                        className="text-xs uppercase tracking-[0.15em]"
                        style={{ color: "#94a3b8", fontSize: "0.7em" }}
                    >
                        System Status: Online
                    </span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-xs uppercase tracking-[0.1em] transition-colors duration-300"
                        style={{
                            color: "#94a3b8",
                            fontSize: "0.7em",
                            fontFamily: "var(--font-mono)",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#22d3ee")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#94a3b8")
                        }
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <a
                href="mailto:luka.bendela@gmail.com"
                className="neon-btn hidden sm:inline-flex"
                style={{ padding: "0.35rem 1rem", fontSize: "0.65em" }}
            >
                ESTABLISH LINK
            </a>
        </motion.nav>
    );
}
