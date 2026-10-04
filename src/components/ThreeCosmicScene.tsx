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

    // Dynamic Atmospheric Lighting
    const ambient = new THREE.AmbientLight(0x02220d, 2.2);
    scene.add(ambient);

    const coreLight = new THREE.PointLight(0xccff00, 4.5, 75);
    coreLight.position.set(0, 0, 10);
    scene.add(coreLight);

    const emeraldLight = new THREE.PointLight(0x00ff88, 3.8, 85);
    emeraldLight.position.set(0, -10, 8);
    scene.add(emeraldLight);

    const topCanopyLight = new THREE.PointLight(0x86efac, 3.5, 95);
    topCanopyLight.position.set(0, 15, 8);
    scene.add(topCanopyLight);

    const cosmicGroup = new THREE.Group();
    scene.add(cosmicGroup);

    // ── 1. 1,400+ COSMIC STARDUST & TEMPORAL EMBERS ──
    const particleCount = 1400;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const pVelocities = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.random() * 22;
      const py = -26 + Math.random() * 52;
      const px = Math.cos(theta) * r;
      const pz = -6 + Math.sin(theta) * r;

      pPositions[p * 3] = px;
      pPositions[p * 3 + 1] = py;
      pPositions[p * 3 + 2] = pz;

      pVelocities[p] = 0.018 + Math.random() * 0.045;

      const rand = Math.random();
      const col = new THREE.Color();
      if (rand > 0.8) {
        col.set(0xffffff);
      } else if (rand > 0.45) {
        col.set(0xccff00);
      } else {
        col.set(0x00ff88);
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
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeom, pMat);
    cosmicGroup.add(particles);

    // ── 2. ROTATING 3D SPIRAL GALAXY CORE ──
    const galaxyStarCount = 850;
    const gPositions = new Float32Array(galaxyStarCount * 3);
    const gColors = new Float32Array(galaxyStarCount * 3);

    for (let g = 0; g < galaxyStarCount; g++) {
      const arms = 2;
      const armIndex = g % arms;
      const distance = Math.pow(Math.random(), 2) * 26;
      const angle = distance * 0.38 + (armIndex * Math.PI);

      const gx = Math.cos(angle) * distance + (Math.random() - 0.5) * 1.8;
      const gy = 8 + (Math.random() - 0.5) * 2.5;
      const gz = -16 + Math.sin(angle) * distance * 0.45;

      gPositions[g * 3] = gx;
      gPositions[g * 3 + 1] = gy;
      gPositions[g * 3 + 2] = gz;

      const gCol = new THREE.Color(0xccff00).lerp(new THREE.Color(0x00ff88), Math.random());
      gColors[g * 3] = gCol.r;
      gColors[g * 3 + 1] = gCol.g;
      gColors[g * 3 + 2] = gCol.b;
    }

    const gGeom = new THREE.BufferGeometry();
    gGeom.setAttribute('position', new THREE.BufferAttribute(gPositions, 3));
    gGeom.setAttribute('color', new THREE.BufferAttribute(gColors, 3));

    const gMat = new THREE.PointsMaterial({
      size: 0.36,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const galaxyPoints = new THREE.Points(gGeom, gMat);
    scene.add(galaxyPoints);

    // ── 3. RESIZE & MOUSE PARALLAX LISTENER ──
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

    // Animation Loop (Zero Garbage Collection)
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse parallax lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Vertical scroll offset
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollRatio = window.scrollY / maxScroll;

      // 3D Camera parallax based on scroll & mouse
      const camTargetY = -6 + scrollRatio * 16 + mouse.y * 1.5;
      const camTargetX = mouse.x * 2.8;
      camera.position.y += (camTargetY - camera.position.y) * 0.06;
      camera.position.x += (camTargetX - camera.position.x) * 0.06;
      camera.lookAt(0, camera.position.y, 0);

      // Cosmic group subtle rotation & breathing
      cosmicGroup.rotation.y = Math.sin(elapsed * 0.3) * 0.08 + mouse.x * 0.12;
      cosmicGroup.position.y = Math.sin(elapsed * 0.5) * 0.25;

      // Galaxy rotation
      galaxyPoints.rotation.y = elapsed * 0.032;

      // Direct Typed Array Particle Updates (Fastest possible, 0 method calls)
      const arr = pPositions;
      for (let p = 0; p < particleCount; p++) {
        const yIdx = p * 3 + 1;
        arr[yIdx] += pVelocities[p];
        if (arr[yIdx] > 26) arr[yIdx] = -26;
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
