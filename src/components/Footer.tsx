import { Logo } from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 border-t border-slate-800 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <div className="mb-6 bg-white p-2 rounded-sm inline-block">
                        <Logo className="w-12 h-12" />
                    </div>
                    <p className="text-sm font-medium text-slate-400 max-w-sm text-center md:text-left">
                        Powering Enterprise GCCs and Startups with the highest-vetted AI talent in the industry.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3 text-sm font-medium text-slate-400 text-center md:text-right">
                    <div className="flex gap-6 mb-4">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Careers</span>
                    </div>
                    <p className="text-slate-500">GST Compliant & Verified Services</p>
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} NxtWaves. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
