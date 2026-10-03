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
          {/* Main Energetic Laser Gradient */}
          <linearGradient id="flagship-laser-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="25%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Laser Glow Filter */}
          <filter id="hyper-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Faint Energy Background Stream */}
        <path
          d="M 50 0 C 85 80, 15 180, 65 280 C 95 380, 10 480, 50 580 C 90 680, 15 780, 60 880 C 85 940, 35 970, 50 1000"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Outer Laser Aura Line */}
        <motion.path
          d="M 50 0 C 85 80, 15 180, 65 280 C 95 380, 10 480, 50 580 C 90 680, 15 780, 60 880 C 85 940, 35 970, 50 1000"
          stroke="url(#flagship-laser-grad)"
          strokeWidth="5"
          strokeOpacity="0.3"
          fill="none"
          filter="url(#hyper-glow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />

        {/* Primary Instantaneous Entertaining Energy Wave */}
        <motion.path
          d="M 50 0 C 85 80, 15 180, 65 280 C 95 380, 10 480, 50 580 C 90 680, 15 780, 60 880 C 85 940, 35 970, 50 1000"
          stroke="url(#flagship-laser-grad)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#hyper-glow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}
