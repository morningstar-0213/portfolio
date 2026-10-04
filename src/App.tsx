import React, { useEffect } from 'react';
import './styles/globals.css';
import { Navigation } from './components/Navigation';
import { YggdrasilTree } from './components/YggdrasilTree';
import { BranchConnectorsOverlay } from './components/BranchConnectorsOverlay';
import { MiniTreeBar } from './components/MiniTreeBar';
import { SettingsPanel } from './components/SettingsPanel';
import { TreeProvider } from './context/TreeContext';
import { SectionRegistryProvider } from './context/SectionRegistry';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  /* Always start at top on reload */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <TreeProvider>
      <SectionRegistryProvider>
        <div className="relative min-h-screen bg-[#050810] text-[#e2e8f0] selection:bg-emerald-500 selection:text-black">
          {/* Fixed left scroll rail (desktop) */}
          <YggdrasilTree />

          {/* Dynamic glowing branch to section connectors */}
          <BranchConnectorsOverlay />

          {/* Sticky top nav */}
          <Navigation />

          {/* Mobile flagship timeline bar (md:hidden) */}
          <MiniTreeBar />

          {/* Settings panel toggle & modal */}
          <SettingsPanel />

          {/* Main content, padded on desktop for rail */}
          <main className="rail-offset relative z-10 pt-10 md:pt-0">
            <Hero />
            <div className="h-rule" />
            <Journey />
            <div className="h-rule" />
            <Expertise />
            <div className="h-rule" />
            <Projects />
            <div className="h-rule" />
            <Contact />
          </main>
        </div>
      </SectionRegistryProvider>
    </TreeProvider>
  );
}