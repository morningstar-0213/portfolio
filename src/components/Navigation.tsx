import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSectionRegistry } from '../context/SectionRegistry';

const links = [
  { id: '01', key: 'home', label: 'Home', href: '#home' },
  { id: '02', key: 'journey', label: 'Certifications', href: '#journey' },
  { id: '03', key: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: '04', key: 'projects', label: 'Projects', href: '#projects' },
  { id: '05', key: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useSectionRegistry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function go(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-5 md:px-10 transition-all duration-300
          ${scrolled ? 'bg-[#050810]/85 backdrop-blur-2xl border-b border-emerald-500/15' : ''}`}
      >
        {/* Logo mark */}
        <button onClick={() => go('#home')} className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.35)]">
            <span className="font-mono-display font-bold text-[11px] text-black">VR</span>
          </div>
          <span className="font-mono-display text-[11px] tracking-[0.18em] text-white/60 uppercase group-hover:text-emerald-400 transition-colors">
            Ethical Hacker
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 mr-24">
          {links.map((l) => {
            const isActive = activeSection === l.key;
            return (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`font-mono-display text-[11px] tracking-widest transition-colors flex gap-1.5 items-baseline ${
                  isActive ? 'text-emerald-400 font-bold' : 'text-white/40 hover:text-white/80'
                }`}
              >
                <span className={`text-[9px] ${isActive ? 'text-emerald-400' : 'text-emerald-500/40'}`}>
                  {l.id}
                </span>
                {l.label.toUpperCase()}
              </button>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.22 }}
            className="fixed inset-0 top-14 z-40 bg-[#050810]/98 backdrop-blur-xl flex flex-col"
          >
            <nav className="flex flex-col divide-y divide-emerald-500/10 px-6 pt-4">
              {links.map((l, i) => {
                const isActive = activeSection === l.key;
                return (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => go(l.href)}
                    className="flex items-center justify-between py-5 group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-display text-[10px] text-emerald-400/60">{l.id}</span>
                      <span
                        className={`font-display text-2xl font-semibold transition-colors ${
                          isActive ? 'text-emerald-400' : 'text-white/80 group-hover:text-emerald-400'
                        }`}
                      >
                        {l.label}
                      </span>
                    </div>
                    <span className="text-white/20 group-hover:text-emerald-400 transition-all group-hover:translate-x-1">
                      →
                    </span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}