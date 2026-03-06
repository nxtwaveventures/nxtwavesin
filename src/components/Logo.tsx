"use client";

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <div className="relative flex items-center justify-center group flex-row gap-3">
            <svg
                className={`${className}`}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Clean, Toptal-inspired geometric logo mark - Interlocking sharp angles */}
                <path
                    d="M20 50 L50 20 L65 35 L35 65 Z"
                    fill="#205081"
                />
                <path
                    d="M80 50 L50 80 L35 65 L65 35 Z"
                    fill="#3b82f6"
                    fillOpacity="0.8"
                />
            </svg>
            <span className="text-2xl font-black tracking-tight text-slate-900 hidden sm:block">
                Nxt<span className="text-[#205081]">Waves</span>
            </span>
        </div>
    );
}
