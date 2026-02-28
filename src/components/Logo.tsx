"use client";

import { motion } from "framer-motion";

export function Logo({ className = "w-16 h-16" }: { className?: string }) {
    return (
        <div className="relative flex items-center justify-center group">
            {/* Optimized background aura */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full scale-125" style={{ willChange: "opacity" }} />

            <svg
                className={`${className} drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10`}
                viewBox="0 0 100 100"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" /> {/* Emerald green */}
                        <stop offset="50%" stopColor="#0ea5e9" /> {/* Teal/Blue */}
                        <stop offset="100%" stopColor="#3b82f6" /> {/* Solid blue */}
                    </linearGradient>
                    <linearGradient id="wave-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                        <stop offset="50%" stopColor="#14b8a6" /> {/* Teal */}
                        <stop offset="100%" stopColor="#10b981" /> {/* Emerald green */}
                    </linearGradient>
                </defs>

                {/* --- THE BOTTOM WATER PIPELINE (GPU Accelerated Breathing) --- */}
                <motion.g
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Pipeline Track */}
                    <path
                        stroke="rgba(37,99,235,0.35)"
                        d="M 0 92 Q 25 80 50 92 T 100 84"
                    />
                    {/* Pipeline Flow (Dashed moving water) */}
                    <motion.path
                        stroke="url(#wave-grad-1)"
                        strokeDasharray="30 50"
                        strokeLinecap="round"
                        d="M 0 92 Q 25 80 50 92 T 100 84"
                        initial={{ strokeDashoffset: 160 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </motion.g>

                {/* --- THE N-ARROW WATER PIPELINE (GPU Accelerated Breathing) --- */}
                <motion.g
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Pipeline Track */}
                    <path
                        stroke="rgba(37,99,235,0.35)"
                        strokeWidth="7"
                        d="M 15 60 C 25 15, 35 15, 45 45 C 55 72, 65 67, 85 15"
                    />
                    {/* Pipeline Flow (Dashed moving water) */}
                    <motion.path
                        stroke="url(#wave-grad-2)"
                        strokeWidth="7"
                        strokeDasharray="30 65"
                        strokeLinecap="round"
                        d="M 15 60 C 25 15, 35 15, 45 45 C 55 72, 65 67, 85 15"
                        initial={{ strokeDashoffset: 190 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Solid Arrow Head */}
                    <path
                        stroke="url(#wave-grad-2)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 65 15 L 85 15 L 85 35"
                    />
                </motion.g>
            </svg>
        </div>
    );
}
