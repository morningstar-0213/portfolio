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
      {/* Background glow orbs */}
      {!isMobile && (
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[100px] pointer-events-none"
        />
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="font-mono text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 inline-block shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Core Competencies
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_8px_16px_rgba(59,130,246,0.3)]">
                SECURITY EXPERTISE
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Specialized technical domains built through hands-on red teaming, offensive research, and security audits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.06,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <ExpertiseCard {...area} index={index} isMobile={isMobile} />
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-32 p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none" />

          <h3 className="text-2xl md:text-4xl font-mono text-center font-bold mb-8 md:mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security Toolchain & Technologies
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
                transition={{ delay: i * 0.025 }}
                whileHover={{ scale: isMobile ? 1 : 1.08, y: isMobile ? 0 : -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 md:px-5 md:py-3 bg-slate-950/80 border border-cyan-500/30 rounded-xl font-mono text-xs md:text-sm text-cyan-200 hover:text-white hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-purple-600/30 hover:border-cyan-400 transition-all cursor-default shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md"
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

function ExpertiseCard({ icon: Icon, title, description, skills, index, isMobile }: any) {
  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1 : 1.03, y: isMobile ? 0 : -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full bg-slate-900/80 border border-slate-800 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500 backdrop-blur-xl flex flex-col justify-between"
    >
      {/* Top subtle border glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ rotate: isMobile ? 0 : 360, scale: isMobile ? 1 : 1.1 }}
            transition={{ duration: 0.6 }}
            className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-900/40 transition-colors shadow-inner"
          >
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-400" strokeWidth={1.75} />
          </motion.div>
          <span className="font-mono text-xs text-slate-500 font-bold group-hover:text-cyan-400 transition-colors">
            0{index + 1}
          </span>
        </div>
        
        <h3 className="text-lg md:text-xl font-mono font-bold mb-2.5 text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm mb-5 leading-relaxed font-sans">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
        {skills.map((skill: string, i: number) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-slate-950/60 border border-slate-800 rounded-md text-[11px] md:text-xs text-gray-300 font-mono group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
