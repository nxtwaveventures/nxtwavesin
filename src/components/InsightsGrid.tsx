"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BLOG_POSTS } from "@/data/blogs";

export default function InsightsGrid() {
    return (
        <section id="blogs" className="py-24 px-6 bg-[#f9fafb] w-full border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-3">
                            Trending <span className="text-[#205081]">Insights.</span>
                        </h2>
                        <p className="text-slate-500 font-medium text-lg">Live updates on AI hiring trends & research.</p>
                    </div>
                    <button className="text-sm font-bold text-[#205081] hover:text-[#1a416b] flex items-center gap-2 group mx-auto md:mx-0">
                        View all intelligence
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/insights/${article.slug}`}
                                className="flex flex-col h-full bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group rounded-sm relative overflow-hidden"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#205081] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <span className="text-[11px] font-bold tracking-widest text-[#205081] uppercase">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-8 group-hover:text-[#205081] transition-colors">
                                        {article.title}
                                    </h3>

                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                                        <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                                            {article.readTime}
                                        </span>
                                        <span className="text-[#205081] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
