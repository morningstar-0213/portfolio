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
    <section id="expertise" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-block">
            Security Domains
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white mb-3 tracking-tight">
            Offensive Security Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Specialized capabilities developed through hands-on red teaming, offensive research, and security audits
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : isLeft ? -50 : 50,
                  y: isMobile ? 25 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="luxury-glass relative h-full rounded-2xl p-5 md:p-7 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                        <area.icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-5">
                      {area.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {area.skills.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[11px] text-slate-300 font-mono"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="luxury-glass mt-16 p-6 md:p-10 rounded-2xl text-center"
        >
          <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-6">
            Security Toolchain & Arsenal
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Kali Linux', 'Metasploit', 'Burp Suite Pro', 'Wireshark', 'Nmap', 
              'Hashcat', 'John the Ripper', 'Aircrack-ng', 'OWASP ZAP',
              'Nessus', 'Ghidra', 'IDA Pro', 'Python', 'Bash Scripting',
              'Docker', 'Nikto', 'Hydra', 'BeEF', 'Social-Engineer Toolkit', 'Tor Network'
            ].map((tool, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl font-mono text-xs text-slate-300 hover:text-emerald-300 transition-all cursor-default"
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
