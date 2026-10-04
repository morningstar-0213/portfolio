import React from 'react';
import { motion } from 'framer-motion';
import { X, Shield, Instagram } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="loki-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-[#00ff88]/40 shadow-[0_0_60px_rgba(0,255,136,0.25)]"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="font-mono-display text-xs text-[#ccff00] tracking-widest uppercase mb-1">
              {project.category}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {project.title}
            </h3>
            {project.tagline && (
              <div className="font-mono-display text-sm text-[#86efac] italic mt-1">
                &ldquo;{project.tagline}&rdquo;
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Private Repo Banner */}
        <a
          href="https://instagram.com/morningstar0213"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 hover:border-[#ccff00]/60 mb-6 group transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
            <Instagram size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono-display text-[10px] text-[#00ff88] tracking-widest uppercase">
              Private Repository Access
            </div>
            <div className="text-xs sm:text-sm text-slate-200 group-hover:text-white">
              DM on Instagram <span className="font-mono-display text-[#ccff00] font-bold">@morningstar0213</span> to request access to the source code.
            </div>
          </div>
        </a>

        {/* Highlights */}
        <h4 className="font-mono-display text-xs tracking-widest text-[#ccff00] uppercase mb-3 flex items-center gap-1.5">
          <Shield size={14} className="text-[#00ff88]" /> Key Technical Capabilities
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 flex items-start gap-2"
            >
              <span className="text-[#00ff88] shrink-0 mt-0.5">&#9656;</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <h4 className="font-mono-display text-xs tracking-widest text-[#ccff00] uppercase mb-3">
          Technologies &amp; Protocols
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono-display text-xs px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[#86efac] shadow-[0_0_10px_rgba(0,255,136,0.15)]"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
