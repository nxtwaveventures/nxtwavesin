"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

export default function ServicesBento() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight text-center leading-tight">
                        What <span className="text-brand-600">We Do.</span>
                    </h2>
                    <p className="text-foreground/70 mt-6 text-xl text-center max-w-2xl font-medium tracking-tight">
                        Our hard work speaks for itself.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Card 1: AI Hire */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-panel p-10 md:p-12 flex flex-col justify-start relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-400/30 transition-colors duration-700" />

                        <div className="z-10 relative">
                            <h3 className="text-4xl font-black text-foreground mb-4 tracking-tight">AI Hire</h3>
                            <p className="text-foreground/70 text-lg mb-10 font-medium leading-relaxed">
                                We try our best to find the right candidate for you.
                            </p>

                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-5 text-foreground/80 font-semibold text-lg"
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
                    </motion.div>

                    {/* Card 2: AI Vetting */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-panel p-10 md:p-12 flex flex-col justify-start relative overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-cyan-400/30 transition-colors duration-700" />

                        <div className="z-10 relative">
                            <h3 className="text-4xl font-black text-foreground mb-4 tracking-tight">AI Vetting</h3>
                            <p className="text-foreground/70 text-lg mb-10 font-medium leading-relaxed">
                                IIT veterans ruthlessly stress-test your pipeline. Zero false positives.
                            </p>

                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-5 text-foreground/80 font-semibold text-lg"
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
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
