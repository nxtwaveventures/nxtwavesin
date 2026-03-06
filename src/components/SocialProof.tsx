"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    return (
        <section id="clients" className="relative w-full px-6 -mt-12 z-20 pb-20">
            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-6 rounded-sm"
                >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-12 h-12 flex items-center justify-center bg-[#f0f4f8] border border-[#d1e0f0] rounded-sm shrink-0">
                            <svg className="w-6 h-6 text-[#205081]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">Recent Placement</p>
                            <p className="text-lg text-slate-900 font-bold leading-tight">
                                Lead AI Engineer matched in <span className="text-[#205081]">14 days</span>.
                            </p>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-12 bg-gray-200"></div>

                    <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto border-t sm:border-t-0 border-gray-100 pt-4 sm:pt-0">
                        <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">Delivered To</span>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-sm bg-[#205081] flex items-center justify-center shadow-sm">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg text-slate-900">
                                Enterprise GCC, Bangalore
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
