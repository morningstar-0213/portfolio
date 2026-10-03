import { motion } from 'framer-motion';
import { Shield, Terminal, Briefcase, Mail, Award, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-cyan-500/40 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm md:text-base text-white tracking-wide group-hover:text-cyan-300 transition-colors">
              Vishesh Ranjan
            </span>
            <span className="font-mono text-[10px] text-cyan-400 font-semibold tracking-widest uppercase">
              Ethical Hacker
            </span>
          </div>
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6 md:gap-8">
          {[
            { icon: Award, label: 'Certifications', id: 'journey' },
            { icon: Shield, label: 'Expertise', id: 'expertise' },
            { icon: Briefcase, label: 'Projects', id: 'projects' },
            { icon: Terminal, label: 'Tools', id: 'games' },
            { icon: Mail, label: 'Contact', id: 'contact' },
          ].map(({ icon: Icon, label, id }) => (
            <motion.button
              key={id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-2 text-slate-400 hover:text-white font-sans text-xs md:text-sm font-medium transition-all duration-300 relative py-1"
            >
              <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              <span className="hidden md:inline">{label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}