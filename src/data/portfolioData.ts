export interface Certification {
  id: string;
  name: string;
  full: string;
  org: string;
  year: string;
  badgeColor: string;
  desc: string;
}

export interface DomainExpertise {
  title: string;
  desc: string;
  tools: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tagline?: string;
  featured?: boolean;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface ContactChannel {
  label: string;
  handle: string;
  sub: string;
  href: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Vishesh Ranjan',
    role: 'Ethical Hacker & Security Specialist',
    tagline: "Building tools to break systems — so others can't. Offensive security research, red team operations & network defense.",
    statusBadge: 'Timeline Active · Available for Engagements',
    stats: [
      { value: '18+', label: 'Projects' },
      { value: '5+', label: 'Certs' },
      { value: '3+', label: 'Yrs Exp' },
    ],
    floatingChips: [
      'AES-256',
      'Zero-Trust',
      'OSCP',
      'Metasploit',
      'Burp Suite',
      'Wireshark',
      'Reverse Eng',
      'Tor Mesh',
    ],
    socials: {
      twitter: 'https://x.com/MORNINGSTAR0213',
      instagram: 'https://instagram.com/morningstar0213',
      telegram: 'https://t.me/morningstar_0213',
      email: 'mailto:visheshranjan0213@gmail.com',
    },
  },

  certifications: [
    {
      id: 'oscp',
      name: 'OSCP',
      full: 'Offensive Security Certified Professional',
      org: 'OffSec',
      year: '2026',
      badgeColor: 'from-emerald-500 to-teal-600',
      desc: 'Hands-on penetration testing certification. 24-hour practical exam in a live vulnerable lab environment.',
    },
    {
      id: 'ccie',
      name: 'CCIE',
      full: 'CCIE Security / Enterprise',
      org: 'Cisco',
      year: '2026',
      badgeColor: 'from-teal-500 to-cyan-600',
      desc: 'Expert-level network security certification. One of the most respected technical credentials worldwide.',
    },
    {
      id: 'ejpt',
      name: 'eJPT',
      full: 'eLearnSecurity Junior Penetration Tester',
      org: 'INE Security',
      year: '2026',
      badgeColor: 'from-emerald-400 to-green-600',
      desc: 'Practical entry-level penetration testing certification with real-world simulated environments.',
    },
    {
      id: 'cyberops',
      name: 'CyberOps',
      full: 'Cisco Certified CyberOps Associate',
      org: 'Cisco',
      year: '2025',
      badgeColor: 'from-cyan-500 to-blue-600',
      desc: 'SOC analyst skills — threat detection, incident response, and security monitoring operations.',
    },
    {
      id: 'ceh',
      name: 'CEH',
      full: 'Cisco Networking Academy Ethical Hacker',
      org: 'Cisco',
      year: '2025',
      badgeColor: 'from-teal-400 to-emerald-600',
      desc: 'Industry-recognized ethical hacking methodology covering attack vectors and countermeasures.',
    },
  ] as Certification[],

  domains: [
    {
      title: 'Penetration Testing',
      desc: 'Full-scope network and application pentests using industry-standard methodologies.',
      tools: ['Metasploit', 'Burp Suite', 'Nmap'],
    },
    {
      title: 'Wireless Security',
      desc: 'WPA/WPA2 auditing, evil twin attacks, EAPOL handshake analysis and deauth testing.',
      tools: ['Aircrack-ng', 'Wireshark', 'Reaver'],
    },
    {
      title: 'Web App Security',
      desc: 'OWASP Top 10 exploitation — SQL injection, XSS, SSRF, and API security testing.',
      tools: ['SQLMap', 'Nikto', 'ZAP'],
    },
    {
      title: 'Cryptography',
      desc: 'Designing and breaking encryption systems — AES-256, RSA, Diffie-Hellman and beyond.',
      tools: ['OpenSSL', 'PyCrypto', 'Hashcat'],
    },
    {
      title: 'Red Team Ops',
      desc: 'Adversary simulation with C2 infrastructure, persistence, and lateral movement.',
      tools: ['Cobalt Strike', 'Sliver', 'Empire'],
    },
    {
      title: 'Malware Analysis',
      desc: 'Static and dynamic analysis of malicious binaries, shellcode, and packed executables.',
      tools: ['Ghidra', 'IDA Pro', 'x64dbg'],
    },
    {
      title: 'OSINT & Recon',
      desc: 'Comprehensive target intelligence gathering using open source data and tooling.',
      tools: ['TheHarvester', 'Shodan', 'Maltego'],
    },
    {
      title: 'Network Defense',
      desc: 'IDS/IPS tuning, firewall hardening, traffic analysis and SOC incident response.',
      tools: ['Snort', 'Zeek', 'Suricata'],
    },
  ] as DomainExpertise[],

