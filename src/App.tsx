import { useEffect } from 'react';
import './styles/globals.css';
import { Navigation }       from './components/Navigation';
import { ScrollLightStream } from './components/ScrollLightStream';
import { Hero }             from './components/Hero';
import { Journey }          from './components/Journey';
import { Expertise }        from './components/Expertise';
import { Projects }         from './components/Projects';
import { Contact }          from './components/Contact';

export default function App() {
  /* Always start at top */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050810]">
      {/* Fixed left scroll rail (desktop) */}
      <ScrollLightStream />

      {/* Sticky top nav */}
      <Navigation />

      {/* Main content, padded on desktop for rail */}
      <main className="rail-offset">
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
  );
}