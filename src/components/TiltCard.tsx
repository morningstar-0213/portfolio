import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  'data-tree-branch'?: 'left' | 'right';
  onClick?: () => void;
}

export function TiltCard({
  children,
  className = '',
  id,
  'data-tree-branch': treeBranch,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotX = (0.5 - y) * 16; // tilt up/down
    const rotY = (x - 0.5) * 16; // tilt left/right

    setRotate({ x: rotX, y: rotY });
    setGlare({ x: x * 100, y: y * 100, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      data-tree-branch={treeBranch}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 220, mass: 0.6 }}
      className={`relative overflow-hidden loki-card rounded-3xl p-4 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.8)] border-[#00ff88]/30 hover:border-[#ccff00]/60 ${className}`}
    >
      {/* Dynamic 3D Glare Reflection */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(204,255,0,0.4), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
