import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

export interface TreeContextProps {
  scrollYProgress: number;
  prefersReducedMotion: boolean;
  animationEnabled: boolean;
  setAnimationEnabled: (enabled: boolean) => void;
  branchDensity: 'high' | 'medium' | 'low';
  setBranchDensity: (density: 'high' | 'medium' | 'low') => void;
  rootHubPos: { x: number; y: number };
  updateRootHubPos: (pos: { x: number; y: number }) => void;
}

const TreeContext = createContext<TreeContextProps>({
  scrollYProgress: 0,
  prefersReducedMotion: false,
  animationEnabled: true,
  setAnimationEnabled: () => {},
  branchDensity: 'high',
  setBranchDensity: () => {},
  rootHubPos: { x: 30, y: 300 },
  updateRootHubPos: () => {},
});

export const TreeProvider = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const [currentScroll, setCurrentScroll] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animationEnabled, setAnimationEnabledState] = useState(true);
  const [branchDensity, setBranchDensityState] = useState<'high' | 'medium' | 'low'>('high');
  const [rootHubPos, setRootHubPos] = useState({ x: 30, y: 300 });

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (latest) => {
      setCurrentScroll(latest);
    });
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(media.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      media.addEventListener('change', listener);

      const storedAnim = localStorage.getItem('animationEnabled');
      if (storedAnim !== null) {
        setAnimationEnabledState(storedAnim === 'true');
      }

      const storedDensity = localStorage.getItem('branchDensity') as 'high' | 'medium' | 'low' | null;
      if (storedDensity && ['high', 'medium', 'low'].includes(storedDensity)) {
        setBranchDensityState(storedDensity);
      }

      return () => media.removeEventListener('change', listener);
    }
  }, []);

  const setAnimationEnabled = (enabled: boolean) => {
    setAnimationEnabledState(enabled);
    localStorage.setItem('animationEnabled', String(enabled));
  };

  const setBranchDensity = (density: 'high' | 'medium' | 'low') => {
    setBranchDensityState(density);
    localStorage.setItem('branchDensity', density);
  };

  const updateRootHubPos = (pos: { x: number; y: number }) => {
    setRootHubPos(pos);
  };

  return (
    <TreeContext.Provider
      value={{
        scrollYProgress: currentScroll,
        prefersReducedMotion,
        animationEnabled,
        setAnimationEnabled,
        branchDensity,
        setBranchDensity,
        rootHubPos,
        updateRootHubPos,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};

export const useTree = () => useContext(TreeContext);
