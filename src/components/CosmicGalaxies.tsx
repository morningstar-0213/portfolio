import React from 'react';
import { motion } from 'framer-motion';

export function CosmicGalaxies() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep cosmic emerald space vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 30%, #031c0c 0%, #011206 50%, #000703 100%)',
        }}
      />

      {/* Top Left Rotating Spiral Galaxy (Naturally soft, zero-cost blur) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.28) 0%, rgba(0,255,136,0.18) 25%, rgba(2,44,18,0.08) 55%, transparent 75%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Mid Right Rotating Spiral Galaxy */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[35%] -right-28 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(204,255,0,0.28) 20%, rgba(0,255,136,0.18) 45%, rgba(0,40,15,0.06) 65%, transparent 80%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Lower Left Glowing Galaxy Core */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[70%] -left-32 w-[550px] h-[550px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.3) 0%, rgba(0,255,136,0.18) 35%, transparent 70%)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
}
