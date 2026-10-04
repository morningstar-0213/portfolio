import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

const links = [
  { id: '01', key: 'home', label: 'Core', href: '#home' },
  { id: '02', key: 'certs', label: 'Certs', href: '#certs' },
  { id: '03', key: 'expertise', label: 'Skills', href: '#expertise' },
  { id: '04', key: 'projects', label: 'Projects', href: '#projects' },
  { id: '05', key: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 sm:px-12 transition-all duration-300 ${
        scrolled
          ? 'bg-[#010c05]/90 backdrop-blur-xl border-b border-[#00ff88]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      {/* Brand */}
      <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 text-left group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ccff00] to-[#00ff88] p-[1px] shadow-[0_0_15px_rgba(204,255,0,0.4)] group-hover:scale-105 transition-transform">
          <div className="w-full h-full bg-[#010c05] rounded-[7px] flex items-center justify-center">
            <span className="font-mono-display font-bold text-xs text-[#ccff00]">VR</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-mono-display font-bold text-xs text-white tracking-wider group-hover:text-[#ccff00] transition-colors">
            <span>VISHESH RANJAN</span>
            <ShieldCheck size={13} className="text-[#00ff88]" />
          </div>
          <div className="font-mono-display text-[9px] text-[#00ff88]/70 tracking-widest uppercase">
            Offensive Security &amp; Red Team
          </div>
        </div>
      </button>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map((l) => (
          <button
            key={l.key}
            onClick={() => scrollTo(l.href)}
            className="font-mono-display text-xs text-slate-300 hover:text-[#ccff00] transition-colors flex items-center gap-1.5 py-1 tracking-widest uppercase"
          >
            <span className="text-[10px] text-[#00ff88]/60">{l.id}</span>
            <span>{l.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        className="md:hidden p-2 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-[#010c05]/98 backdrop-blur-2xl flex flex-col p-6 md:hidden border-b border-[#00ff88]/20 z-50">
          <nav className="flex flex-col divide-y divide-emerald-500/10">
            {links.map((l) => (
              <button
                key={l.key}
                onClick={() => scrollTo(l.href)}
                className="flex items-center justify-between py-4 text-left font-mono-display"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#00ff88]/60">{l.id}</span>
                  <span className="text-lg text-white font-semibold">{l.label}</span>
                </div>
                <span className="text-[#ccff00]">&rarr;</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
