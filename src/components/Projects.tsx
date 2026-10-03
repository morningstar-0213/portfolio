import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Shield, Mail, Wifi, Smartphone, Key, Lock,
  MessageSquare, Globe, Database, Server,
  Terminal, Fingerprint, AlertTriangle,
  Radio, FileText, Unlock, Network, WifiOff,
  X, Instagram, ChevronRight,
} from 'lucide-react';

const projects = [
  { id: 1, icon: MessageSquare, title: 'GoodFellas', category: 'Secure Messaging', tagline: 'More secure than Telegram', featured: true,
    description: 'An ultra-secure encrypted messaging platform with complete darknet anonymity and zero metadata retention.',
    highlights: [
      'All traffic routed through Tor darknet for total IP anonymization',
      'End-to-end encryption using AES-256 with perfect forward secrecy',
      'Zero-knowledge architecture — even server admins cannot read messages',
      'Decentralized node network preventing single points of failure',
      'Ephemeral messaging with automated self-destruct timer',
      'No metadata logging — IPs, timestamps, and identities completely omitted',
    ],
    tech: ['Tor Network', 'AES-256', 'Python', 'WebRTC', 'P2P', 'Zero-Knowledge'],
  },
  { id: 2, icon: Mail, title: 'Phishing Framework', category: 'Social Engineering',
    description: 'Advanced phishing page generator for authorized security awareness training.',
    highlights: ['Dynamic page cloning','HTTPS support with SSL','Real-time credential dashboard','Email template engine','Campaign tracking'],
    tech: ['PHP', 'JavaScript', 'Let\'s Encrypt', 'SMTP'],
  },
  { id: 3, icon: WifiOff, title: 'Network Jammer', category: 'Wireless Security',
    description: 'WiFi deauthentication and network disruption testing tool.',
    highlights: ['Automated deauthentication attacks','Multi-protocol support (802.11 a/b/g/n/ac)','Selective client disconnection','Channel hopping'],
    tech: ['Python', 'Scapy', 'Aircrack-ng', 'Packet Injection'],
  },
  { id: 4, icon: Smartphone, title: 'Android RAT Suite', category: 'Mobile Security',
    description: 'Remote administration toolkit for Android security audits and penetration testing.',
    highlights: ['Camera/mic/location surveillance','Keylogger & credential harvesting','SMS/call log extraction','Screen recording'],
    tech: ['Java', 'Android SDK', 'WebSocket', 'ADB'],
  },
  { id: 5, icon: Key, title: 'Multi-Protocol Bruteforcer', category: 'Password Attacks',
    description: 'High-performance authentication test and password attack framework.',
    highlights: ['SSH/FTP/HTTP/RDP/SMTP support','Multi-threaded architecture','Dictionary + rule mutations','Proxy rotation & bypass'],
    tech: ['Python', 'Hydra', 'Threading', 'Socket Programming'],
  },
  { id: 6, icon: Terminal, title: 'Advanced Keylogger', category: 'Surveillance & Audit',
    description: 'Stealthy keystroke logging and monitoring system for security research.',
    highlights: ['Kernel-level hook implementation','Clipboard & screenshot capture','Encrypted C2 transmission','Anti-debugging mechanisms'],
    tech: ['C++', 'Windows API', 'AES Encryption', 'Registry'],
  },
  { id: 7, icon: Lock, title: 'Message Encryptor', category: 'Cryptography',
    description: 'Military-grade encryption utility for secure data communications.',
    highlights: ['AES-256, RSA-4096, ChaCha20 support','PKI key generation','PBKDF2 key derivation','File encryption + LZMA compression'],
    tech: ['Python', 'PyCrypto', 'OpenSSL', 'AES-256'],
  },
  { id: 8, icon: Globe, title: 'Web App Scanner', category: 'Web Security',
    description: 'Automated vulnerability scanner for web applications and REST APIs.',
    highlights: ['OWASP Top 10 detection','SQL injection payloads','XSS detection (stored/DOM/reflected)','Automated crawling with JS execution'],
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'SQLMap'],
  },
  { id: 9, icon: Database, title: 'SQL Injection Toolkit', category: 'Exploitation',
    description: 'Advanced SQL injection discovery and data extraction framework.',
    highlights: ['DB fingerprinting','Blind SQL (time-based/boolean)','WAF bypass via obfuscation','Data exfiltration with custom encoding'],
    tech: ['Python', 'SQLMap', 'MySQL', 'MSSQL'],
  },
  { id: 10, icon: Server, title: 'C2 Server', category: 'Red Team',
    description: 'Centralized infrastructure for agent management and red team simulation.',
    highlights: ['HTTP/DNS/ICMP C2 channels','Encrypted traffic with custom wrappers','Web dashboard for host management','Domain fronting'],
    tech: ['Python', 'Flask', 'WebSocket', 'SQLite'],
  },
  { id: 11, icon: Terminal, title: 'Reverse Shell Generator', category: 'Exploitation',
    description: 'Multi-platform reverse shell payload generator for pentesting assessments.',
    highlights: ['Windows/Linux/macOS payloads','AV bypass obfuscation','TCP/UDP/HTTPS/DNS connections','Polymorphic code generation'],
    tech: ['Python', 'Metasploit', 'PowerShell', 'Bash'],
  },
  { id: 12, icon: Fingerprint, title: 'OSINT Framework', category: 'Reconnaissance',
    description: 'Comprehensive open-source intelligence gathering and target mapping.',
    highlights: ['Subdomain enumeration','Social media footprint mapping','Email harvesting from breach indices','WHOIS & EXIF parsing'],
    tech: ['Python', 'APIs', 'Web Scraping', 'Shodan'],
  },
  { id: 13, icon: AlertTriangle, title: 'Exploit Dev Kit', category: 'Vuln Research',
    description: 'Framework for binary analysis, ROP chain construction, and exploit prototyping.',
    highlights: ['Buffer overflow templates','ROP chain builder','Custom shellcode encoder','Fuzzing framework'],
    tech: ['Python', 'Assembly (x86/x64)', 'GDB', 'Pwntools'],
  },
  { id: 14, icon: Radio, title: 'Packet Analyzer', category: 'Network Analysis',
    description: 'Real-time packet inspection and network traffic analyzer.',
    highlights: ['Deep packet inspection','TLS traffic analysis','Credential extraction from streams','Custom IDS rule engine'],
    tech: ['Python', 'Scapy', 'Wireshark', 'libpcap'],
  },
  { id: 15, icon: FileText, title: 'Hash Cracker', category: 'Cryptanalysis',
    description: 'GPU-accelerated password hash cracking and audit utility.',
    highlights: ['MD5/SHA/NTLM/bcrypt support','GPU acceleration (CUDA/OpenCL)','Rainbow table lookup','Distributed cracking capability'],
    tech: ['Python', 'Hashcat', 'John the Ripper', 'CUDA'],
  },
  { id: 16, icon: Unlock, title: 'Credential Harvester', category: 'Data Extraction',
    description: 'Automated credential extraction utility from local system stores.',
    highlights: ['Browser credential decryption','WiFi WPA2 key extraction','LSASS memory parsing','SSH key harvesting'],
    tech: ['Python', 'Mimikatz', 'LaZagne', 'DPAPI'],
  },
  { id: 17, icon: Network, title: 'ARP Spoofing Suite', category: 'MITM',
    description: 'Man-in-the-middle attack framework for local network auditing.',
    highlights: ['ARP cache poisoning','SSL stripping module','DNS spoofing redirect','Session hijacking dashboard'],
    tech: ['Python', 'Scapy', 'Ettercap', 'SSLStrip'],
  },
  { id: 18, icon: Wifi, title: 'WPA/WPA2 Audit Tool', category: 'Wireless Security',
    description: 'Wireless security testing suite for key recovery and handshake analysis.',
    highlights: ['4-way EAPOL handshake capture','GPU-accelerated cracking','WPS PIN vulnerability detection','PMKID attack implementation'],
    tech: ['Python', 'Aircrack-ng', 'Hashcat', 'Reaver'],
  },
];

