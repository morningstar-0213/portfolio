import { motion } from 'framer-motion';
import { ChevronDown, Shield, Terminal, Zap, Lock, Cpu, Activity, Award, Radio } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-20 overflow-hidden">
      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#a855f715_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

      {/* Cyber Glow Orbs */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/20 rounded-full blur-[110px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 via-pink-600/25 to-cyan-500/20 rounded-full blur-[110px] pointer-events-none"
          />
        </>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Telemetry Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.3)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider font-bold uppercase">
            Ethical Hacker & Security Researcher
          </span>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-xs text-purple-300 font-bold hidden sm:inline-flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            SYS_STATUS: ONLINE
          </span>
        </motion.div>

        {/* Profile Avatar surrounded by dual counter-rotating sci-fi target rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-8 md:mb-10 group"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          {/* Inner Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/50 pointer-events-none"
          />

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 rounded-full border border-dashed border-purple-400/40 pointer-events-none"
          />

          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-2 border-slate-900">
              <img
                src={profileImg}
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.innerHTML = '<span class="text-5xl">🛡️</span>';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-mono font-extrabold tracking-tight mb-4 md:mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(6,182,212,0.35)]">
            Vishesh Ranjan
          </span>
        </motion.h1>

        {/* Tagline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light tracking-wide flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400 inline" />
            <span className="bg-gradient-to-r from-gray-100 via-slate-200 to-gray-400 bg-clip-text text-transparent font-medium font-mono">
              Offensive Security Specialist
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Specializing in penetration testing, red teaming, exploit development, and enterprise infrastructure security.
          </p>

          {/* Telemetry Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 max-w-3xl mx-auto">
            {[
              { icon: Award, label: 'OSCP & CCIE', sub: 'Certifications' },
              { icon: Shield, label: '18+ Flagship', sub: 'Security Tools' },
              { icon: Zap, label: 'Red Team', sub: 'Offensive Audits' },
              { icon: Radio, label: '100% Practical', sub: 'Hands-On Labs' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.03 }}
                className="p-3 md:p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl transition-all text-center shadow-lg"
              >
                <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <div className="font-mono text-sm md:text-base font-bold text-white">{stat.label}</div>
                <div className="font-mono text-[11px] text-slate-400">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#journey"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono font-bold rounded-2xl shadow-xl shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Explore Certifications & Journey</span>
              <ChevronDown size={20} className="animate-bounce" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-gray-200 hover:text-white font-mono font-bold rounded-2xl backdrop-blur-xl transition-all duration-300"
            >
              <span>View Projects Matrix</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <ChevronDown size={28} className="text-cyan-400/70 hover:text-cyan-400 transition-colors" />
      </motion.div>
    </section>
  );
}