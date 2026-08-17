import { motion } from 'framer-motion';
import { Terminal, CornerDownLeft, Shield, Sparkles, RefreshCw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
  type?: 'input' | 'output' | 'error' | 'success';
}

export function TerminalConsole() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'sys_init',
      output: 'SYSTEM INITIALIZED: Vishesh Ranjan Security Shell v4.0. Type "help" for available commands.',
      type: 'success',
    },
    {
      command: 'whoami',
      output: 'Vishesh Ranjan — Ethical Hacker, Offensive Security Specialist, OSCP & CCIE Certified.',
      type: 'output',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    let outputResult: React.ReactNode = '';
    let type: HistoryItem['type'] = 'output';

    switch (cmd) {
      case 'help':
        outputResult = (
          <div className="space-y-1 text-cyan-300 font-mono">
            <p className="text-white font-bold mb-1">AVAILABLE COMMANDS:</p>
            <p><span className="text-purple-400 font-bold">whoami</span> — Display operator identity profile</p>
            <p><span className="text-purple-400 font-bold">certs</span> — List active security certifications</p>
            <p><span className="text-purple-400 font-bold">skills</span> — Display core offensive & defensive skill matrix</p>
            <p><span className="text-purple-400 font-bold">projects</span> — Summary of flagship security projects</p>
            <p><span className="text-purple-400 font-bold">contact</span> — Get direct contact links</p>
            <p><span className="text-purple-400 font-bold">clear</span> — Clear terminal output history</p>
          </div>
        );
        break;

      case 'whoami':
        outputResult = 'Vishesh Ranjan // Ethical Hacker & Security Researcher. Expertise in Pentesting, Exploitation, Red Teaming, and Network Architecture.';
        break;

      case 'certs':
        outputResult = (
          <div className="space-y-1 font-mono text-cyan-300">
            <p className="text-white font-bold">ACTIVE CERTIFICATIONS:</p>
            <p>✓ <span className="text-amber-400 font-bold">OSCP</span> — Offensive Security Certified Professional</p>
            <p>✓ <span className="text-cyan-400 font-bold">CCIE</span> — Cisco Certified Internetwork Expert</p>
            <p>✓ <span className="text-purple-400 font-bold">eJPT</span> — eLearnSecurity Junior Penetration Tester</p>
            <p>✓ <span className="text-blue-400 font-bold">CyberOps</span> — Cisco Certified CyberOps Associate</p>
            <p>✓ <span className="text-emerald-400 font-bold">Ethical Hacker</span> — Cisco Networking Academy</p>
            <p className="text-purple-300 italic pt-1">⚡ And many more in progress...</p>
          </div>
        );
        break;

      case 'skills':
        outputResult = 'Exploit Dev (Buffer Overflows), Pentesting, Web & API Security, Active Directory Attacks, Network Infrastructure, Malware Analysis, Reverse Engineering.';
        break;

      case 'projects':
        outputResult = (
          <div className="space-y-1 font-mono text-cyan-300">
            <p className="text-white font-bold">FLAGSHIP PROJECTS (18 Total):</p>
            <p>1. <span className="text-purple-400 font-bold">GoodFellas</span> — Tor-routed Zero-Knowledge Anonymous Encrypted Messenger</p>
            <p>2. <span className="text-cyan-400 font-bold">Phishing Framework</span> — Automated Security Awareness Campaign Engine</p>
            <p>3. <span className="text-cyan-400 font-bold">Android RAT Suite</span> — Mobile Remote Administration & Audit Tool</p>
            <p>4. <span className="text-cyan-400 font-bold">SQL Injection Toolkit</span> — Automated DB Fingerprinting & Shell Upload</p>
          </div>
        );
        break;

      case 'contact':
        outputResult = 'Telegram: @morningstar_0213 | Instagram: @morningstar0213 | GitHub: morningstar-0213 | Email: bhumiharshihsir12@gmail.com';
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputResult = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`;
        type = 'error';
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputResult, type }]);
    setInput('');
  };

  return (
    <section id="terminal-section" className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-3 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Security Console
          </span>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white">
            OPERATOR COMMAND SHELL
          </h2>
        </motion.div>

        {/* Cyber Window Container */}
        <div className="rounded-2xl bg-slate-950/95 border border-cyan-500/40 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-2xl">
          {/* Window Header */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-slate-400 ml-2">root@vishesh-sec:~#</span>
            </div>
            
            <button
              onClick={() => setHistory([])}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          </div>

          {/* Quick Command Buttons */}
          <div className="p-3 bg-slate-900/40 border-b border-slate-800/80 flex flex-wrap gap-2">
            <span className="text-[11px] font-mono text-slate-500 py-1 font-semibold">Quick Exec:</span>
            {['help', 'whoami', 'certs', 'skills', 'projects', 'contact'].map((btnCmd) => (
              <button
                key={btnCmd}
                onClick={() => handleCommand(btnCmd)}
                className="px-2.5 py-0.5 rounded-lg bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 font-mono text-xs text-cyan-300 hover:text-white transition-all shadow-sm"
              >
                ${btnCmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-purple-400">root@vishesh-sec:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className={`pl-4 ${
                  item.type === 'error' ? 'text-red-400' :
                  item.type === 'success' ? 'text-emerald-400 font-bold' : 'text-gray-300'
                }`}>
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input prompt line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-purple-400">root@vishesh-sec:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help' or click quick commands..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-white placeholder-slate-600 text-xs md:text-sm"
              />
              <button type="submit" className="text-cyan-400 hover:text-cyan-300">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
