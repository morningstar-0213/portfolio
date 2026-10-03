import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { InteractiveGames } from './components/InteractiveGames';
import { TerminalConsole } from './components/TerminalConsole';
import { ScrollLightStream } from './components/ScrollLightStream';

export default function App() {
  useEffect(() => {
    // Reset scroll position to top on page load/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 overflow-x-hidden relative selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-slate-950/80 to-slate-950 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-600/10 via-slate-950/80 to-slate-950 pointer-events-none z-0" />
      
      {/* Wavy Light Stream Energy Conduit */}
      <ScrollLightStream />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Journey />
        <Expertise />
        <Projects />
        <TerminalConsole />
        <InteractiveGames />
        <Contact />
      </div>
    </div>
  );
}