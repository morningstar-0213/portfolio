import React from 'react';
import { motion } from 'framer-motion';
import { useTree } from '../context/TreeContext';
import { useSectionRegistry } from '../context/SectionRegistry';
import { Sparkles } from 'lucide-react';

const realmNodes = [
  { id: 'home', label: 'Home', short: 'ROOT' },
  { id: 'journey', label: 'Certs', short: 'LOOM' },
  { id: 'expertise', label: 'Skills', short: 'RUNES' },
  { id: 'projects', label: 'Projects', short: 'REALMS' },
  { id: 'contact', label: 'Contact', short: 'CITADEL' },
];

export function MiniTreeBar() {
  const { scrollYProgress, animationEnabled, prefersReducedMotion } = useTree();
  const { activeSection } = useSectionRegistry();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed top-14 left-0 right-0 z-30 px-3 py-2 bg-[#040e0b]/90 backdrop-blur-xl border-b border-emerald-500/20 select-none">
      <div className="relative flex items-center justify-between max-w-md mx-auto">
        {/* Glowing Background Timeline Vine (SVG) */}
        <svg
          className="absolute inset-x-2 top-1/2 -translate-y-1/2 w-[calc(100%-16px)] h-4 pointer-events-none overflow-visible"
        >
          {/* Base branch fiber */}
          <path
            d="M 10 8 Q 80 4, 160 8 T 320 8"
            fill="none"
            stroke="rgba(6, 78, 59, 0.6)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Active progress glowing vine */}
          <motion.path
            d="M 10 8 Q 80 4, 160 8 T 320 8"
            fill="none"
            stroke="url(#mobileBranchGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: Math.max(0.1, scrollYProgress) }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          />

          <defs>
            <linearGradient id="mobileBranchGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="70%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#00ff88" />
            </linearGradient>
          </defs>
        </svg>

        {/* 5 Sacred Realm Nodes */}
        {realmNodes.map((realm, index) => {
          const isActive = activeSection === realm.id;
          return (
            <button
              key={realm.id}
              onClick={() => scrollTo(realm.id)}
              className="relative z-10 flex flex-col items-center gap-1 py-0.5 px-2 group focus:outline-none"
            >
              {/* Interactive Node Dot */}
              <div className="relative flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="mobileActivePulse"
                    className="absolute -inset-1.5 rounded-full border border-emerald-400 bg-emerald-400/20 shadow-[0_0_12px_#00ff88]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-emerald-300 shadow-[0_0_8px_#00ff88] scale-110'
                      : 'bg-emerald-950 border border-emerald-500/40 group-hover:border-emerald-300'
                  }`}
                />
              </div>

              {/* Node Title & Short Realm Tag */}
              <span
                className={`font-mono-display text-[9px] tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-emerald-300 font-bold drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]'
                    : 'text-white/40 group-hover:text-white/70'
                }`}
              >
                {realm.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
