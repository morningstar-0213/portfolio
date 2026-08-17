import { motion } from 'framer-motion';
import { ChevronDown, Shield, Terminal, Zap, Lock, Cpu, Activity, Award, Radio, Crosshair } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-20 overflow-hidden">
      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d418_1px,transparent_1px),linear-gradient(to_bottom,#a855f718_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none" />

      {/* Cyber Scanline Overlay */}
      <div className="scanline-bg absolute inset-0 opacity-40 z-0 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Sci-Fi HUD Header Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs md:text-sm tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.3)] mb-8 backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="font-orbitron font-bold text-cyan-300 uppercase tracking-widest">
            OPERATOR: ETHICAL HACKER
          </span>
          <span className="text-slate-700">//</span>
          <span className="text-purple-400 font-mono hidden sm:inline-flex items-center gap-1.5 font-bold">
            <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            SYS_TIME: {timeStr || 'LIVE'}
          </span>
        </motion.div>

        {/* Profile Avatar surrounded by dual rotating sci-fi target rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-8 md:mb-10 group"
        >
          {/* Neon Glow Aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          {/* Inner Counter-Rotating Target Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border-2 border-dashed border-cyan-400/60 pointer-events-none"
          />

          {/* Outer Rotating HUD Reticle Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-8 rounded-full border border-dotted border-purple-400/50 pointer-events-none"
          />

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1.5 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-2 border-slate-900">
              <img
                src={profileImg}
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.innerHTML = '<span class="text-6xl">🛡️</span>';
                }}
              />
            </div>
          </div>

          {/* Crosshair Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
            <Crosshair className="w-64 h-64 text-cyan-400/40 animate-spin" style={{ animationDuration: '40s' }} />
          </div>
        </motion.div>

        {/* Main Name Header - Orbitron Font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl font-black tracking-wider leading-none text-glow-cyan bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            VISHESH RANJAN
          </h1>
        </motion.div>

        {/* Tagline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <div className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-slate-200 uppercase flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400 inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-slate-100 to-purple-300 bg-clip-text text-transparent">
              OFFENSIVE SECURITY SPECIALIST
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Specializing in penetration testing, red teaming, exploit development, and enterprise infrastructure security.
          </p>

          {/* Cyber Telemetry Cards Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 max-w-4xl mx-auto">
            {[
              { icon: Award, label: 'OSCP & CCIE', sub: 'Certifications', color: 'border-cyan-500/40 text-cyan-300' },
              { icon: Shield, label: '18+ Flagship', sub: 'Security Tools', color: 'border-purple-500/40 text-purple-300' },
              { icon: Zap, label: 'Red Team', sub: 'Offensive Audits', color: 'border-pink-500/40 text-pink-300' },
              { icon: Radio, label: '100% Practical', sub: 'Hands-On Labs', color: 'border-emerald-500/40 text-emerald-300' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.04 }}
                className={`cyber-box p-3.5 md:p-5 rounded-xl border ${stat.color} transition-all text-center relative group`}
              >
                {/* HUD Bracket Accents */}
                <span className="absolute top-1 left-1 font-mono text-[9px] text-cyan-500/60">+</span>
                <span className="absolute top-1 right-1 font-mono text-[9px] text-cyan-500/60">+</span>
                
                <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                <div className="font-orbitron text-sm md:text-base font-bold text-white tracking-wide">{stat.label}</div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Action Launcher Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(6,182,212,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#journey"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-orbitron font-bold text-sm tracking-wider rounded-xl shadow-xl shadow-cyan-500/30 border border-cyan-400 transition-all duration-300"
            >
              <span>EXPLORE CERTIFICATIONS</span>
              <ChevronDown size={18} className="animate-bounce" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-orbitron font-bold text-sm tracking-wider rounded-xl backdrop-blur-xl transition-all duration-300"
            >
              <span>VIEW PROJECTS MATRIX</span>
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
        <ChevronDown size={28} className="text-cyan-400/80 hover:text-cyan-300 transition-colors" />
      </motion.div>
    </section>
  );
}