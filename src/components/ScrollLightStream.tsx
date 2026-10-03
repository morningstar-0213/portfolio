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
          <linearGradient id="wavy-light-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="40%" stopColor="#06b6d4" />
            <stop offset="80%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Wavy Background Conduit Path */}
        <path
          d="M 50 0 C 80 120, 20 280, 50 400 C 80 520, 20 680, 50 800 C 80 920, 30 970, 50 1000"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Instantaneous Wavy Light Stream - Zero Lag */}
        <motion.path
          d="M 50 0 C 80 120, 20 280, 50 400 C 80 520, 20 680, 50 800 C 80 920, 30 970, 50 1000"
          stroke="url(#wavy-light-gradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#laser-glow)"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
    </div>
  );
}
