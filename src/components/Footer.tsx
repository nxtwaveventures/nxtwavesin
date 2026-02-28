import { Logo } from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <div className="mb-4">
                        <Logo className="w-14 h-14" />
                    </div>
                    <p className="text-sm font-medium text-foreground/60">
                        Expert AI Talent.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2 text-sm font-medium text-foreground/60 text-center md:text-right">
                    <p>GST Compliant & Verified Services</p>
                    <p>&copy; {new Date().getFullYear()} NxtWaves. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
