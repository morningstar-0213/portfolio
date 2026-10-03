import { motion, useScroll } from 'framer-motion';

export function ScrollLightStream() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full absolute inset-0"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Neon Energy Ribbon Gradient */}
          <linearGradient id="cyber-matrix-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="60%" stopColor="#3b82f6" />
            <stop offset="85%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Hyper Glow Filter */}
          <filter id="matrix-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Guide Stream Path */}
        <path
          d="M 50 0 C 90 100, 10 200, 50 350 C 90 500, 10 650, 50 800 C 90 900, 20 960, 50 1000"
          stroke="rgba(16, 185, 129, 0.08)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Glowing Aura Ribbon Line */}
        <motion.path
          d="M 50 0 C 90 100, 10 200, 50 350 C 90 500, 10 650, 50 800 C 90 900, 20 960, 50 1000"
          stroke="url(#cyber-matrix-gradient)"
          strokeWidth="6"
          strokeOpacity="0.25"
          fill="none"
          filter="url(#matrix-glow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />

        {/* Primary Instantaneous Entertaining Energy Wave */}
        <motion.path
          d="M 50 0 C 90 100, 10 200, 50 350 C 90 500, 10 650, 50 800 C 90 900, 20 960, 50 1000"
          stroke="url(#cyber-matrix-gradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#matrix-glow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}
