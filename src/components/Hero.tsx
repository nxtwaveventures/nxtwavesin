"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16 bg-[#f9fafb] overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">

                {/* Left Side: Copy & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[#e8f0fe] text-[#205081] text-xs font-bold tracking-widest uppercase mb-8 border border-[#c2d7f5]"
                    >
                        Elite Tech Talent
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6"
                    >
                        Hire Or Vett Top <br className="hidden lg:block" />
                        <span className="text-[#205081]">AI Talent.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed mb-10 font-medium"
                    >
                        We hire or vet your highest paying technology employees for technical skills and cultural fit. Zero false positives.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <button
                            onClick={() => {
                                document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-[#205081] text-white w-full sm:w-auto px-10 py-4 rounded-sm text-lg font-semibold hover:bg-[#1a416b] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >
                            Hire Us Now
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/3] lg:aspect-square max-w-2xl mx-auto lg:mr-0"
                >
                    <div className="absolute inset-0 bg-[#205081]/5 translate-x-4 translate-y-4 rounded-sm -z-10"></div>
                    <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl border border-gray-200">
                        <Image
                            src="/hero-image-v5.png"
                            alt="Elite Indian woman software engineer focused on screen"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
