"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm"
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <motion.div
                    className="flex items-center justify-center cursor-pointer relative"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                >
                    <Logo className="w-10 h-10" />
                </motion.div>

                <div className="hidden md:flex items-center gap-10 mr-4 text-sm font-bold tracking-wider text-slate-600 uppercase">
                    <button
                        onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
                        className="hover:text-[#205081] transition-colors"
                    >
                        Our Clients
                    </button>
                    <button
                        onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
                        className="hover:text-[#205081] transition-colors"
                    >
                        Trending Insights
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-[#205081] text-white px-8 py-2.5 rounded-sm text-sm font-bold flex items-center justify-center hover:bg-[#1a416b] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                    >
                        Hire Us
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
