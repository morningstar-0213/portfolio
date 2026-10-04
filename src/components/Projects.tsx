import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Shield, Mail, Wifi, Smartphone, Key, Lock,
  MessageSquare, Globe, Database, Server,
  Terminal, Fingerprint, AlertTriangle,
  Radio, FileText, Unlock, Network, WifiOff,
  X, Instagram, ChevronRight,
} from 'lucide-react';
import { useSectionRegistry } from '../context/SectionRegistry';

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
    tech: ['PHP', 'JavaScript', "Let's Encrypt", 'SMTP'],
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
    highlights: ['Boolean/time-based blind injection','Union-based extraction','WAF evasion tampers','Automated database schema dump'],
    tech: ['Python', 'SQLAlchemy', 'Regex', 'Payload Crafting'],
  },
  { id: 10, icon: Server, title: 'Port & Service Scanner', category: 'Network Recon',
    description: 'Blazing fast asynchronous port scanner and service banner grabber.',
    highlights: ['Async TCP SYN/Connect scanning','OS & service fingerprinting','NSE script equivalent checks','Subnet discovery with ARP'],
    tech: ['Python', 'Asyncio', 'Raw Sockets', 'Scapy'],
  },
  { id: 11, icon: Radio, title: 'Packet Sniffer & Analyzer', category: 'Network Analysis',
    description: 'Deep packet inspection and protocol decoding utility.',
    highlights: ['Promiscuous mode capture','PCAP export and live dissection','DNS/HTTP cleartext analysis','Custom protocol parsers'],
    tech: ['Python', 'Scapy', 'PyShark', 'Network Interfaces'],
  },
  { id: 12, icon: AlertTriangle, title: 'Vulnerability Scanner', category: 'Vulnerability Assessment',
    description: 'Network-wide vulnerability identification and CVE matching engine.',
    highlights: ['NVD / CVE API integration','Service version matching','Exploit-DB correlation','Automated HTML audit reports'],
    tech: ['Python', 'REST API', 'NVD Feed', 'ReportLab'],
  },
  { id: 13, icon: Fingerprint, title: 'Digital Forensics Toolkit', category: 'Incident Response',
    description: 'Artifact extraction and memory forensics tool for post-incident audits.',
    highlights: ['RAM dump parsing','Deleted file carving','Event log correlation','Browser history & registry analysis'],
    tech: ['Python', 'Volatility', 'YARA', 'SQLite'],
  },
  { id: 14, icon: Unlock, title: 'Password Hash Cracker', category: 'Password Auditing',
    description: 'Multi-algorithm offline hash cracking engine with dictionary mutation.',
    highlights: ['MD5/SHA-1/SHA-256/NTLM support','Rule-based password mutation','Markov chain attack mode','Wordlist generator utility'],
    tech: ['Python', 'Hashlib', 'Multiprocessing', 'C Extensions'],
  },
  { id: 15, icon: FileText, title: 'Steganography Tool', category: 'Data Hiding',
    description: 'Carrier-grade image steganography and secret payload extraction.',
    highlights: ['LSB (Least Significant Bit) encoding','AES payload pre-encryption','Multi-format support (PNG/BMP/WAV)','Statistical steganalysis resistance'],
    tech: ['Python', 'Pillow', 'NumPy', 'Cryptography'],
  },
  { id: 16, icon: Network, title: 'ARP Spoofer & Poisoner', category: 'Network Attacks',
    description: 'Targeted ARP cache poisoning utility for authorized traffic auditing.',
    highlights: ['Bidirectional ARP poisoning','Automatic gateway recovery on exit','IP forwarding management','Passive host detection'],
    tech: ['Python', 'Scapy', 'Linux Networking', 'Raw Sockets'],
  },
  { id: 17, icon: Shield, title: 'MITM Proxy Framework', category: 'Traffic Interception',
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
  const { registerSection, unregisterSection } = useSectionRegistry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'end 0.55'] });
  const fromLeft = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 0.55], [fromLeft ? -40 : 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cardId = `project-${project.id}`;
    if (ref.current) {
      registerSection({ id: cardId, label: project.title, ref, parentId: 'projects' });
    }
    return () => unregisterSection(cardId);
  }, [project.id, project.title, registerSection, unregisterSection]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="card rounded-2xl p-5 flex flex-col gap-4 cursor-pointer relative overflow-hidden group hover:border-emerald-400/50 hover:shadow-[0_8px_32px_rgba(16,185,129,0.15)] transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-3 right-3 font-mono-display text-[9px] tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
          FLAGSHIP
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
          bg-emerald-500/10 border border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
          <project.icon size={18} className="text-emerald-400" />
        </div>
        <div>
          <div className="font-mono-display text-[10px] text-emerald-400/80 tracking-widest mb-0.5">
            {project.category}
          </div>
          <h3 className="font-bold text-white text-sm">{project.title}</h3>
        </div>
      </div>

      {project.tagline && (
        <p className="font-mono-display text-[11px] text-teal-300/80 italic">&ldquo;{project.tagline}&rdquo;</p>
      )}

      <p className="text-white/45 text-xs leading-relaxed line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1">
        {project.tech.slice(0, 3).map(t => (
          <span key={t} className="font-mono-display text-[9px] px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/20 text-emerald-300/70">{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="font-mono-display text-[9px] text-white/30">+{project.tech.length - 3}</span>
        )}
      </div>

      <div className={`flex items-center gap-1 font-mono-display text-[11px] text-emerald-400 transition-all duration-200
        ${hovered ? 'opacity-100 translate-x-0' : 'opacity-60 -translate-x-1'}`}>
        <span>Inspect architecture</span>
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
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 24, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        onClick={e => e.stopPropagation()}
        className="card rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[88vh] overflow-y-auto border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <project.icon size={22} className="text-emerald-400" />
            </div>
            <div>
              <div className="font-mono-display text-[10px] text-emerald-400/80 tracking-widest mb-0.5">{project.category}</div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl border border-white/[0.08] text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Private repo card */}
        <a
          href="https://instagram.com/morningstar0213"
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="flex items-center gap-3 p-4 mb-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 transition-all group"
        >
          <Instagram size={18} className="text-pink-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="font-mono-display text-[10px] text-emerald-400 tracking-widest mb-0.5">PRIVATE REPOSITORY</div>
            <div className="text-sm text-white/70 group-hover:text-white transition-colors">
              DM on Instagram <span className="font-mono-display text-pink-400">@morningstar0213</span> to request access.
            </div>
          </div>
        </a>

        {/* Highlights */}
        <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
          <Shield size={14} className="text-emerald-400" /> Key Features
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/15 text-xs text-white/60">
              <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <h4 className="font-bold text-white text-sm mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="font-mono-display text-[10px] px-2.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/25 text-emerald-300">{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { registerSection, unregisterSection } = useSectionRegistry();
  const [selected, setSelected] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selected) ?? null;

  useEffect(() => {
    if (ref.current) {
      registerSection({ id: 'projects', label: 'Projects', ref });
    }
    return () => unregisterSection('projects');
  }, [registerSection, unregisterSection]);

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-10 rail-offset">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3 text-emerald-400">04 — Projects</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            18 Security{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
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