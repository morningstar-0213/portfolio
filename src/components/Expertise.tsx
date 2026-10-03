import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield, Wifi, Globe, Key, Lock,
  Terminal, Eye, Network,
} from 'lucide-react';

const domains = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    desc: 'Full-scope network and application pentests using industry-standard methodologies.',
    tools: ['Metasploit', 'Burp Suite', 'Nmap'],
  },
  {
    icon: Wifi,
    title: 'Wireless Security',
    desc: 'WPA/WPA2 auditing, evil twin attacks, EAPOL handshake analysis and deauth testing.',
    tools: ['Aircrack-ng', 'Wireshark', 'Reaver'],
  },
  {
    icon: Globe,
    title: 'Web App Security',
    desc: 'OWASP Top 10 exploitation — SQL injection, XSS, SSRF, and API security testing.',
    tools: ['SQLMap', 'Nikto', 'ZAP'],
  },
  {
    icon: Key,
    title: 'Cryptography',
    desc: 'Designing and breaking encryption systems — AES-256, RSA, Diffie-Hellman and beyond.',
    tools: ['OpenSSL', 'PyCrypto', 'Hashcat'],
  },
  {
    icon: Lock,
    title: 'Red Team Ops',
    desc: 'Adversary simulation with C2 infrastructure, persistence, and lateral movement.',
    tools: ['Cobalt Strike', 'Sliver', 'Empire'],
  },
  {
    icon: Terminal,
    title: 'Malware Analysis',
    desc: 'Static and dynamic analysis of malicious binaries, shellcode, and packed executables.',
    tools: ['Ghidra', 'IDA Pro', 'x64dbg'],
  },
  {
    icon: Eye,
    title: 'OSINT & Recon',
    desc: 'Comprehensive target intelligence gathering using open source data and tooling.',
    tools: ['TheHarvester', 'Shodan', 'Maltego'],
  },
  {
    icon: Network,
    title: 'Network Defense',
    desc: 'IDS/IPS tuning, firewall hardening, traffic analysis and SOC incident response.',
    tools: ['Snort', 'Zeek', 'Suricata'],
  },
];

const arsenal = [
  'Kali Linux', 'Parrot OS', 'Metasploit', 'Burp Suite Pro',
  'Wireshark', 'Nmap', 'SQLMap', 'Hashcat', 'John the Ripper',
  'Aircrack-ng', 'Ghidra', 'IDA Pro', 'Pwntools', 'Scapy',
  'BloodHound', 'Responder', 'Impacket', 'CrackMapExec',
];

/* ── Individual skill card ── */
function SkillCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.5'] });
  const fromLeft  = index % 2 === 0;
  const x         = useTransform(scrollYProgress, [0, 0.6], [fromLeft ? -50 : 50, 0]);
  const opacity   = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      <div className="card rounded-2xl p-5 h-full flex flex-col gap-3 cursor-default group">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20
            flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
            <domain.icon size={18} className="text-orange-400" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm md:text-base mb-1">{domain.title}</h3>
            <p className="text-white/40 text-xs leading-relaxed">{domain.desc}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
          {domain.tools.map(t => (
            <span key={t} className="font-mono-display text-[10px] px-2 py-0.5 rounded bg-white/[0.04]
              border border-white/[0.06] text-white/40">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Expertise() {
  const arsenalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: arp } = useScroll({ target: arsenalRef, offset: ['start 0.9', 'end 0.6'] });
  const arsenalY = useTransform(arp, [0, 1], [40, 0]);
  const arsenalO = useTransform(arp, [0, 0.5], [0, 1]);

  return (
    <section id="expertise" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-4 md:px-10 rail-offset">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">03 — Expertise</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What I{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #f59e0b)' }}>
              Specialize In
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto">
            Eight domains of offensive &amp; defensive security — from red team operations to network forensics.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {domains.map((d, i) => (
            <SkillCard key={d.title} domain={d} index={i} />
          ))}
        </div>

        {/* Arsenal strip */}
        <motion.div
          ref={arsenalRef}
          style={{ y: arsenalY, opacity: arsenalO }}
        >
          <div className="section-label mb-5 text-center">ARSENAL &amp; TOOLKIT</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {arsenal.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="badge hover:border-orange-400/60 hover:text-orange-300 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
