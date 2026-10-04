import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function ThreeCosmicScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // WebGL Renderer with High Performance & Alpha
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 32);

    // Atmospheric Cosmic Lighting
    const ambient = new THREE.AmbientLight(0x02220d, 2.2);
    scene.add(ambient);

    const coreLight = new THREE.PointLight(0xccff00, 3.5, 90);
    coreLight.position.set(0, 0, 10);
    scene.add(coreLight);

    const emeraldLight = new THREE.PointLight(0x00ff88, 3.0, 100);
    emeraldLight.position.set(0, -10, 8);
    scene.add(emeraldLight);

    const cosmicGroup = new THREE.Group();
    scene.add(cosmicGroup);

    // ── 1. REDUCED COSMIC STARDUST EMBERS (80% Reduction, Full Screen Edge-to-Edge) ──
    const particleCount = 320;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount);

    // Wide frustum spread ensures 100% full-screen coverage across all viewport aspect ratios
    const spreadX = 54;
    const spreadY = 46;

    for (let p = 0; p < particleCount; p++) {
      pPositions[p * 3] = (Math.random() - 0.5) * spreadX;
      pPositions[p * 3 + 1] = (Math.random() - 0.5) * spreadY;
      pPositions[p * 3 + 2] = -14 + Math.random() * 24;

      pVelocities[p] = 0.015 + Math.random() * 0.035;

      const rand = Math.random();
      const col = new THREE.Color();
      if (rand > 0.8) {
        col.set(0xffffff); // White-hot stardust
      } else if (rand > 0.45) {
        col.set(0xccff00); // Electric lime
      } else {
        col.set(0x00ff88); // Emerald nebula
      }

      pColors[p * 3] = col.r;
      pColors[p * 3 + 1] = col.g;
      pColors[p * 3 + 2] = col.b;
    }

    const pGeom = new THREE.BufferGeometry();
    const posAttribute = new THREE.BufferAttribute(pPositions, 3);
    pGeom.setAttribute('position', posAttribute);
    pGeom.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeom, pMat);
    cosmicGroup.add(particles);

    // ── 2. RESIZE & MOUSE PARALLAX LISTENER ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Animation Loop
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth subtle mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollRatio = window.scrollY / maxScroll;

      // Subtle, grounded camera glide without wild or erratic movements
      const camTargetY = -2 + scrollRatio * 8 + mouse.y * 0.8;
      const camTargetX = mouse.x * 1.4;
      camera.position.y += (camTargetY - camera.position.y) * 0.05;
      camera.position.x += (camTargetX - camera.position.x) * 0.05;
      camera.lookAt(0, camera.position.y, 0);

      // Particles drifting upward continuously
      const arr = pPositions;
      for (let p = 0; p < particleCount; p++) {
        const yIdx = p * 3 + 1;
        arr[yIdx] += pVelocities[p];
        if (arr[yIdx] > spreadY / 2) {
          arr[yIdx] = -spreadY / 2;
        }
      }
      posAttribute.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <aside
      aria-label="Cosmic Atmosphere Scene"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none opacity-85 transition-opacity duration-700"
      />
    </aside>
  );
}
