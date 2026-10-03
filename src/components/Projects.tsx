import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Mail, Wifi, Smartphone, Key, Lock, 
  MessageSquare, Globe, Database, Server, 
  Terminal, Fingerprint, AlertTriangle,
  Radio, FileText, Unlock, Network, WifiOff, ExternalLink, X, Code2
} from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'GoodFellas',
    category: 'Flagship Security System',
    tagline: 'More secure than Telegram',
    description: 'An ultra-secure encrypted messaging platform with complete darknet anonymity and zero metadata retention.',
    highlights: [
      'All traffic routed through Tor darknet for total IP anonymization',
      'End-to-end encryption using AES-256 with perfect forward secrecy',
      'Zero-knowledge architecture - even server admins cannot decrypt messages',
      'Decentralized node network preventing single points of failure',
      'Ephemeral messaging with automated self-destruct timer',
      'No metadata logging - IP addresses, timestamps, and user identities are completely omitted',
    ],
    tech: ['Tor Network', 'AES-256', 'Python', 'WebRTC', 'P2P', 'Zero-Knowledge'],
    github: 'https://github.com/morningstar-0213/goodfellas',
    featured: true,
  },
  {
    id: 2,
    icon: Mail,
    title: 'Phishing Framework',
    category: 'Social Engineering',
    description: 'Advanced phishing page generator for authorized security awareness training.',
    highlights: [
      'Dynamic page cloning for realistic replica creation',
      'HTTPS support with automated SSL certificate generation',
      'Real-time credential capture dashboard with analytics',
      'Email template engine with customizable pretext scenarios',
      'Campaign tracking and success rate metrics',
      'Integration with security awareness training programs',
    ],
    tech: ['PHP', 'JavaScript', 'Let\'s Encrypt', 'SMTP', 'HTML/CSS'],
    github: 'https://github.com/morningstar-0213/phishing-framework',
  },
  {
    id: 3,
    icon: WifiOff,
    title: 'Network Jammer',
    category: 'Wireless Security',
    description: 'WiFi deauthentication and network disruption testing tool.',
    highlights: [
      'Automated deauthentication attack implementation',
      'Support for multiple wireless protocols (802.11 a/b/g/n/ac)',
      'Selective client disconnection capabilities',
      'Channel hopping for comprehensive coverage',
      'Real-time packet injection monitoring',
      'Evil twin AP detection and prevention testing',
    ],
    tech: ['Python', 'Scapy', 'Aircrack-ng', 'Monitor Mode', 'Packet Injection'],
    github: 'https://github.com/morningstar-0213/network-jammer',
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Android RAT Suite',
    category: 'Mobile Security',
    description: 'Remote administration toolkit for Android security audits and penetration testing.',
    highlights: [
      'Complete device surveillance including camera, microphone, and location',
      'Keylogger functionality for credential harvesting',
      'SMS and call log extraction with cloud sync',
      'File system access and remote file management',
      'Screen recording and screenshot capture',
      'Persistence mechanisms and anti-removal protection',
    ],
    tech: ['Java', 'Android SDK', 'WebSocket', 'ADB', 'Node.js'],
    github: 'https://github.com/morningstar-0213/android-rat',
  },
  {
    id: 5,
    icon: Key,
    title: 'Multi-Protocol Bruteforcer',
    category: 'Password Attacks',
    description: 'High-performance authentication test and password attack framework.',
    highlights: [
      'Support for SSH, FTP, HTTP, RDP, SMTP, and database protocols',
      'Multi-threaded architecture for maximum execution speed',
      'Dictionary attacks with custom rule-based mutations',
      'Hybrid attacks combining wordlists and brute force',
      'Proxy rotation and rate-limiting bypass algorithms',
      'Progress state saving and resume capabilities',
    ],
    tech: ['Python', 'Hydra', 'Threading', 'Regex', 'Socket Programming'],
    github: 'https://github.com/morningstar-0213/bruteforcer',
  },
  {
    id: 6,
    icon: Terminal,
    title: 'Advanced Keylogger',
    category: 'Surveillance & Audit',
    description: 'Stealthy keystroke logging and monitoring system for security research.',
    highlights: [
      'Kernel-level hook implementation for transparent operation',
      'Clipboard monitoring and screenshot capture on trigger events',
      'Application-specific logging with contextual window titles',
      'Encrypted log transmission to C2 server',
      'Anti-debugging and VM detection mechanisms',
      'Automatic startup persistence across reboots',
    ],
    tech: ['C++', 'Windows API', 'Hooks', 'AES Encryption', 'Registry'],
    github: 'https://github.com/morningstar-0213/keylogger',
  },
  {
    id: 7,
    icon: Lock,
    title: 'Message Encryptor/Decryptor',
    category: 'Cryptography',
    description: 'Military-grade encryption utility for secure data communications.',
    highlights: [
      'Multiple cipher support: AES-256, RSA-4096, Blowfish, ChaCha20',
      'Public key infrastructure (PKI) for secure key generation',
      'Encrypted payload formatting with base-64 encoding',
      'File encryption with integrated LZMA compression',
      'Secure key exchange using Diffie-Hellman protocol',
      'Password-based key derivation with PBKDF2',
    ],
    tech: ['Python', 'PyCrypto', 'OpenSSL', 'Base64', 'AES-256'],
    github: 'https://github.com/morningstar-0213/message-encryptor',
  },
  {
    id: 8,
    icon: Globe,
    title: 'Web Application Scanner',
    category: 'Web Security',
    description: 'Automated vulnerability scanner tailored for web applications and REST APIs.',
    highlights: [
      'OWASP Top 10 vulnerability detection engine',
      'SQL injection testing with multiple payload variations',
      'XSS detection (reflected, stored, and DOM-based)',
      'Directory traversal and local/remote file inclusion audit',
      'Automated crawling with headless browser JS execution',
      'Detailed vulnerability reports with PoC reproduction steps',
    ],
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Requests', 'SQLMap'],
    github: 'https://github.com/morningstar-0213/web-scanner',
  },
  {
    id: 9,
    icon: Database,
    title: 'SQL Injection Toolkit',
    category: 'Exploitation',
    description: 'Advanced SQL injection discovery and data extraction framework.',
    highlights: [
      'Automated database fingerprinting and structure detection',
      'Blind SQL injection using time-based and boolean techniques',
      'Database enumeration (tables, columns, credentials)',
      'Data exfiltration with custom encoding methods',
      'WAF bypass using obfuscation techniques',
      'Command execution and shell upload capabilities',
    ],
    tech: ['Python', 'SQLMap', 'MySQL', 'PostgreSQL', 'MSSQL'],
    github: 'https://github.com/morningstar-0213/sql-toolkit',
  },
  {
    id: 10,
    icon: Server,
    title: 'Command & Control Server',
    category: 'Red Team Operations',
    description: 'Centralized infrastructure for agent management and red team simulation.',
    highlights: [
      'Multi-protocol C2 communication channels (HTTP, DNS, ICMP)',
      'Encrypted C2 traffic with custom protocol wrappers',
      'Web dashboard for real-time host management and tasking',
      'Modular plugin architecture for custom capability deployment',
      'Automated agent payload generation',
      'Domain fronting and traffic obfuscation capabilities',
    ],
    tech: ['Python', 'Flask', 'WebSocket', 'SQLite', 'AES Encryption'],
    github: 'https://github.com/morningstar-0213/c2-server',
  },
  {
    id: 11,
    icon: Terminal,
    title: 'Reverse Shell Generator',
    category: 'Exploitation',
    description: 'Multi-platform reverse shell payload generator for pentesting assessments.',
    highlights: [
      'Cross-platform payload generation (Windows, Linux, macOS)',
      'Obfuscated payloads designed to bypass antivirus signatures',
      'Multiple connection methods (TCP, UDP, HTTPS, DNS)',
      'Polymorphic code generation engine',
      'Metasploit / Meterpreter handler integration',
      'One-liner command generation for rapid deployment',
    ],
    tech: ['Python', 'Metasploit', 'PowerShell', 'Bash', 'Netcat'],
    github: 'https://github.com/morningstar-0213/reverse-shell-gen',
  },
  {
    id: 12,
    icon: Fingerprint,
    title: 'OSINT Reconnaissance Framework',
    category: 'Information Gathering',
    description: 'Comprehensive open-source intelligence gathering and target mapping framework.',
    highlights: [
      'Automated subdomain enumeration and DNS record scouting',
      'Social media profile aggregation and footprint mapping',
      'Email harvesting across public breach indices',
      'WHOIS and domain registration data extraction',
      'Document and image metadata (EXIF) parser',
      'Visual target graph mapping and report generator',
    ],
    tech: ['Python', 'APIs', 'Web Scraping', 'Shodan', 'TheHarvester'],
    github: 'https://github.com/morningstar-0213/osint-tool',
  },
  {
    id: 13,
    icon: AlertTriangle,
    title: 'Exploit Development Kit',
    category: 'Vulnerability Research',
    description: 'Framework for binary analysis, ROP chain construction, and exploit prototyping.',
    highlights: [
      'Buffer overflow exploit template generator',
      'ROP chain builder and gadget searching utility',
      'Custom shellcode encoder and decoder utilities',
      'Fuzzing framework for binary vulnerability discovery',
      'Debugger integration (GDB / Radare2)',
      'Cross-platform binary exploitation suite',
    ],
    tech: ['Python', 'Assembly (x86/x64)', 'GDB', 'Pwntools', 'Radare2'],
    github: 'https://github.com/morningstar-0213/exploit-kit',
  },
  {
    id: 14,
    icon: Radio,
    title: 'Packet Sniffer & Analyzer',
    category: 'Network Analysis',
    description: 'Real-time packet inspection and network traffic analyzer.',
    highlights: [
      'Deep packet inspection with multi-protocol dissection',
      'TLS traffic analysis and certificate validation',
      'Credential extraction from unencrypted protocol streams',
      'Network topology mapping and host discovery',
      'Custom rule-based intrusion detection engine',
      'PCAP file import/export for detailed post-capture audits',
    ],
    tech: ['Python', 'Scapy', 'Wireshark', 'libpcap', 'NetworkX'],
    github: 'https://github.com/morningstar-0213/packet-sniffer',
  },
  {
    id: 15,
    icon: FileText,
    title: 'Password Hash Cracker',
    category: 'Cryptanalysis',
    description: 'GPU-accelerated password hash cracking and audit utility.',
    highlights: [
      'Support for MD5, SHA-1, SHA-256, NTLM, and bcrypt hashes',
      'GPU acceleration using CUDA and OpenCL modules',
      'Rainbow table generation and lookup engine',
      'Dictionary attack engine with custom mutation rules',
      'Distributed multi-node hash cracking capability',
      'Real-time hash rate and ETA calculations',
    ],
    tech: ['Python', 'Hashcat', 'John the Ripper', 'CUDA', 'Rainbow Tables'],
    github: 'https://github.com/morningstar-0213/hash-cracker',
  },
  {
    id: 16,
    icon: Unlock,
    title: 'Credential Harvester',
    category: 'Data Extraction',
    description: 'Automated credential extraction utility from local system stores.',
    highlights: [
      'Browser credential decryption (Chrome, Firefox, Edge)',
      'Saved WiFi WPA2 key extraction',
      'Windows LSASS memory credential parsing',
      'SSH private key and configuration file harvesting',
      'Session token and cookie extraction',
      'Secure encrypted vault parsing',
    ],
    tech: ['Python', 'Mimikatz', 'LaZagne', 'SQLite', 'DPAPI'],
    github: 'https://github.com/morningstar-0213/credential-harvester',
  },
  {
    id: 17,
    icon: Network,
    title: 'ARP Spoofing Suite',
    category: 'MITM Attacks',
    description: 'Man-in-the-middle attack framework for local network auditing.',
    highlights: [
      'Automated ARP cache poisoning engine',
      'SSL stripping module for HTTPS connection auditing',
      'Real-time packet modification and payload injection',
      'DNS spoofing for phishing redirect simulations',
      'Session hijacking and cookie capture dashboard',
      'Traffic flow logging and connection graphs',
    ],
    tech: ['Python', 'Scapy', 'Ettercap', 'SSLStrip', 'iptables'],
    github: 'https://github.com/morningstar-0213/arp-spoofer',
  },
  {
    id: 18,
    icon: Wifi,
    title: 'WPA/WPA2 Audit Tool',
    category: 'Wireless Security',
    description: 'Wireless security testing suite for key recovery and handshake analysis.',
    highlights: [
      'Automated 4-way EAPOL handshake capture',
      'Dictionary and rule-based brute force attack modes',
      'GPU acceleration integration with Hashcat',
      'WPS PIN vulnerability detection (Reaver integration)',
      'Clientless PMKID attack implementation',
      'Custom wordlist generation from targeted OSINT',
    ],
    tech: ['Python', 'Aircrack-ng', 'Hashcat', 'Reaver', 'Cowpatty'],
    github: 'https://github.com/morningstar-0213/wpa-cracker',
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 overflow-hidden">
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
            Project Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white mb-3 tracking-tight">
            Security Projects & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
            18 specialized tools and projects demonstrating offensive security techniques, red team tooling, and encryption protocols
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Left / Right Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ 
                  opacity: 0, 
                  x: isMobile ? 0 : isLeft ? -50 : 50,
                  y: isMobile ? 25 : 0 
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                onClick={() => setSelectedProject(project.id)}
                className="luxury-glass relative rounded-2xl p-5 md:p-7 cursor-pointer hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full font-mono text-[10px] font-semibold text-emerald-300">
                    FLAGSHIP
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <project.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs text-emerald-400 font-mono font-semibold">{project.category}</span>
                  <h3 className="text-lg md:text-xl font-sans font-bold text-white mt-1 mb-1 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-purple-300 text-xs italic font-mono mb-2">{project.tagline}</p>
                  )}
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-5 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-3">
                    {project.tech.slice(0, 3).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-900/80 border border-slate-800 rounded-md text-[11px] text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[11px] text-slate-500 font-mono font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-emerald-400 group-hover:text-emerald-300 text-xs font-mono font-semibold inline-flex items-center gap-1">
                    <span>View Details & Specs</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find(p => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="minimal-glass rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8 relative"
      >
        <div className="flex items-start justify-between mb-6 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
              <project.icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs text-cyan-400 font-mono font-semibold">{project.category}</span>
              <h3 className="text-2xl font-sans font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-slate-300 leading-relaxed text-base mb-8 font-sans">
          {project.description}
        </p>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 mb-8 bg-slate-900/90 border border-slate-800 rounded-2xl hover:border-cyan-500/40 transition-all group"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500 font-mono">Source Repository</div>
              <div className="text-sm font-mono text-cyan-300 font-semibold truncate">
                {project.github}
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </a>
        )}

        <div className="mb-8">
          <h4 className="text-base font-sans font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            Key Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((highlight: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
              >
                <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-sans font-bold text-white mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}