"use client";

import { motion } from "framer-motion";

// Generates a complex, organic wave by combining fundamental and harmonic frequencies
// mimicking real EEG (Electroencephalography) readings like Alpha, Beta, and Theta waves.
const generateOrganicWavePath = (
    baseAmplitude: number,
    baseFrequency: number,
    phaseOffset: number,
    complexity: number = 3,
    points: number = 200
) => {
    let path = `M -10 50`; // Start slightly off-screen
    for (let i = 0; i <= points; i++) {
        const x = (i / points) * 120 - 10; // Map to -10 to 110 for smooth off-screen edges

        // Combine multiple sine waves for organic complexity
        let yOffset = 0;
        for (let j = 1; j <= complexity; j++) {
            // Higher harmonics have smaller amplitudes and higher frequencies
            const harmonicAmplitude = baseAmplitude / j;
            const harmonicFrequency = baseFrequency * (j * 1.5);
            yOffset += harmonicAmplitude * Math.sin(harmonicFrequency * i * 0.1 + phaseOffset * j);
        }

        // Add a very slow, wide modulation to make the whole wave breathe vertically
        const envelope = Math.sin(i * 0.05 + phaseOffset) * 0.5 + 0.5;

        const y = 50 + (yOffset * envelope);
        path += ` L ${x} ${y}`;
    }
    return path;
};

// World-class deterministic configurations mimicking specific brainwave states
const NEURAL_WAVES = [
    // Delta (Deep Sleep) - Slow, high amplitude, deep color
    { amplitude: 18, frequency: 0.02, phaseOffset: 0.0, duration: 25, strokeWidth: 3.5, opacity: 0.35, color: "rgba(6, 182, 212" }, // cyan-500
    // Theta (Meditation) - Slower, flowing
    { amplitude: 12, frequency: 0.04, phaseOffset: 12.5, duration: 20, strokeWidth: 2.5, opacity: 0.45, color: "rgba(34, 211, 238" }, // cyan-400
    // Alpha (Relaxed Focus) - Mid freq, very organic
    { amplitude: 8, frequency: 0.06, phaseOffset: 25.0, duration: 15, strokeWidth: 1.8, opacity: 0.60, color: "rgba(103, 232, 249" }, // cyan-300
    // Beta (Active Thinking) - Higher freq, erratic
    { amplitude: 4, frequency: 0.10, phaseOffset: 37.5, duration: 10, strokeWidth: 1.2, opacity: 0.50, color: "rgba(165, 243, 252" }, // cyan-200
    // Gamma (Insight/Genius) - Very high freq, sharp, low amplitude
    { amplitude: 2, frequency: 0.15, phaseOffset: 50.0, duration: 8, strokeWidth: 0.8, opacity: 0.40, color: "rgba(207, 250, 254" }, // cyan-100
];

// Pre-compute paths at module level to guarantee SSR/Client hydration match
const WAVE_PATHS = NEURAL_WAVES.map((w) => generateOrganicWavePath(w.amplitude, w.frequency, w.phaseOffset, 4, 250));

export default function NeuralBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* World-Class Ambient Environment Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-50/80 via-white to-white opacity-90" />

            {/* Subsurface "Genius" Glows - organic ambient lighting */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20%] left-[5%] w-[80%] h-[70%] rounded-full opacity-20 blur-[140px] bg-brand-400"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[120px] bg-cyan-300"
            />

            {/* Brain Waves Canvas */}
            <svg
                className="absolute inset-0 w-[120%] h-[150%] -left-[10%] -top-[25%]"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
            >
                <defs>
                    {/* Multi-layered glow filters for a neon-subsurface look */}
                    <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1" result="blur1" />
                        <feGaussianBlur stdDeviation="3" result="blur2" />
                        <feGaussianBlur stdDeviation="6" result="blur3" />
                        <feMerge>
                            <feMergeNode in="blur3" />
                            <feMergeNode in="blur2" />
                            <feMergeNode in="blur1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="synapse-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComponentTransfer in="blur" result="boost">
                            <feFuncA type="linear" slope="2" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode in="boost" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Distinct gradients for each wave layer to give depth */}
                    {NEURAL_WAVES.map((wave, i) => (
                        <linearGradient key={`grad-${i}`} id={`wave-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={`${wave.color}, 0)`} />
                            <stop offset="30%" stopColor={`${wave.color}, 0.8)`} />
                            <stop offset="70%" stopColor={`${wave.color}, 0.8)`} />
                            <stop offset="100%" stopColor={`${wave.color}, 0)`} />
                        </linearGradient>
                    ))}

                    {/* Synaptic flash gradient */}
                    <linearGradient id="synapse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                        <stop offset="10%" stopColor="rgba(255, 255, 255, 1)" />
                        <stop offset="90%" stopColor="rgba(255, 255, 255, 1)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                </defs>

                {/* Layer 1: The Base Neural Pathways (Static but breathing opacity) */}
                {NEURAL_WAVES.map((wave, i) => (
                    <motion.path
                        key={`pathway-${i}`}
                        d={WAVE_PATHS[i]}
                        fill="none"
                        stroke={`url(#wave-grad-${i})`}
                        strokeWidth={wave.strokeWidth}
                        filter="url(#core-glow)"
                        vectorEffect="non-scaling-stroke"
                        initial={{ opacity: wave.opacity * 0.4 }}
                        animate={{
                            opacity: [wave.opacity * 0.4, wave.opacity * 0.9, wave.opacity * 0.4]
                        }}
                        transition={{
                            duration: wave.duration * 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}

                {/* Layer 2: Information Flow (Slow, steady dashed lines representing continuous thought) */}
                {NEURAL_WAVES.map((wave, i) => (
                    <motion.path
                        key={`flow-${i}`}
                        d={WAVE_PATHS[i]}
                        fill="none"
                        stroke={`url(#wave-grad-${i})`}
                        strokeWidth={wave.strokeWidth * 0.8}
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="40 160"
                        animate={{
                            strokeDashoffset: [600, -600],
                        }}
                        transition={{
                            duration: 8 + (i * 1.5), // Slowed down slightly for smoother visual feel
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ opacity: wave.opacity }}
                    />
                ))}

                {/* Layer 3: Synaptic Firing (Fast, bright, intense flashes representing genius/insight) */}
                {NEURAL_WAVES.map((wave, i) => (
                    <motion.path
                        key={`synapse-${i}`}
                        d={WAVE_PATHS[i]}
                        fill="none"
                        stroke="url(#synapse-grad)"
                        strokeWidth={wave.strokeWidth * 1.5}
                        filter="url(#synapse-glow)"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="2 298" // Very short dash, very long gap
                        animate={{
                            strokeDashoffset: [600, -600],
                            opacity: [0, 1, 1, 0] // Fade in and out at edges
                        }}
                        transition={{
                            duration: 3.5 + (i * 0.6), // Slower flashes
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 2 + (i * 1) // Slightly longer pauses
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
