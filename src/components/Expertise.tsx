import { motion } from 'framer-motion';
import { Shield, Network, Globe, Lock, Terminal, Zap, Bug, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

const expertiseAreas = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Advanced vulnerability assessment and exploitation techniques to identify security weaknesses across applications and infrastructure.',
    skills: ['Web App Pentesting', 'Network Pentesting', 'Wireless Security', 'Social Engineering'],
    proficiency: '99%',
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Deep expertise in network protocols, intrusion detection, packet analysis, and securing network perimeter defenses.',
    skills: ['IDS/IPS Configuration', 'Firewall Hardening', 'VPN Security', 'Protocol Analysis'],
    proficiency: '98%',
  },
  {
    icon: Globe,
    title: 'Web & API Security',
    description: 'Comprehensive web application security assessment, API security auditing, and secure architecture recommendations.',
    skills: ['OWASP Top 10', 'XSS / CSRF / SQLi', 'REST & GraphQL API', 'Authentication Bypass'],
    proficiency: '96%',
  },
  {
    icon: Lock,
    title: 'Cryptography & PKI',
    description: 'Implementation and security analysis of encryption systems, public key infrastructure, and secure communications protocols.',
    skills: ['SSL/TLS Hardening', 'PKI Architecture', 'Hash Algorithms', 'Key Management'],
    proficiency: '94%',
  },
  {
    icon: Terminal,
    title: 'Exploit Development',
    description: 'Creating and analyzing custom exploits, payload crafting, and memory corruption analysis in controlled environments.',
    skills: ['Buffer Overflows', 'Reverse Engineering', 'Shellcode Crafting', 'Fuzzing Frameworks'],
    proficiency: '95%',
  },
  {
    icon: Zap,
    title: 'Malware Analysis',
    description: 'Static and dynamic analysis of malicious software behavior, IOC extraction, and sandbox environment testing.',
    skills: ['Static Analysis', 'Dynamic Sandboxing', 'IOC Extraction', 'Disassembly (IDA/Ghidra)'],
    proficiency: '93%',
  },
  {
    icon: Bug,
    title: 'Vulnerability Research',
    description: 'Discovering, auditing, and documenting security vulnerabilities in systems, open-source software, and desktop applications.',
    skills: ['CVE Research', 'Bug Bounty Audits', 'PoC Development', 'Code Auditing'],
    proficiency: '95%',
  },
  {
    icon: Wifi,
    title: 'Wireless Security',
    description: 'Wireless network security assessment, rogue access point detection, and WPA/WPA2 enterprise defense strategies.',
    skills: ['WPA/WPA2 Assessment', 'Rogue AP Detection', 'Enterprise WiFi Audit', 'Bluetooth Security'],
    proficiency: '92%',
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
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 mb-4 inline-block shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            SPECIALIZED SECURITY DOMAINS
          </span>
          <motion.h2 
            className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-wider mb-4 text-glow-cyan"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              OFFENSIVE EXPERTISE
            </span>
          </motion.h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
            Core offensive research capabilities, penetration testing skillsets, and threat mitigation frameworks
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ExpertiseCard {...area} index={index} isMobile={isMobile} />
            </motion.div>
          ))}
        </div>

        {/* Security Toolchain & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cyber-box mt-20 md:mt-32 p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          <h3 className="font-orbitron text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent tracking-wider">
            SECURITY TOOLCHAIN & ARSENAL
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 relative z-10">
            {[
              'Kali Linux', 'Metasploit', 'Burp Suite Pro', 'Wireshark', 'Nmap', 
              'Hashcat', 'John the Ripper', 'Aircrack-ng', 'OWASP ZAP',
              'Nessus', 'Ghidra', 'IDA Pro', 'Python', 'Bash Scripting',
              'Docker', 'Nikto', 'Hydra', 'BeEF', 'Social-Engineer Toolkit', 'Tor Network'
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: isMobile ? 1 : 1.08, y: isMobile ? 0 : -3 }}
                className="px-4 py-2.5 bg-slate-950 border border-cyan-500/30 rounded-xl font-mono text-xs md:text-sm text-cyan-200 hover:text-white hover:border-cyan-400 transition-all cursor-default shadow-md"
              >
                <span className="text-cyan-400 mr-1.5 font-bold">#</span>{tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExpertiseCard({ icon: Icon, title, description, skills, index, proficiency, isMobile }: any) {
  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.03, y: isMobile ? 0 : -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="cyber-box relative h-full rounded-2xl p-5 md:p-6 transition-all duration-500 flex flex-col justify-between group"
    >
      {/* HUD Corner Accents */}
      <span className="absolute top-1.5 left-2 font-mono text-[9px] text-cyan-500/60">+</span>
      <span className="absolute top-1.5 right-2 font-mono text-[9px] text-cyan-500/60">+</span>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Icon className="w-7 h-7 text-cyan-400" strokeWidth={1.75} />
          </div>
          <span className="font-mono text-xs text-cyan-400 font-bold bg-cyan-950/60 px-2 py-1 rounded border border-cyan-500/30">
            {proficiency}
          </span>
        </div>
        
        <h3 className="font-orbitron text-lg font-bold mb-2.5 text-white group-hover:text-cyan-300 transition-colors tracking-wide">
          {title}
        </h3>
        <p className="text-slate-300 text-xs md:text-sm mb-5 leading-relaxed font-sans">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
        {skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[11px] text-slate-300 font-mono group-hover:border-cyan-500/40 group-hover:text-cyan-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
