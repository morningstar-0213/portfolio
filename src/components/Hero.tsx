import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Terminal, Zap, Award, Radio, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export function Hero() {
  const { scrollY } = useScroll();

  // Parallax shifts
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yAvatar = useTransform(scrollY, [0, 500], [0, 50]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-24 overflow-hidden">
      {/* Ambient background glow with subtle parallax */}
      <motion.div
        style={{ y: yAvatar }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-[130px] pointer-events-none"
      />

      <motion.div style={{ opacity: opacityHero }} className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Minimalist Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-300 font-medium tracking-wide">
            Ethical Hacker & Security Specialist
          </span>
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          style={{ y: yAvatar }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl overflow-hidden">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border-2 border-slate-900">
              <img
                src={profileImg}
                alt="Vishesh Ranjan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement;
                  if (fallback) fallback.innerHTML = '<span class="text-4xl">🛡️</span>';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main Title with Parallax */}
        <motion.div style={{ y: yText }} className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              Vishesh Ranjan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-mono font-semibold tracking-wide"
          >
            Offensive Security Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Specializing in penetration testing, red teaming, exploit development, and enterprise infrastructure security.
          </motion.p>
        </motion.div>

        {/* Key Feature Stats Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 pt-6"
        >
          {[
            { icon: Award, label: 'OSCP & CCIE Certified' },
            { icon: Shield, label: '18+ Flagship Tools' },
            { icon: Zap, label: 'Red Team Audits' },
          ].map((chip, i) => (
            <span
              key={i}
              className="minimal-glass px-4 py-2 rounded-xl text-xs md:text-sm font-mono text-slate-300 flex items-center gap-2"
            >
              <chip.icon className="w-3.5 h-3.5 text-cyan-400" />
              {chip.label}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
          >
            <span>Explore Certifications Stream</span>
            <ArrowRight size={16} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 minimal-glass text-slate-300 hover:text-white font-sans font-semibold text-sm rounded-xl transition-all duration-300"
          >
            <span>View Projects</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Down Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <ChevronDown size={24} className="text-slate-500 hover:text-cyan-400 transition-colors" />
      </motion.div>
    </section>
  );
}