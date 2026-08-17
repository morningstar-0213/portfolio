import { motion } from 'framer-motion';
import { ChevronDown, Shield, Terminal, Zap, Lock, Cpu } from 'lucide-react';
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
      {/* Cyber Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#a855f715_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* Ambient background glows */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 right-1/4 w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/20 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.25, 1, 1.25],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/4 w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-br from-purple-600/30 via-pink-600/25 to-blue-600/20 rounded-full blur-[100px] pointer-events-none"
          />
        </>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 10 : 22)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: (i % 4) * 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)] mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="font-mono text-xs md:text-sm text-cyan-300 tracking-wider font-semibold uppercase">
            Certified Ethical Hacker & Security Researcher
          </span>
        </motion.div>

        {/* Profile Avatar with Glowing Cyber Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-8 md:mb-10 group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/40 pointer-events-none"
          />

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1.5 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-2 border-slate-900">
              <img
                src={profileImg}
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.innerHTML = '<span class="text-4xl">🛡️</span>';
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
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
            Vishesh Ranjan
          </span>
        </motion.h1>

        {/* Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light tracking-wide flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400 inline" />
            <span className="bg-gradient-to-r from-gray-100 via-slate-200 to-gray-400 bg-clip-text text-transparent font-medium">
              Offensive Security Specialist
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-sans">
            Specializing in penetration testing, red teaming, vulnerability research, and advanced security engineering to fortify modern digital assets.
          </p>

          {/* Key Skill Highlights Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { icon: Shield, label: 'Penetration Testing' },
              { icon: Zap, label: 'Red Teaming' },
              { icon: Lock, label: 'Web & API Security' },
              { icon: Cpu, label: 'Exploit Dev' },
            ].map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-cyan-500/30 text-xs md:text-sm font-mono text-cyan-300 backdrop-blur-sm"
              >
                <chip.icon className="w-3.5 h-3.5 text-cyan-400" />
                {chip.label}
              </span>
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6,182,212,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#expertise"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Explore Security Expertise</span>
              <ChevronDown size={20} className="animate-bounce" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-gray-300 hover:text-white font-mono font-bold rounded-xl backdrop-blur-xl transition-all duration-300"
            >
              <span>View Projects</span>
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