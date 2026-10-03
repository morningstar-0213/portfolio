import { motion } from 'framer-motion';
import { Shield, Network, Globe, Lock, Terminal, Zap, Bug, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

const expertiseAreas = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Advanced vulnerability assessment and exploitation techniques to identify security weaknesses across applications and infrastructure.',
    skills: ['Web App Pentesting', 'Network Pentesting', 'Wireless Security', 'Social Engineering'],
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Deep expertise in network protocols, intrusion detection, packet analysis, and securing network perimeter defenses.',
    skills: ['IDS/IPS Configuration', 'Firewall Hardening', 'VPN Security', 'Protocol Analysis'],
  },
  {
    icon: Globe,
    title: 'Web & API Security',
    description: 'Comprehensive web application security assessment, API security auditing, and secure architecture recommendations.',
    skills: ['OWASP Top 10', 'XSS / CSRF / SQLi', 'REST & GraphQL API', 'Authentication Bypass'],
  },
  {
    icon: Lock,
    title: 'Cryptography & PKI',
    description: 'Implementation and security analysis of encryption systems, public key infrastructure, and secure communications protocols.',
    skills: ['SSL/TLS Hardening', 'PKI Architecture', 'Hash Algorithms', 'Key Management'],
  },
  {
    icon: Terminal,
    title: 'Exploit Development',
    description: 'Creating and analyzing custom exploits, payload crafting, and memory corruption analysis in controlled environments.',
    skills: ['Buffer Overflows', 'Reverse Engineering', 'Shellcode Crafting', 'Fuzzing Frameworks'],
  },
  {
    icon: Zap,
    title: 'Malware Analysis',
    description: 'Static and dynamic analysis of malicious software behavior, IOC extraction, and sandbox environment testing.',
    skills: ['Static Analysis', 'Dynamic Sandboxing', 'IOC Extraction', 'Disassembly (IDA/Ghidra)'],
  },
  {
    icon: Bug,
    title: 'Vulnerability Research',
    description: 'Discovering, auditing, and documenting security vulnerabilities in systems, open-source software, and desktop applications.',
    skills: ['CVE Research', 'Bug Bounty Audits', 'PoC Development', 'Code Auditing'],
  },
  {
    icon: Wifi,
    title: 'Wireless Security',
    description: 'Wireless network security assessment, rogue access point detection, and WPA/WPA2 enterprise defense strategies.',
    skills: ['WPA/WPA2 Assessment', 'Rogue AP Detection', 'Enterprise WiFi Audit', 'Bluetooth Security'],
  },
];

export function Expertise() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="expertise" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 inline-block">
            Security Domains
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white mb-4">
            Offensive Security Expertise
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Specialized capabilities developed through hands-on red teaming, offensive research, and security audits
          </p>
        </motion.div>

        {/* Expertise Grid with Alternating Left/Right Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isMobile ? 0 : isLeft ? -90 : 90,
                  y: isMobile ? 40 : 0 
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  type: 'spring', 
                  stiffness: 90, 
                  damping: 20 
                }}
              >
                <div className="minimal-glass relative h-full rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                        <area.icon className="w-7 h-7" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-sans font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                      {area.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {area.skills.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-[11px] text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="minimal-glass mt-16 md:mt-24 p-8 md:p-12 rounded-2xl text-center"
        >
          <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-8">
            Security Toolchain & Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {[
              'Kali Linux', 'Metasploit', 'Burp Suite Pro', 'Wireshark', 'Nmap', 
              'Hashcat', 'John the Ripper', 'Aircrack-ng', 'OWASP ZAP',
              'Nessus', 'Ghidra', 'IDA Pro', 'Python', 'Bash Scripting',
              'Docker', 'Nikto', 'Hydra', 'BeEF', 'Social-Engineer Toolkit', 'Tor Network'
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-xl font-mono text-xs text-slate-300 hover:text-cyan-300 transition-all cursor-default"
              >
                #{tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
