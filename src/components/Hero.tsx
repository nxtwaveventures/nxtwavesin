"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// SSR disabled — Framer Motion animated SVG paths cause hydration mismatches when server-rendered
const NeuralBackground = dynamic(() => import("./NeuralBackground"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
            <NeuralBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto text-center z-10"
            >

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                        AI Talent.
                    </span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-400">
                        Hire Or Vett.
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
                >
                    <p className="mb-2 text-foreground/90 font-semibold tracking-tight">
                        Powering Enterprise GCCs/Startups with the best human minds in AI.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => {
                            document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="glass-button w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl"
                    >
                        <span>Hire Us</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
