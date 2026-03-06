"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#205081] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const itemVariants: any = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2, duration: 0.6 } }
};

export default function ServicesBento() {
    return (
        <section className="py-24 px-6 bg-[#f9fafb] border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        What <span className="text-[#205081]">We Do.</span>
                    </h2>
                    <p className="text-slate-500 mt-4 text-lg md:text-xl font-medium tracking-tight">
                        Our hard work speaks for itself.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Card 1: AI Hire */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-10 md:p-12 flex flex-col justify-start relative overflow-hidden group rounded-sm h-full cursor-pointer isolate">
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#205081] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                            <div className="z-10 relative">
                                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#205081] transition-colors">AI Hire</h3>
                                <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                                    Elite AI engineers mapped precisely to your technical requirements and company culture.
                                </p>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 text-slate-700 font-semibold text-lg"
                                >
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>Generative AI Engineers</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>Machine Learning Architects</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>Senior Data Scientists</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>Applied AI Researchers</span>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: AI Vetting */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-10 md:p-12 flex flex-col justify-start relative overflow-hidden group rounded-sm h-full cursor-pointer isolate">
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#205081] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                            <div className="z-10 relative">
                                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#205081] transition-colors">AI Vetting</h3>
                                <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                                    IIT veterans deeply vet your highest-paying engineering hires for elite technical skill and cultural alignment. Zero false positives.
                                </p>

                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 text-slate-700 font-semibold text-lg"
                                >
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>1-Hour Expert Technical Interview</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>Live On-Screen Coding & Architecture</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>First-Principles Core Concept Validation</span>
                                    </motion.li>
                                    <motion.li variants={itemVariants} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span>1-Hour "Know You" & Cultural Fit Round</span>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
