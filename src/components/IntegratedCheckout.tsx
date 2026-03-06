"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function IntegratedCheckout() {
    const [formData, setFormData] = useState({
        service: "",
        name: "",
        email: "",
        company: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormValid = formData.service !== "" && formData.name.trim() !== "" && formData.email.trim() !== "" && formData.company.trim() !== "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isFormValid) return;

        // Prepare WhatsApp message body
        const message = `Hi NxtWaves! I am interested in hiring AI talent.
------------------------------------
Service Required: ${formData.service}
Recruiter Name: ${formData.name}
Work Email: ${formData.email}
Company: ${formData.company}
------------------------------------`;

        // Redirect to WhatsApp 
        const whatsappNumber = "919663495817";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="checkout" className="py-24 px-6 relative z-10 w-full flex justify-center bg-[#f9fafb] border-t border-gray-200">
            <div className="max-w-3xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Hire <span className="text-[#205081]">Us.</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg font-medium">
                        Provide your 4 details to unlock via WhatsApp.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 md:p-12 rounded-sm relative overflow-hidden border border-gray-200 shadow-xl"
                >
                    {/* Top accent line matching the cards */}
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#205081]" />

                    <form className="space-y-6 relative z-10 pt-2" onSubmit={handleSubmit}>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider text-[11px]">Service Required</label>
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-[#205081] focus:ring-1 focus:ring-[#205081] transition-all font-medium text-slate-900 appearance-none h-[50px]"
                            >
                                <option value="" disabled>Select Service...</option>
                                <option value="AI Hire">AI Hire</option>
                                <option value="AI Vetting">AI Vetting</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider text-[11px]">Recruiter Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="E.g. Sarah Connor"
                                className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-[#205081] focus:ring-1 focus:ring-[#205081] transition-all font-medium text-slate-900 h-[50px] placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider text-[11px]">Work Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="sarah@enterprise.com"
                                className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-[#205081] focus:ring-1 focus:ring-[#205081] transition-all font-medium text-slate-900 h-[50px] placeholder:text-gray-400"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider text-[11px]">Company Details / Name</label>
                            <input
                                name="company"
                                type="text"
                                required
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enterprise AI Labs"
                                className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-[#205081] focus:ring-1 focus:ring-[#205081] transition-all font-medium text-slate-900 h-[50px] placeholder:text-gray-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8 flex flex-col items-center">
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full px-12 py-4 rounded-sm text-lg font-bold items-center justify-center gap-3 flex transition-all ${isFormValid
                                    ? "bg-[#25D366] text-white hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                                    : "bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                {/* WhatsApp Icon */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>{isFormValid ? "Connect on WhatsApp" : "Fill details to unlock"}</span>
                            </button>
                            {!isFormValid && (
                                <p className="mt-4 text-sm font-semibold text-amber-600 text-center max-w-sm">
                                    Please provide all four details above to connect with us.
                                </p>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
