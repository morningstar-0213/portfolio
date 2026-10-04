import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, X, Sparkles, Eye, Check } from 'lucide-react';
import { useTree } from '../context/TreeContext';

export function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const {
    animationEnabled,
    setAnimationEnabled,
    branchDensity,
    setBranchDensity,
    prefersReducedMotion,
  } = useTree();

  return (
    <>
      {/* Floating Toggle Button (Top Right fixed) */}
      <div className="fixed top-3.5 right-14 md:right-6 z-50">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all duration-200 backdrop-blur-md ${
            open
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
              : 'bg-[#061510]/80 border-emerald-500/30 text-emerald-400/80 hover:text-emerald-300 hover:border-emerald-400/60'
          }`}
          aria-label="Tree Configuration & Settings"
          title="Tree Configuration"
        >
          <Sliders size={14} className={animationEnabled ? 'animate-spin-slow' : ''} />
          <span className="hidden sm:inline font-mono-display text-[10px] tracking-wider uppercase font-semibold">
            Tree HUD
          </span>
        </button>
      </div>

      {/* Settings Modal Drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="card w-full max-w-sm rounded-3xl p-6 bg-[#040e0b]/95 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.25)] relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-emerald-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Sparkles size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Yggdrasil HUD Settings</h3>
                    <p className="text-[10px] font-mono-display text-emerald-400/70">Temporal Loom Preferences</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg border border-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Setting 1: Temporal Animation Toggle */}
              <div className="flex items-center justify-between py-3 border-b border-emerald-500/10">
                <div>
                  <div className="text-sm font-semibold text-white">Temporal Flow</div>
                  <div className="text-xs text-white/45">Animate branches &amp; timeline particles</div>
                </div>
                <button
                  onClick={() => setAnimationEnabled(!animationEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    animationEnabled ? 'bg-emerald-500' : 'bg-emerald-950 border border-emerald-500/30'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      animationEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Setting 2: Branch Density */}
              <div className="py-3 border-b border-emerald-500/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold text-white">Branch Density</div>
                  <span className="font-mono-display text-[10px] uppercase text-emerald-400">
                    {branchDensity}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {(['low', 'medium', 'high'] as const).map((density) => (
                    <button
                      key={density}
                      onClick={() => setBranchDensity(density)}
                      className={`py-1.5 rounded-xl font-mono-display text-xs capitalize transition-all border ${
                        branchDensity === density
                          ? 'bg-emerald-500/25 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                          : 'bg-emerald-950/30 border-emerald-500/20 text-white/40 hover:text-white/80'
                      }`}
                    >
                      {density}
                    </button>
                  ))}
                </div>
              </div>

              {/* Setting 3: System Reduced Motion Status */}
              <div className="flex items-center gap-2 pt-3 text-[11px] font-mono-display text-white/40">
                <Eye size={12} className="text-emerald-400/60" />
                <span>
                  Reduced Motion: {prefersReducedMotion ? 'Active (OS)' : 'Disabled (OS)'}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full py-2.5 rounded-xl font-semibold text-xs text-black bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-md shadow-emerald-500/25"
              >
                Apply &amp; Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
