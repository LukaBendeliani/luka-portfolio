"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
    "> INITIALIZING SYSTEM...",
    "> LOADING NEURAL INTERFACE...",
    "> COMPILING RUNTIME MODULES...",
    "> ESTABLISHING SECURE CONNECTION...",
    "> RENDERING PORTFOLIO ENGINE v2.0...",
    "> SYSTEM READY_",
];

export default function BootSequence({
    onComplete,
}: {
    onComplete: () => void;
}) {
    const [visibleLines, setVisibleLines] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (visibleLines < bootLines.length) {
            const timer = setTimeout(() => setVisibleLines((v) => v + 1), 450);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setDone(true);
                setTimeout(onComplete, 900);
            }, 750);
            return () => clearTimeout(timer);
        }
    }, [visibleLines, onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: "#020617" }}
                >
                    <div className="w-full max-w-lg px-6">
                        <div
                            className="mb-6 text-xs uppercase tracking-[0.3em]"
                            style={{ color: "#22d3ee" }}
                        >
                            SYSTEM BOOT SEQUENCE
                        </div>
                        <div className="space-y-2">
                            {bootLines.slice(0, visibleLines).map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm"
                                    style={{
                                        color:
                                            i === bootLines.length - 1 ? "#22d3ee" : "#94a3b8",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            className="mt-8 h-[2px] rounded"
                            style={{ background: "#0f172a" }}
                        >
                            <motion.div
                                className="h-full rounded"
                                style={{ background: "#22d3ee" }}
                                initial={{ width: "0%" }}
                                animate={{
                                    width: `${(visibleLines / bootLines.length) * 100}%`,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
