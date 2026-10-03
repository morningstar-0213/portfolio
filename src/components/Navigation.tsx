import { motion } from 'framer-motion';
import { Shield, Terminal, Briefcase, Mail, Award, Menu, X, Twitter, Send, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { icon: Award, label: 'Certs', id: 'journey' },
    { icon: Shield, label: 'Expertise', id: 'expertise' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: Terminal, label: 'Tools', id: 'games' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-4xl mx-auto rounded-full px-4 py-2 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-slate-800 shadow-2xl shadow-black/50'
            : 'bg-slate-900/60 backdrop-blur-md border-slate-800/60'
        }`}
      >
        {/* Compact Brand */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-sans font-semibold text-xs md:text-sm text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            Vishesh R. <span className="text-[10px] font-mono text-emerald-400 font-normal ml-1">/ Ethical Hacker</span>
          </span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-xs font-sans text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Icon className="w-3 h-3 text-emerald-400" />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        {/* Social Quick Links (Twitter, IG, Telegram) - NO GITHUB */}
        <div className="hidden md:flex items-center gap-3 border-l border-slate-800 pl-4">
          <a
            href="https://x.com/MORNINGSTAR0213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
            title="Twitter / X (@MORNINGSTAR0213)"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com/morningstar0213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-pink-400 transition-colors p-1"
            title="Instagram (@morningstar0213)"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://t.me/morningstar_0213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors p-1"
            title="Telegram (@morningstar_0213)"
          >
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 max-w-4xl mx-auto rounded-2xl bg-slate-950/95 border border-slate-800 p-4 backdrop-blur-2xl shadow-2xl space-y-3"
        >
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="w-full text-left px-3 py-2 rounded-xl text-xs font-sans text-slate-300 hover:bg-slate-900 hover:text-white flex items-center gap-2"
            >
              <Icon className="w-4 h-4 text-emerald-400" />
              <span>{label}</span>
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-around">
            <a
              href="https://x.com/MORNINGSTAR0213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 flex items-center gap-1"
            >
              <Twitter className="w-3.5 h-3.5" /> @MORNINGSTAR0213
            </a>
            <a
              href="https://instagram.com/morningstar0213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-pink-400 flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5" /> @morningstar0213
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}