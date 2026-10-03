import { motion } from 'framer-motion';
import { Shield, Award, Zap, ArrowRight, Terminal, Radio, Lock, Cpu } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Operator Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wider uppercase">OPERATOR: ETHICAL HACKER</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-300">OSCP & CCIE CERTIFIED</span>
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-2 border-slate-900">
              <img
                src={profileImg}
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.innerHTML = '<span class="text-5xl">🛡️</span>';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold tracking-tight text-white mb-3"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Vishesh Ranjan
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-emerald-400 font-mono font-semibold tracking-wide mb-4"
        >
          Offensive Security Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl font-sans leading-relaxed mb-8"
        >
          Specializing in penetration testing, red teaming, exploit development, and enterprise infrastructure security.
        </motion.p>

        {/* Key Feature Stats Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full mb-8"
        >
          {[
            { icon: Award, label: 'OSCP & CCIE', sub: 'Certifications' },
            { icon: Shield, label: '18+ Flagship', sub: 'Security Tools' },
            { icon: Zap, label: 'Red Team', sub: 'Offensive Audits' },
            { icon: Radio, label: '100% Practical', sub: 'Hands-On Labs' },
          ].map((chip, i) => (
            <div
              key={i}
              className="matrix-glass p-3 rounded-xl text-center hover:border-emerald-500/50 transition-all"
            >
              <chip.icon className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="font-mono text-xs sm:text-sm font-bold text-white">{chip.label}</div>
              <div className="font-mono text-[10px] text-slate-400">{chip.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#journey"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
          >
            <span>EXPLORE CERTIFICATION VAULT</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-400 text-slate-200 hover:text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <span>VIEW EXPLOIT MATRIX</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}