  arsenal: [
    'Kali Linux',
    'Parrot OS',
    'Metasploit',
    'Burp Suite Pro',
    'Wireshark',
    'Nmap',
    'SQLMap',
    'Hashcat',
    'John the Ripper',
    'Aircrack-ng',
    'Ghidra',
    'IDA Pro',
    'Pwntools',
    'Scapy',
    'BloodHound',
    'Responder',
    'Impacket',
    'CrackMapExec',
  ],

  projects: [
    {
      id: 1,
      title: 'GoodFellas',
      category: 'Secure Messaging',
      tagline: 'More secure than Telegram',
      featured: true,
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
    {
      id: 2,
      title: 'Phishing Framework',
      category: 'Social Engineering',
      description: 'Advanced phishing page generator for authorized security awareness training.',
      highlights: [
        'Dynamic page cloning',
        'HTTPS support with SSL',
        'Real-time credential dashboard',
        'Email template engine',
        'Campaign tracking',
      ],
      tech: ['PHP', 'JavaScript', "Let's Encrypt", 'SMTP'],
    },
    {
      id: 3,
      title: 'Network Jammer',
      category: 'Wireless Security',
      description: 'WiFi deauthentication and network disruption testing tool.',
      highlights: [
        'Automated deauthentication attacks',
        'Multi-protocol support (802.11 a/b/g/n/ac)',
        'Selective client disconnection',
        'Channel hopping',
      ],
      tech: ['Python', 'Scapy', 'Aircrack-ng', 'Packet Injection'],
    },
    {
      id: 4,
      title: 'Android RAT Suite',
      category: 'Mobile Security',
      description: 'Remote administration toolkit for Android security audits and penetration testing.',
      highlights: [
        'Camera/mic/location surveillance',
        'Keylogger & credential harvesting',
        'SMS/call log extraction',
        'Screen recording',
      ],
      tech: ['Java', 'Android SDK', 'WebSocket', 'ADB'],
    },
    {
      id: 5,
      title: 'Multi-Protocol Bruteforcer',
      category: 'Password Attacks',
      description: 'High-performance authentication test and password attack framework.',
      highlights: [
        'SSH/FTP/HTTP/RDP/SMTP support',
        'Multi-threaded architecture',
        'Dictionary + rule mutations',
        'Proxy rotation & bypass',
      ],
      tech: ['Python', 'Hydra', 'Threading', 'Socket Programming'],
    },
    {
      id: 6,
      title: 'Advanced Keylogger',
      category: 'Surveillance & Audit',
      description: 'Stealthy keystroke logging and monitoring system for security research.',
      highlights: [
        'Kernel-level hook implementation',
        'Clipboard & screenshot capture',
        'Encrypted C2 transmission',
        'Anti-debugging mechanisms',
      ],
      tech: ['C++', 'Windows API', 'AES Encryption', 'Registry'],
    },
    {
      id: 7,
      title: 'Message Encryptor',
      category: 'Cryptography',
      description: 'Military-grade encryption utility for secure data communications.',
      highlights: [
        'AES-256, RSA-4096, ChaCha20 support',
        'PKI key generation',
        'PBKDF2 key derivation',
        'File encryption + LZMA compression',
      ],
      tech: ['Python', 'PyCrypto', 'OpenSSL', 'AES-256'],
    },
    {
      id: 8,
      title: 'Web App Scanner',
      category: 'Web Security',
      description: 'Automated vulnerability scanner for web applications and REST APIs.',
      highlights: [
        'OWASP Top 10 detection',
        'SQL injection payloads',
        'XSS detection (stored/DOM/reflected)',
        'Automated crawling with JS execution',
      ],
      tech: ['Python', 'Selenium', 'BeautifulSoup', 'SQLMap'],
    },
    {
      id: 9,
      title: 'SQL Injection Toolkit',
      category: 'Exploitation',
      description: 'Advanced SQL injection discovery and data extraction framework.',
      highlights: [
        'Boolean/time-based blind injection',
        'Union-based extraction',
        'WAF evasion tampers',
        'Automated database schema dump',
      ],
      tech: ['Python', 'SQLAlchemy', 'Regex', 'Payload Crafting'],
    },
    {
      id: 10,
      title: 'Port & Service Scanner',
      category: 'Network Recon',
      description: 'Blazing fast asynchronous port scanner and service banner grabber.',
      highlights: [
        'Async TCP SYN/Connect scanning',
        'OS & service fingerprinting',
        'NSE script equivalent checks',
        'Subnet discovery with ARP',
      ],
      tech: ['Python', 'Asyncio', 'Raw Sockets', 'Scapy'],
    },
    {
      id: 11,
      title: 'Packet Sniffer & Analyzer',
      category: 'Network Analysis',
      description: 'Deep packet inspection and protocol decoding utility.',
      highlights: [
        'Promiscuous mode capture',
        'PCAP export and live dissection',
        'DNS/HTTP cleartext analysis',
        'Custom protocol parsers',
      ],
      tech: ['Python', 'Scapy', 'PyShark', 'Network Interfaces'],
    },
    {
      id: 12,
      title: 'Vulnerability Scanner',
      category: 'Vulnerability Assessment',
      description: 'Network-wide vulnerability identification and CVE matching engine.',
      highlights: [
        'NVD / CVE API integration',
        'Service version matching',
        'Exploit-DB correlation',
        'Automated HTML audit reports',
      ],
      tech: ['Python', 'REST API', 'NVD Feed', 'ReportLab'],
    },
    {
      id: 13,
      title: 'Digital Forensics Toolkit',
      category: 'Incident Response',
      description: 'Artifact extraction and memory forensics tool for post-incident audits.',
      highlights: [
        'RAM dump parsing',
        'Deleted file carving',
        'Event log correlation',
        'Browser history & registry analysis',
      ],
      tech: ['Python', 'Volatility', 'YARA', 'SQLite'],
    },
    {
      id: 14,
      title: 'Password Hash Cracker',
      category: 'Password Auditing',
      description: 'Multi-algorithm offline hash cracking engine with dictionary mutation.',
      highlights: [
        'MD5/SHA-1/SHA-256/NTLM support',
        'Rule-based password mutation',
        'Markov chain attack mode',
        'Wordlist generator utility',
      ],
      tech: ['Python', 'Hashlib', 'Multiprocessing', 'C Extensions'],
    },
    {
      id: 15,
      title: 'Steganography Tool',
      category: 'Data Hiding',
      description: 'Carrier-grade image steganography and secret payload extraction.',
      highlights: [
        'LSB (Least Significant Bit) encoding',
        'AES payload pre-encryption',
        'Multi-format support (PNG/BMP/WAV)',
        'Statistical steganalysis resistance',
      ],
      tech: ['Python', 'Pillow', 'NumPy', 'Cryptography'],
    },
    {
      id: 16,
      title: 'ARP Spoofer & Poisoner',
      category: 'Network Attacks',
      description: 'Targeted ARP cache poisoning utility for authorized traffic auditing.',
      highlights: [
        'Bidirectional ARP poisoning',
        'Automatic gateway recovery on exit',
        'IP forwarding management',
        'Passive host detection',
      ],
      tech: ['Python', 'Scapy', 'Linux Networking', 'Raw Sockets'],
    },
    {
      id: 17,
      title: 'MITM Proxy Framework',
      category: 'Traffic Interception',
      description: 'Man-in-the-middle attack framework for local network auditing.',
      highlights: [
        'ARP cache poisoning',
        'SSL stripping module',
        'DNS spoofing redirect',
        'Session hijacking dashboard',
      ],
      tech: ['Python', 'Scapy', 'Ettercap', 'SSLStrip'],
    },
    {
      id: 18,
      title: 'WPA/WPA2 Audit Tool',
      category: 'Wireless Security',
      description: 'Wireless security testing suite for key recovery and handshake analysis.',
      highlights: [
        '4-way EAPOL handshake capture',
        'GPU-accelerated cracking',
        'WPS PIN vulnerability detection',
        'PMKID attack implementation',
      ],
      tech: ['Python', 'Aircrack-ng', 'Hashcat', 'Reaver'],
    },
  ] as ProjectItem[],

  contacts: [
    {
      label: 'Twitter / X',
      handle: '@MORNINGSTAR0213',
      sub: 'Follow for security research & operational updates',
      href: 'https://x.com/MORNINGSTAR0213',
      badge: 'OFFENSIVE INTEL',
    },
    {
      label: 'Instagram',
      handle: '@morningstar0213',
      sub: 'DM for project code access, collaboration & consulting',
      href: 'https://instagram.com/morningstar0213',
      badge: 'CODE REPO ACCESS',
    },
    {
      label: 'Telegram',
      handle: '@morningstar_0213',
      sub: 'Direct encrypted communication & consultations',
      href: 'https://t.me/morningstar_0213',
      badge: 'ENCRYPTED DIRECT',
    },
    {
      label: 'Email',
      handle: 'visheshranjan0213@gmail.com',
      sub: 'For penetration tests, engagements & professional audits',
      href: 'mailto:visheshranjan0213@gmail.com',
      badge: 'ENTERPRISE INQUIRY',
    },
  ] as ContactChannel[],
};
