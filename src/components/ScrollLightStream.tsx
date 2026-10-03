import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollLightStream() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [pageHeight, setPageHeight] = useState(4000);

  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.body.scrollHeight || 4000);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(document.body);

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  const circleY = useTransform(scaleY, [0, 1], [40, pageHeight - 40]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Central Stream Line Guide Background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-800/40 hidden md:block" />
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-slate-800/40 md:hidden" />

      {/* Animated Light Stream - Desktop (Center) */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.9)] hidden md:block"
      />

      {/* Animated Light Stream - Mobile (Left) */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.9)] md:hidden"
      />

      {/* Glowing Pulsing Head Orb - Desktop */}
      <motion.div
        style={{ top: circleY }}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_20px_#06b6d4,0_0_40px_#a855f7] border-2 border-white z-10 hidden md:block"
      >
        <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-75" />
      </motion.div>

      {/* Glowing Pulsing Head Orb - Mobile */}
      <motion.div
        style={{ top: circleY }}
        className="absolute left-6 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-cyan-300 shadow-[0_0_20px_#06b6d4] border-2 border-white z-10 md:hidden"
      >
        <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-75" />
      </motion.div>
    </div>
  );
}
