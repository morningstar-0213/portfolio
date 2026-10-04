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

      {/* Top Left Rotating Spiral Galaxy */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] opacity-35 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.45) 0%, rgba(0,255,136,0.25) 30%, rgba(2,44,18,0.1) 60%, transparent 75%)',
          filter: 'blur(30px)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Mid Right Rotating Spiral Galaxy (as seen in reference image) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[35%] -right-28 w-[600px] h-[600px] opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(204,255,0,0.5) 20%, rgba(0,255,136,0.3) 45%, rgba(0,40,15,0.1) 65%, transparent 80%)',
          filter: 'blur(35px)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Lower Left Glowing Galaxy Core */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[70%] -left-32 w-[550px] h-[550px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(204,255,0,0.5) 0%, rgba(0,255,136,0.3) 35%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle organic noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
