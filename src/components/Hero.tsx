import { motion } from 'framer-motion';
import { ChevronDown, Shield, Award, Zap, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Ethical Hacker & Security Specialist</span>
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-6 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-0.5 bg-slate-900 border border-slate-800 overflow-hidden">
            <img
              src={profileImg}
              alt="Vishesh Ranjan"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement;
                if (fallback) fallback.innerHTML = '<span class="text-4xl">🛡️</span>';
              }}
            />
          </div>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white mb-3"
        >
          Vishesh Ranjan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-400 max-w-xl font-sans font-normal leading-relaxed mb-8"
        >
          Specializing in penetration testing, red teaming, exploit development, and enterprise network infrastructure.
        </motion.p>

        {/* Key Feature Chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {[
            { icon: Award, label: 'OSCP & CCIE Certified' },
            { icon: Shield, label: '18+ Security Tools' },
            { icon: Zap, label: 'Red Team Audits' },
          ].map((chip, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5"
            >
              <chip.icon className="w-3.5 h-3.5 text-emerald-400" />
              {chip.label}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#journey"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Explore Certifications Stream</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <span>View Projects</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <ChevronDown className="w-5 h-5 text-slate-600" />
      </motion.div>
    </section>
  );
}