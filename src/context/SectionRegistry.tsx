import React, { createContext, useContext, ReactNode, useRef, useEffect, useState, useCallback } from 'react';

export interface SectionInfo {
  id: string;
  label?: string;
  ref: React.RefObject<HTMLElement | null>;
  parentId?: string;
}

export interface SectionRegistryContextProps {
  registerSection: (info: SectionInfo) => void;
  unregisterSection: (id: string) => void;
  getSectionPos: (id: string) => { x: number; y: number } | null;
  sections: Map<string, SectionInfo>;
  activeSection: string;
  setActiveSection: (id: string) => void;
  registryVersion: number;
}

const SectionRegistryContext = createContext<SectionRegistryContextProps | undefined>(undefined);

export const SectionRegistryProvider = ({ children }: { children: ReactNode }) => {
  const sectionsMap = useRef<Map<string, SectionInfo>>(new Map());
  const [registryVersion, setRegistryVersion] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const registerSection = useCallback((info: SectionInfo) => {
    sectionsMap.current.set(info.id, info);
    setRegistryVersion((v) => v + 1);
  }, []);

  const unregisterSection = useCallback((id: string) => {
    sectionsMap.current.delete(id);
    setRegistryVersion((v) => v + 1);
  }, []);

  const getSectionPos = useCallback((id: string): { x: number; y: number } | null => {
    const info = sectionsMap.current.get(id);
    if (info && info.ref.current) {
      const rect = info.ref.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const scrollX = window.scrollX || window.pageXOffset || 0;
      return {
        x: rect.left + scrollX + rect.width / 2,
        y: rect.top + scrollY + Math.min(rect.height / 2, 280),
      };
    }
    return null;
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      const sectionEntries = Array.from(sectionsMap.current.entries())
        .filter(([, info]) => !info.parentId && info.ref.current);

      for (let i = sectionEntries.length - 1; i >= 0; i--) {
        const [id, info] = sectionEntries[i];
        if (info.ref.current) {
          const rect = info.ref.current.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionRegistryContext.Provider
      value={{
        registerSection,
        unregisterSection,
        getSectionPos,
        sections: sectionsMap.current,
        activeSection,
        setActiveSection,
        registryVersion,
      }}
    >
      {children}
    </SectionRegistryContext.Provider>
  );
};

export const useSectionRegistry = () => {
  const ctx = useContext(SectionRegistryContext);
  if (!ctx) {
    throw new Error('useSectionRegistry must be used within SectionRegistryProvider');
  }
  return ctx;
};
