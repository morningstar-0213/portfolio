import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTree } from '../context/TreeContext';
import { useSectionRegistry } from '../context/SectionRegistry';
import { generateTree, BranchSegment } from '../utils/lSystem';

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  alpha: number;
  seed: number;
}

export function YggdrasilTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    scrollYProgress,
    prefersReducedMotion,
    animationEnabled,
    branchDensity,
    updateRootHubPos,
  } = useTree();
  const { activeSection } = useSectionRegistry();

  const [dimensions, setDimensions] = useState({
    width: 70,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Calculate branch cap based on screen width and user density preference
  const maxBranches = useMemo(() => {
    const isMobile = dimensions.width < 768;
    const base = isMobile ? 150 : 350;
    if (branchDensity === 'low') return Math.floor(base * 0.4);
    if (branchDensity === 'medium') return Math.floor(base * 0.7);
    return base;
  }, [dimensions.width, branchDensity]);

  // Generate fractal tree segments
  const segments = useMemo(() => {
    return generateTree(5, 20, 3.5, 12345, maxBranches);
  }, [maxBranches]);

  // Compute Root Hub Screen Coordinate
  const hubPos = useMemo(() => {
    const x = 35;
    // Hub rests around 40% down the viewport, with subtle organic breathing motion
    const y = Math.max(180, dimensions.height * 0.42);
    return { x, y };
  }, [dimensions.height]);

  // Sync Root Hub Pos to TreeContext
  useEffect(() => {
    updateRootHubPos(hubPos);
  }, [hubPos, updateRootHubPos]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: 70,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Section rail nodes mapping
  const railNodes = useMemo(() => [
    { id: 'home', label: 'Home', progress: 0.05, y: dimensions.height * 0.12 },
    { id: 'journey', label: 'Certs', progress: 0.28, y: dimensions.height * 0.32 },
    { id: 'expertise', label: 'Skills', progress: 0.52, y: dimensions.height * 0.54 },
    { id: 'projects', label: 'Projects', progress: 0.75, y: dimensions.height * 0.74 },
    { id: 'contact', label: 'Contact', progress: 0.95, y: dimensions.height * 0.90 },
  ], [dimensions.height]);

  // Canvas rendering loop: braided world-tree trunk & timeline strands
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Ambient timeline particles
    const particles: Particle[] = Array.from({ length: 24 }, (_, i) => ({
      x: 20 + Math.random() * 30,
      y: Math.random() * dimensions.height,
      speed: 0.4 + Math.random() * 0.8,
      size: 1 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.6,
      seed: i,
    }));

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const anim = animationEnabled && !prefersReducedMotion;
      if (anim) time += 0.02;

      // 1. Draw Braided World-Tree Trunk (3 organic winding spline strands)
      const strands = [
        { color: 'rgba(6, 78, 59, 0.7)', width: 3, offset: 0, amp: 8 },
        { color: 'rgba(16, 185, 129, 0.85)', width: 2, offset: 2.1, amp: 10 },
        { color: 'rgba(52, 211, 153, 0.7)', width: 1.5, offset: 4.2, amp: 7 },
      ];

      strands.forEach((s) => {
        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';

        const step = 20;
        for (let y = 0; y <= dimensions.height; y += step) {
          const sway = anim ? Math.sin(time + y * 0.008 + s.offset) * s.amp : Math.sin(y * 0.008 + s.offset) * s.amp;
          const x = 35 + sway;
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // 2. Draw Recursive Branch Tendrils branching off into space
      ctx.save();
      ctx.translate(35, hubPos.y);

      segments.forEach((seg, idx) => {
        // Subtle organic sway
        const sway = anim ? Math.sin(time * 0.8 + idx * 0.1) * 2 : 0;
        ctx.beginPath();
        const startX = seg.start[0] * 2 + sway;
        const startY = seg.start[1] * -2.2;
        const endX = seg.end[0] * 2 + sway;
        const endY = seg.end[1] * -2.2;

        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);

        const depthAlpha = Math.max(0.15, 0.85 - seg.depth * 0.15);
        ctx.strokeStyle = `rgba(16, 185, 129, ${depthAlpha})`;
        ctx.lineWidth = Math.max(0.8, 2.4 - seg.depth * 0.4);
        ctx.stroke();

        // Shimmering leaf nodes at outer tips
        if (seg.depth >= 3 && idx % 3 === 0) {
          ctx.beginPath();
          ctx.arc(endX, endY, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = anim ? `rgba(0, 255, 136, ${0.4 + Math.sin(time * 2 + idx) * 0.3})` : 'rgba(0, 255, 136, 0.6)';
          ctx.fill();
        }
      });
      ctx.restore();

      // 3. Shimmering timeline particles ascending the world-tree
      if (anim) {
        particles.forEach((p) => {
          p.y -= p.speed;
          if (p.y < 0) {
            p.y = dimensions.height;
            p.x = 20 + Math.random() * 30;
          }

          const pulse = Math.sin(time * 3 + p.seed) * 0.2 + 0.8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 255, 136, ${p.alpha * pulse})`;
          ctx.shadowColor = '#00ff88';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // 4. Comet indicator following user's scroll
      const cometY = scrollYProgress * (dimensions.height - 40) + 20;
      ctx.beginPath();
      ctx.arc(35, cometY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [dimensions, segments, hubPos, scrollYProgress, animationEnabled, prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed left-0 top-0 h-full z-40 hidden md:flex flex-col items-center pointer-events-none select-none"
      style={{ width: '70px' }}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Central Root Hub Node (Interactive Throne / Loom Center) */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
        style={{ left: `${hubPos.x}px`, top: `${hubPos.y}px` }}
        onClick={() => scrollToSection('home')}
        title="Yggdrasil Root Hub (Temporal Loom)"
      >
        {/* Shimmering outer halo */}
        <motion.div
          className="absolute -inset-3 rounded-full border border-emerald-400/40"
          animate={animationEnabled && !prefersReducedMotion ? {
            scale: [1, 1.4, 1],
            opacity: [0.6, 0.1, 0.6],
          } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Emerald Core crystal */}
        <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-400 to-teal-200 shadow-[0_0_20px_#00ff88] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        </div>

        {/* Tooltip on hover */}
        <div className="absolute left-9 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#041510]/95 border border-emerald-500/40 text-[10px] font-mono-display text-emerald-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Root Hub · Yggdrasil
        </div>
      </div>

      {/* Interactive Realm Anchor Nodes along the Rail */}
      {railNodes.map((node) => {
        const isActive = activeSection === node.id;
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
            style={{ left: '35px', top: `${node.y}px` }}
            onClick={() => scrollToSection(node.id)}
          >
            {/* Active pulsing ring */}
            {isActive && (
              <motion.div
                className="absolute -inset-2 rounded-full border border-emerald-400"
                animate={animationEnabled && !prefersReducedMotion ? {
                  scale: [1, 1.6, 1],
                  opacity: [0.8, 0, 0.8],
                } : undefined}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Dot Node */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                isActive
                  ? 'bg-emerald-400 shadow-[0_0_12px_#00ff88] scale-125'
                  : 'bg-emerald-950 border border-emerald-500/50 group-hover:border-emerald-300 group-hover:bg-emerald-800'
              }`}
            >
              {isActive && <div className="w-1 h-1 rounded-full bg-white" />}
            </div>

            {/* Label Flyout */}
            <div className="absolute left-7 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-[#041510]/90 border border-emerald-500/30 text-[9px] font-mono-display text-emerald-300 uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {node.label}
            </div>
          </div>
        );
      })}

      {/* Bottom Timeline Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-display text-[9px] text-emerald-400/50 tracking-widest select-none"
        style={{ writingMode: 'vertical-rl' }}
      >
        YGGDRASIL
      </div>
    </div>
  );
}
