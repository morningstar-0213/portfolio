import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { InteractiveGames } from './components/InteractiveGames';
import { TerminalConsole } from './components/TerminalConsole';
import { CyberCanvas } from './components/CyberCanvas';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative selection:bg-cyan-500 selection:text-black font-sans">
      <CyberCanvas />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/15 via-purple-900/10 to-transparent pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/15 via-blue-900/10 to-transparent pointer-events-none z-0" />
      
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