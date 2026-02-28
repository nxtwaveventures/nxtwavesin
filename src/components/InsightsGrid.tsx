"use client";

import { motion } from "framer-motion";

const ARTICLES = [
    {
        title: "Stop testing. Start vetting.",
        category: "Evaluation",
        readTime: "3 min read",
        color: "from-brand-500 to-cyan-500",
    },
    {
        title: "The million-dollar bad hire.",
        category: "Economics",
        readTime: "4 min read",
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "Scale with the best.",
        category: "Strategy",
        readTime: "5 min read",
        color: "from-emerald-500 to-teal-500",
    },
];

export default function InsightsGrid() {
    return (
        <section id="blogs" className="py-24 px-6 relative z-10 border-t border-brand-100/50 bg-white/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight text-center leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Blogs.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {ARTICLES.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="glass-panel glass-panel-interactive p-6 md:p-8 flex flex-col h-full cursor-pointer group"
                        >
                            <div className="mb-8">
                                <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-2">
                                    {article.category}
                                </span>
                                <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-brand-600 transition-colors">
                                    {article.title}
                                </h3>
                            </div>

                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-brand-200/40">
                                <span className="text-sm font-medium text-foreground/60">{article.readTime}</span>
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${article.color} flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform`}>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
