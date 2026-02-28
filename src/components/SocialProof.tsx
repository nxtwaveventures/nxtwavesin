"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section id="clients" className="relative w-full px-6 -mt-8 z-20 pb-16">
            <div className="max-w-4xl mx-auto relative group">
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 0px rgba(16, 185, 129, 0)",
                            "0 0 40px rgba(16, 185, 129, 0.35)",
                            "0 0 0px rgba(16, 185, 129, 0)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="relative glass-panel glass-panel-interactive px-6 py-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden bg-white/60 backdrop-blur-xl"
                >
                    {/* Animated "water flowing" border using SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="1" y="1"
                            width="calc(100% - 2px)" height="calc(100% - 2px)"
                            rx="15" ry="15"
                            fill="none"
                            stroke="rgba(16, 185, 129, 0.2)"
                            strokeWidth="2"
                        />
                        <motion.rect
                            x="1" y="1"
                            width="calc(100% - 2px)" height="calc(100% - 2px)"
                            rx="15" ry="15"
                            fill="none"
                            stroke="url(#flow-gradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="150 600"
                            animate={{
                                strokeDashoffset: [750, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <defs>
                            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#34d399" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex items-center gap-3 z-10">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200">
                            {/* Adding a small icon like a star or lightning gives it extra flair */}
                            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-foreground/70 font-medium">Recent Win</p>
                            <p className="text-base text-foreground font-bold">
                                Placed Lead AI Engineer in 14 days.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-l border-emerald-200/60 pl-6 z-10">
                        <span className="text-foreground/60 text-sm font-medium">Delivered to</span>
                        {/* Anonymous GCC Location */}
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-teal-400 rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                            />
                            <span className="font-black text-xl tracking-tighter text-foreground">
                                GCC in Bangalore
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
