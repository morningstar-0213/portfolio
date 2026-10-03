import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/* ─── Dot node along the rail ─── */
function RailNode({ y }: { y: number }) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 ring-4 ring-orange-500/20"
      style={{ top: `${y}%` }}
    />
  );
}

export function ScrollLightStream() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  /* Comet that races along the rail */
  const rawY = useTransform(scrollYProgress, [0, 1], ['0%', '97%']);
  const smoothY = useSpring(rawY, { stiffness: 300, damping: 40, mass: 0.5 });

  /* Rail opacity: visible only after slight scroll */
  const railOpacity = useTransform(scrollYProgress, [0, 0.04], [0.3, 1]);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col items-center pointer-events-none"
      style={{ width: '60px' }}
    >
      {/* ─── Thin rail line ─── */}
      <motion.div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          opacity: railOpacity,
          background: 'linear-gradient(to bottom, transparent 2%, rgba(249,115,22,0.25) 15%, rgba(249,115,22,0.15) 85%, transparent 98%)',
        }}
      />

      {/* ─── Section nodes ─── */}
      {[14, 30, 50, 70, 88].map(y => (
        <RailNode key={y} y={y} />
      ))}

      {/* ─── Animated comet ─── */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: smoothY }}
      >
        {/* Glow core */}
        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-orange-400 orange-glow" />
          {/* Trail below */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-px"
            style={{
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(249,115,22,0.7), transparent)',
            }}
          />
          {/* Halo ring */}
          <motion.div
            className="absolute w-7 h-7 rounded-full border border-orange-500/30"
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* ─── Scroll % label ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-display text-[9px] text-orange-400/60 tracking-widest"
        style={{ writingMode: 'vertical-rl', opacity: scrollYProgress }}
      >
        SCROLL
      </motion.div>
    </div>
  );
}