type Project = typeof projects[0];

/* ── Project card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'end 0.55'] });
  const fromLeft = index % 2 === 0;
  const x       = useTransform(scrollYProgress, [0, 0.55], [fromLeft ? -50 : 50, 0]);
  const opacity  = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="card rounded-2xl p-5 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 badge text-[9px]">FLAGSHIP</div>
      )}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
          bg-orange-500/10 border border-orange-500/20">
          <project.icon size={18} className="text-orange-400" />
        </div>
        <div>
          <div className="font-mono-display text-[10px] text-orange-400/70 tracking-widest mb-0.5">
            {project.category}
          </div>
          <h3 className="font-bold text-white text-sm">{project.title}</h3>
        </div>
      </div>

      {project.tagline && (
        <p className="font-mono-display text-[11px] text-amber-400/70 italic">&ldquo;{project.tagline}&rdquo;</p>
      )}

      <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, 3).map(t => (
          <span key={t} className="font-mono-display text-[9px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/35">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="font-mono-display text-[9px] text-white/25">+{project.tech.length - 3}</span>
        )}
      </div>

      <div className={`flex items-center gap-1 font-mono-display text-[11px] text-orange-400 transition-all duration-200
        ${hovered ? 'opacity-100 translate-x-0' : 'opacity-60 -translate-x-1'}`}>
        <span>View details</span>
        <ChevronRight size={12} />
      </div>
    </motion.div>
  );
}

/* ── Detail modal ── */
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 24, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        onClick={e => e.stopPropagation()}
        className="card rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[88vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
              <project.icon size={22} className="text-orange-400" />
            </div>
            <div>
              <div className="font-mono-display text-[10px] text-orange-400/70 tracking-widest mb-0.5">{project.category}</div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl border border-white/[0.08] text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Private repo card */}
        <a
          href="https://instagram.com/morningstar0213"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="flex items-center gap-3 p-4 mb-6 rounded-2xl bg-orange-500/[0.07] border border-orange-500/25 hover:border-orange-400/50 transition-all group"
        >
          <Instagram size={18} className="text-pink-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-mono-display text-[10px] text-orange-400 tracking-widest mb-0.5">PRIVATE REPOSITORY</div>
            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
              DM on Instagram <span className="font-mono-display text-pink-400">@morningstar0213</span> to request access.
            </div>
          </div>
        </a>

        {/* Highlights */}
        <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
          <Shield size={14} className="text-orange-400" /> Key Features
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-white/50">
              <span className="text-orange-400 mt-0.5 shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <h4 className="font-bold text-white text-sm mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selected) ?? null;

  return (
    <section id="projects" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-4 md:px-10 rail-offset">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">04 — Projects</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            18 Security{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #f59e0b)' }}>
              Tools &amp; Projects
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto">
            Offensive tools, encryption systems, and red team utilities — all built from scratch.
            Source code is private; tap any card for details.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          onClick={e => {
            const card = (e.target as HTMLElement).closest('[data-project-id]') as HTMLElement | null;
            if (card) setSelected(Number(card.dataset.projectId));
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className="cursor-pointer"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}