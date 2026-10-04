import React, { useEffect, useRef } from 'react';

interface BranchTarget {
  id: string;
  side: 'left' | 'right';
  x: number;
  worldY: number;
  worldTrunkY: number;
}

export function CentralTimelineTree({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetsRef = useRef<BranchTarget[]>([]);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // ── Track Mouse for Organic Tree Parallax Sway ──
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      mousePos.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // ── Measure Card Positions Relative to Container (Zero Re-renders, No Scroll Lag) ──
  useEffect(() => {
    const updateCardPositions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + containerRect.top;

      const cardElements = containerRef.current.querySelectorAll<HTMLElement>('[data-tree-branch]');
      const list: BranchTarget[] = [];
      const isMobile = window.innerWidth < 768;

      cardElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;

        const side = (el.getAttribute('data-tree-branch') as 'left' | 'right') || (index % 2 === 0 ? 'left' : 'right');

        // Absolute world coordinates inside container
        const elWorldTop = window.scrollY + rect.top - containerTop;
        const cardX = side === 'left'
          ? rect.right - containerRect.left
          : rect.left - containerRect.left;

        const cardWorldY = elWorldTop + Math.min(85, Math.max(30, rect.height / 2));
        const trunkWorldY = cardWorldY + (isMobile ? 22 : 38);

        list.push({
          id: el.id || `card-${index}`,
          side,
          x: cardX,
          worldY: cardWorldY,
          worldTrunkY: trunkWorldY,
        });
      });

      targetsRef.current = list;
    };

    updateCardPositions();

    // Listen only to resize and DOM mutations — NEVER run DOM measurements on scroll!
    window.addEventListener('resize', updateCardPositions, { passive: true });

    const observer = new MutationObserver(() => updateCardPositions());
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    // Small delay update to capture any layout settlement
    const timer = setTimeout(updateCardPositions, 200);

    return () => {
      window.removeEventListener('resize', updateCardPositions);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [containerRef]);

  // ── Master High-Performance Canvas Tree Animation Loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // 180 Floating Cosmic Stardust Embers (0.05ms execution, zero WebGL overhead)
    const particleCount = 180;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 0.7 + Math.random() * 2.0,
      speed: 0.0006 + Math.random() * 0.0012,
      color: Math.random() > 0.6 ? '#ffffff' : Math.random() > 0.3 ? '#ccff00' : '#00ff88',
      alpha: 0.2 + Math.random() * 0.5,
    }));

    const render = () => {
      time += 0.028;

      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Keep fixed viewport canvas resolution exact (eliminates 16-megapixel canvas lag)
      if (canvas.width !== viewportWidth || canvas.height !== viewportHeight) {
        canvas.width = viewportWidth;
        canvas.height = viewportHeight;
      }

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      // Draw floating cosmic stardust embers across the full screen
      for (let p = 0; p < particleCount; p++) {
        const pt = particles[p];
        pt.y -= pt.speed;
        if (pt.y < 0) {
          pt.y = 1;
          pt.x = Math.random();
        }
        const px = pt.x * viewportWidth;
        const py = pt.y * viewportHeight;

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha;
        ctx.beginPath();
        ctx.arc(px, py, pt.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      if (!containerRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      const totalHeight = containerRef.current.clientHeight;
      const scrollY = window.scrollY;
      const isMobile = viewportWidth < 768;
      const baseX = viewportWidth / 2;

      // ── HELPER: Trunk Centerline (Organic S-Curve, Never Straight, Always Centered) ──
      const getTrunkCenter = (worldY: number) => {
        const swayScale = isMobile ? 0.45 : 1.0;
        const primarySway = Math.sin(worldY * 0.00075) * (48 * swayScale);
        const breathingSway = Math.cos(worldY * 0.002 + time * 0.6) * (16 * swayScale);
        const mouseParallax = mousePos.current.x * (18 * swayScale) * (1 - Math.abs(worldY / totalHeight - 0.5));
        return baseX + primarySway + breathingSway + mouseParallax;
      };

      // ── HELPER: Trunk Width Profile (Broad Canopy Top & Flared Roots Base) ──
      const getTrunkWidth = (worldY: number) => {
        const t = Math.max(0, Math.min(1, worldY / Math.max(1, totalHeight)));
        const baseWidth = isMobile ? 30 : 56;

        if (t < 0.14) {
          const crownFactor = Math.pow((0.14 - t) / 0.14, 1.6);
          return baseWidth + crownFactor * (isMobile ? 95 : 230);
        }
        if (t > 0.86) {
          const rootFactor = Math.pow((t - 0.86) / 0.14, 1.8);
          return baseWidth + rootFactor * (isMobile ? 75 : 170);
        }
        return baseWidth + Math.sin(t * Math.PI * 5 + time) * (isMobile ? 4 : 9);
      };

      // ── HELPER: Strand Point in World Coordinates ──
      const strandCount = 8;
      const getStrandPoint = (s: number, worldY: number) => {
        const cx = getTrunkCenter(worldY);
        const w = getTrunkWidth(worldY);
        const phi = (s / strandCount) * Math.PI * 2;
        const twistFreq = 0.0034;
        const offsetX = Math.sin(worldY * twistFreq + phi + time * 0.75) * (w * 0.44);
        const depthZ = Math.cos(worldY * twistFreq + phi + time * 0.75);
        return { x: cx + offsetX, z: depthZ };
      };

      // ── 1. SPREADING TOP CANOPY BOUGHS (Mobile & Desktop) ──
      if (scrollY < 900) {
        const crownBoughCount = isMobile ? 6 : 10;
        const crownStartY = Math.min(650, totalHeight * 0.11);
        const trunkCenterAtCrown = getTrunkCenter(crownStartY);

        for (let b = 0; b < crownBoughCount; b++) {
          const isLeft = b % 2 === 0;
          const bIndex = Math.floor(b / 2);
          const reachOffset = isMobile ? (65 + bIndex * 28) : (140 + bIndex * 70);
          const reachX = isLeft
            ? trunkCenterAtCrown - reachOffset - Math.sin(time + b) * (isMobile ? 10 : 20)
            : trunkCenterAtCrown + reachOffset + Math.sin(time + b) * (isMobile ? 10 : 20);
          const reachWorldY = 30 + bIndex * (isMobile ? 60 : 85) + Math.cos(time * 0.8 + b) * 15;

          const startX = trunkCenterAtCrown + (isLeft ? (isMobile ? -14 : -30) : (isMobile ? 14 : 30));
          const startWorldY = crownStartY - bIndex * (isMobile ? 22 : 35);

          const startScreenY = startWorldY - scrollY;
          const reachScreenY = reachWorldY - scrollY;

          // Skip if completely offscreen
          if (startScreenY > viewportHeight + 100 && reachScreenY > viewportHeight + 100) continue;

          const cp1X = startX + (isLeft ? (isMobile ? -45 : -90) : (isMobile ? 45 : 90));
          const cp1Y = startScreenY - 80;
          const cp2X = reachX + (isLeft ? 40 : -40);
          const cp2Y = reachScreenY + 50;

          // Layer A: Wide emerald canopy bloom
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 255, 136, 0.22)';
          ctx.lineWidth = 14 - bIndex * 2;
          ctx.lineCap = 'round';
          ctx.moveTo(startX, startScreenY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, reachX, reachScreenY);
          ctx.stroke();

          // Layer B: Luminous Lime Bough Limb
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(204, 255, 0, 0.85)';
          ctx.lineWidth = 4 - bIndex * 0.5;
          ctx.moveTo(startX, startScreenY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, reachX, reachScreenY);
          ctx.stroke();

          // Layer C: White-hot inner fiber
          ctx.beginPath();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.4;
          ctx.moveTo(startX, startScreenY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, reachX, reachScreenY);
          ctx.stroke();

          // Leaf blossom nodes
          for (let leaf = 1; leaf <= 3; leaf++) {
            const lt = leaf / 4;
            const lx = Math.pow(1 - lt, 3) * startX + 3 * Math.pow(1 - lt, 2) * lt * cp1X + 3 * (1 - lt) * Math.pow(lt, 2) * cp2X + Math.pow(lt, 3) * reachX;
            const ly = Math.pow(1 - lt, 3) * startScreenY + 3 * Math.pow(1 - lt, 2) * lt * cp1Y + 3 * (1 - lt) * Math.pow(lt, 2) * cp2Y + Math.pow(lt, 3) * reachScreenY;

            const leafPulse = 1 + Math.sin(time * 3 + b * 2 + leaf) * 0.35;
            // Outer halo
            ctx.beginPath();
            ctx.arc(lx, ly, 6 * leafPulse, 0, Math.PI * 2);
            ctx.fillStyle = leaf % 2 === 0 ? 'rgba(204, 255, 0, 0.3)' : 'rgba(0, 255, 136, 0.3)';
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(lx, ly, 2.5 * leafPulse, 0, Math.PI * 2);
            ctx.fillStyle = leaf % 2 === 0 ? '#ccff00' : '#00ff88';
            ctx.fill();
          }

          // Terminal Canopy Bud
          const budPulse = 1 + Math.sin(time * 4 + b) * 0.3;
          ctx.beginPath();
          ctx.arc(reachX, reachScreenY, 8 * budPulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(204, 255, 0, 0.35)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(reachX, reachScreenY, 3.5 * budPulse, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      }

      // ── 2. ROOT BUTTRESSES (Render only if visible near base) ──
      const rootStartY = Math.max(totalHeight - 650, totalHeight * 0.88);
      if (scrollY + viewportHeight > rootStartY - 100) {
        const rootCount = isMobile ? 3 : 6;
        const trunkCenterAtRoots = getTrunkCenter(rootStartY);

        for (let r = 0; r < rootCount; r++) {
          const isLeft = r % 2 === 0;
          const rIndex = Math.floor(r / 2);
          const spreadX = isLeft
            ? trunkCenterAtRoots - (isMobile ? 25 : 80) - rIndex * (isMobile ? 18 : 60)
            : trunkCenterAtRoots + (isMobile ? 25 : 80) + rIndex * (isMobile ? 18 : 60);
          const endWorldY = totalHeight - 10 + rIndex * 8;

          const startX = trunkCenterAtRoots + (isLeft ? -15 : 15);
          const startScreenY = rootStartY - scrollY;
          const endScreenY = endWorldY - scrollY;

          const cp1X = startX + (isLeft ? -40 : 40);
          const cp1Y = startScreenY + 120;
          const cp2X = spreadX;
          const cp2Y = endScreenY - 60;

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 255, 136, 0.3)';
          ctx.lineWidth = isMobile ? 6 : 12 - rIndex * 2;
          ctx.lineCap = 'round';
          ctx.moveTo(startX, startScreenY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, spreadX, endScreenY);
          ctx.stroke();

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(204, 255, 0, 0.7)';
          ctx.lineWidth = isMobile ? 2 : 3.5;
          ctx.moveTo(startX, startScreenY);
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, spreadX, endScreenY);
          ctx.stroke();
        }
      }

      // ── 3. HIGH-SPEED VIEWPORT-CULLED BRAIDED TRUNK (8 Strands) ──
      // Culling: Only draw the segment of the trunk currently inside the screen + 120px margin!
      const stepY = 26;
      const startStep = Math.max(0, Math.floor((scrollY - 120) / stepY));
      const endStep = Math.min(Math.ceil(totalHeight / stepY), Math.ceil((scrollY + viewportHeight + 120) / stepY));

      const passes = ['back', 'front'];

      passes.forEach((pass) => {
        for (let s = 0; s < strandCount; s++) {
          const testZ = Math.cos(time * 0.75 + (s / strandCount) * Math.PI * 2);
          if (pass === 'back' && testZ > 0.25) continue;
          if (pass === 'front' && testZ <= 0.25) continue;

          ctx.beginPath();
          let started = false;

          for (let step = startStep; step <= endStep; step++) {
            const worldY = step * stepY;
            const screenY = worldY - scrollY;
            const { x } = getStrandPoint(s, worldY);

            if (!started) {
              ctx.moveTo(x, screenY);
              started = true;
            } else {
              ctx.lineTo(x, screenY);
            }
          }

          if (pass === 'back') {
            ctx.strokeStyle = s % 2 === 0 ? 'rgba(0, 255, 136, 0.45)' : 'rgba(4, 66, 43, 0.75)';
            ctx.lineWidth = isMobile ? 2.5 : 4.5;
            ctx.lineCap = 'round';
            ctx.stroke();
          } else {
            // Foreground Outer Glow
            ctx.strokeStyle = s % 2 === 0 ? 'rgba(204, 255, 0, 0.85)' : 'rgba(0, 255, 136, 0.8)';
            ctx.lineWidth = isMobile ? 3.5 : 5.8;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Core White-Hot Laser Filament
            ctx.beginPath();
            started = false;
            for (let step = startStep; step <= endStep; step++) {
              const worldY = step * stepY;
              const screenY = worldY - scrollY;
              const { x } = getStrandPoint(s, worldY);
              if (!started) {
                ctx.moveTo(x, screenY);
                started = true;
              } else {
                ctx.lineTo(x, screenY);
              }
            }
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = isMobile ? 1.2 : 1.8;
            ctx.stroke();
          }
        }
      });

      // ── 4. CROSS-WEAVING VINES (Viewport-Culled) ──
      const vineSpacing = isMobile ? 240 : 180;
      const firstVine = Math.max(0, Math.floor((scrollY - 100) / vineSpacing));
      const lastVine = Math.ceil((scrollY + viewportHeight + 100) / vineSpacing);

      for (let v = firstVine; v <= lastVine; v++) {
        const vy = v * vineSpacing + 90;
        if (vy > totalHeight) break;
        const screenY = vy - scrollY;
        const w = getTrunkWidth(vy);
        const cx = getTrunkCenter(vy);
        const vinePhase = time * 1.2 + v;

        ctx.beginPath();
        const vStart = cx - w * 0.42;
        const vEnd = cx + w * 0.42;
        const cpY = screenY + Math.sin(vinePhase) * 16;

        ctx.moveTo(vStart, screenY - 6);
        ctx.quadraticCurveTo(cx, cpY, vEnd, screenY + 6);
        ctx.strokeStyle = 'rgba(204, 255, 0, 0.45)';
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      // ── 5. VIEWPORT-CULLED ORGANIC BRANCHES (Only render visible cards!) ──
      const targets = targetsRef.current;
      const targetCount = targets.length;

      for (let idx = 0; idx < targetCount; idx++) {
        const target = targets[idx];
        const screenCardY = target.worldY - scrollY;
        const screenTrunkY = target.worldTrunkY - scrollY;

        // Skip any card that is not in the active viewport (Huge CPU & GPU speedup)
        if (screenCardY < -120 || screenCardY > viewportHeight + 120) continue;

        const endX = target.x;
        const endY = screenCardY;

        // Find outermost braided strand on target side at target.worldTrunkY
        let startX: number;
        if (target.side === 'left') {
          let minX = Infinity;
          for (let s = 0; s < strandCount; s++) {
            const pt = getStrandPoint(s, target.worldTrunkY);
            if (pt.x < minX) minX = pt.x;
          }
          startX = minX;
        } else {
          let maxX = -Infinity;
          for (let s = 0; s < strandCount; s++) {
            const pt = getStrandPoint(s, target.worldTrunkY);
            if (pt.x > maxX) maxX = pt.x;
          }
          startX = maxX;
        }

        const startY = screenTrunkY;
        const dx = endX - startX;
        const dir = target.side === 'left' ? -1 : 1;

        const cp1X = startX + dir * Math.abs(dx) * 0.28;
        const cp1Y = startY - 32;
        const cp2X = endX - dir * Math.abs(dx) * 0.24;
        const cp2Y = endY + 14;

        // Layer 1: Ambient Emerald Aura
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.32)';
        ctx.lineWidth = isMobile ? 10 : 16;
        ctx.lineCap = 'round';
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();

        // Layer 2: Main Electric Lime Branch Body
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(204, 255, 0, 0.9)';
        ctx.lineWidth = isMobile ? 3.5 : 5.5;
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();

        // Layer 3: White-Hot Energy Core
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = isMobile ? 1.4 : 2.0;
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();

        // Sub-twigs & Tendrils
        const tendrilCount = isMobile ? 2 : 4;
        for (let t = 1; t <= tendrilCount; t++) {
          const u = t / (tendrilCount + 1);
          const buX = Math.pow(1 - u, 3) * startX + 3 * Math.pow(1 - u, 2) * u * cp1X + 3 * (1 - u) * Math.pow(u, 2) * cp2X + Math.pow(u, 3) * endX;
          const buY = Math.pow(1 - u, 3) * startY + 3 * Math.pow(1 - u, 2) * u * cp1Y + 3 * (1 - u) * Math.pow(u, 2) * cp2Y + Math.pow(u, 3) * endY;

          const tendrilLen = (isMobile ? 10 : 18) + (t % 2) * 12;
          const tendrilAngle = (target.side === 'left' ? -1 : 1) * (0.35 + (t % 2) * 0.4);
          const tx = buX + Math.cos(tendrilAngle) * tendrilLen;
          const ty = buY - Math.abs(Math.sin(tendrilAngle)) * tendrilLen;

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(204, 255, 0, 0.75)';
          ctx.lineWidth = 1.5;
          ctx.moveTo(buX, buY);
          ctx.lineTo(tx, ty);
          ctx.stroke();

          // Leaf bud without expensive shadowBlur
          const budPulse = 1 + Math.sin(time * 4 + idx + t) * 0.3;
          ctx.beginPath();
          ctx.arc(tx, ty, 4.5 * budPulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 255, 136, 0.35)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(tx, ty, 2.2 * budPulse, 0, Math.PI * 2);
          ctx.fillStyle = '#ccff00';
          ctx.fill();
        }

        // Luminous Magnetic Docking Node at Card Edge
        const pulse = 1 + Math.sin(time * 4.5 + idx) * 0.3;

        // Outer pulsing halo
        ctx.beginPath();
        ctx.arc(endX, endY, (isMobile ? 12 : 18) * pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 136, 0.15)';
        ctx.fill();

        // Pulsing ring
        ctx.beginPath();
        ctx.arc(endX, endY, (isMobile ? 7 : 11) * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(endX, endY, (isMobile ? 5 : 7) * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#ccff00';
        ctx.fill();

        // White-hot center
        ctx.beginPath();
        ctx.arc(endX, endY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // 2 Continuous Traveling Sparks
        [0, 0.5].forEach((offset) => {
          const sparkT = (time * 0.85 + idx * 0.24 + offset) % 1;
          const sx = Math.pow(1 - sparkT, 3) * startX + 3 * Math.pow(1 - sparkT, 2) * sparkT * cp1X + 3 * (1 - sparkT) * Math.pow(sparkT, 2) * cp2X + Math.pow(sparkT, 3) * endX;
          const sy = Math.pow(1 - sparkT, 3) * startY + 3 * Math.pow(1 - sparkT, 2) * sparkT * cp1Y + 3 * (1 - sparkT) * Math.pow(sparkT, 2) * cp2Y + Math.pow(sparkT, 3) * endY;

          // Spark aura
          ctx.beginPath();
          ctx.arc(sx, sy, 7, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(204, 255, 0, 0.4)';
          ctx.fill();

          // Spark core
          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
