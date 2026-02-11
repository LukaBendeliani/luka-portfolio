"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function GithubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export default function FooterCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    return (
        <footer id="contact" className="relative py-24 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                    <div className="section-label">06 // CONTACT</div>
                    <h2 className="section-title">Initialize <span style={{ color: "#f472b6" }}>Connection</span></h2>
                    <p className="text-sm mb-12 max-w-2xl" style={{ color: "#94a3b8" }}>
                        Open to senior frontend and full-stack roles, product engineering leadership, and high-impact contract work.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className="text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#22d3ee", fontSize: "0.7em" }}>&gt; TERMINAL INPUT</div>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ color: "#94a3b8", fontSize: "0.65em" }}>IDENTIFIER</label>
                                <input type="text" className="terminal-input" placeholder="&gt; Enter your name..." value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} aria-label="Your name" />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ color: "#94a3b8", fontSize: "0.65em" }}>COMM CHANNEL</label>
                                <input type="email" className="terminal-input" placeholder="&gt; Enter your email..." value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} aria-label="Your email" />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ color: "#94a3b8", fontSize: "0.65em" }}>TRANSMISSION</label>
                                <textarea className="terminal-input" rows={4} placeholder="&gt; Enter message payload..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} aria-label="Your message" style={{ resize: "none" }} />
                            </div>
                            <button type="submit" className="neon-btn neon-btn-primary w-full justify-center">TRANSMIT MESSAGE →</button>
                        </form>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
                        <div className="text-xs uppercase tracking-[0.15em] mb-6" style={{ color: "#22d3ee", fontSize: "0.7em" }}>&gt; DIRECT LINKS</div>
                        <div className="space-y-4 mb-10">
                            <a href="mailto:luka.bendela@gmail.com" className="flex items-center gap-3 p-4 transition-all duration-300" style={{ border: "1px solid #1e293b", background: "rgba(15,23,42,0.4)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b"; }}>
                                <span style={{ color: "#22d3ee" }}>✉</span>
                                <div>
                                    <div className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>EMAIL</div>
                                    <div className="text-sm" style={{ color: "#e2e8f0", fontSize: "0.8em" }}>luka.bendela@gmail.com</div>
                                </div>
                            </a>
                            <a href="tel:+995595999555" className="flex items-center gap-3 p-4 transition-all duration-300" style={{ border: "1px solid #1e293b", background: "rgba(15,23,42,0.4)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b"; }}>
                                <span style={{ color: "#22d3ee" }}>☎</span>
                                <div>
                                    <div className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>PHONE</div>
                                    <div className="text-sm" style={{ color: "#e2e8f0", fontSize: "0.8em" }}>+995 595 999 555</div>
                                </div>
                            </a>
                            <div className="flex items-center gap-3 p-4" style={{ border: "1px solid #1e293b", background: "rgba(15,23,42,0.4)" }}>
                                <span style={{ color: "#22d3ee" }}>◎</span>
                                <div>
                                    <div className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>LOCATION</div>
                                    <div className="text-sm" style={{ color: "#e2e8f0", fontSize: "0.8em" }}>Georgia, Tbilisi</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: "#22d3ee", fontSize: "0.7em" }}>&gt; SOCIAL NODES</div>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/" },
                                { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com/" },
                                { icon: <XIcon />, label: "X", href: "https://x.com/" },
                            ].map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="social-icon p-3 transition-all duration-300" style={{ border: "1px solid #1e293b" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee"; e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.filter = "none"; e.currentTarget.style.boxShadow = "0 0 12px rgba(34,211,238,0.2)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.filter = "grayscale(100%) brightness(0.6)"; e.currentTarget.style.boxShadow = "none"; }}>
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <div className="mt-10 p-4" style={{ border: "1px solid rgba(244,114,182,0.3)", background: "rgba(244,114,182,0.05)" }}>
                            <div className="text-xs uppercase tracking-[0.15em] font-bold mb-1" style={{ color: "#f472b6", fontSize: "0.7em" }}>TOP 3% TALENT</div>
                            <a href="https://www.toptal.com/developers/resume/luka-bendeliani" target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: "#94a3b8", fontSize: "0.75em" }}>View Toptal Profile →</a>
                        </div>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid #1e293b" }}>
                    <div className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>© 2026 LUKA BENDELIANI. BUILT WITH NEXT.JS, TYPESCRIPT, AND INTENTIONAL DESIGN CRAFT.</div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
                        <span className="text-xs" style={{ color: "#94a3b8", fontSize: "0.65em" }}>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
