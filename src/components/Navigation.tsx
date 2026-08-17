import { motion } from 'framer-motion';
import { Shield, Terminal, Briefcase, Mail, Award } from 'lucide-react';
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
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <div className="relative p-2 rounded-xl bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400/70 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <Shield className="w-5 h-5 text-cyan-400" strokeWidth={2} />
            </motion.div>
          </div>
          <span className="font-mono text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
            Ethical Hacker
          </span>
        </motion.div>

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
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(id)}
              className="group flex items-center gap-2 text-slate-400 hover:text-cyan-300 font-mono text-xs md:text-sm font-semibold transition-all duration-300 relative py-1"
            >
              <Icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              <span className="hidden md:inline">{label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}