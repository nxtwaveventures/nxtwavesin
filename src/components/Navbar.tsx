"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
                <motion.div
                    className="flex items-center justify-center cursor-pointer relative"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Logo className="w-16 h-16" />
                </motion.div>
                <div className="hidden md:flex items-center gap-8 mr-4 text-sm font-semibold tracking-wide text-foreground/80 font-sans">
                    <button
                        onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
                        className="hover:text-brand-500 transition-colors font-sans"
                    >
                        Our Clients
                    </button>
                    <button
                        onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
                        className="hover:text-brand-500 transition-colors font-sans"
                    >
                        Our Blogs
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => {
                            document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="glass-button px-6 py-2.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:scale-105"
                    >
                        Hire Us
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
