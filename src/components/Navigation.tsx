import { motion } from 'framer-motion';
import { Shield, Terminal, Briefcase, Mail, Award, Menu, X, Twitter, Send, Instagram, Activity } from 'lucide-react';
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
    { icon: Award, label: 'Certifications', id: 'journey' },
    { icon: Shield, label: 'Expertise', id: 'expertise' },
    { icon: Briefcase, label: 'Projects', id: 'projects' },
    { icon: Terminal, label: 'Terminal', id: 'terminal-section' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-5xl mx-auto rounded-2xl px-4 py-2.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-2xl border-emerald-500/30 shadow-2xl shadow-emerald-950/30'
            : 'bg-slate-900/70 backdrop-blur-xl border-slate-800'
        }`}
      >
        {/* Brand / Operator Identity */}
        <div
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 border border-emerald-500/40 group-hover:border-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs md:text-sm font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
              VISHESH RANJAN
            </span>
            <span className="font-mono text-[9px] text-emerald-400 flex items-center gap-1 font-semibold">
              <Activity className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
              ETHICAL HACKER
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group py-1"
            >
              <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              <span className="group-hover:text-emerald-300">{label}</span>
            </button>
          ))}
        </nav>

        {/* Social Launchers (Twitter, IG, Telegram) - NO GITHUB */}
        <div className="hidden md:flex items-center gap-3 border-l border-slate-800 pl-4">
          <a
            href="https://x.com/MORNINGSTAR0213"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all"
            title="Twitter / X (@MORNINGSTAR0213)"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com/morningstar0213"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-400 text-slate-400 hover:text-pink-400 transition-all"
            title="Instagram (@morningstar0213)"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://t.me/morningstar_0213"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-all"
            title="Telegram (@morningstar_0213)"
          >
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 max-w-5xl mx-auto rounded-2xl bg-slate-950/95 border border-emerald-500/30 p-4 backdrop-blur-2xl shadow-2xl space-y-3"
        >
          {navItems.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:bg-slate-900 hover:text-emerald-300 flex items-center gap-2.5"
            >
              <Icon className="w-4 h-4 text-emerald-400" />
              <span>{label}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex justify-around">
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