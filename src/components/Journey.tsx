import { motion } from 'framer-motion';
import { ShieldCheck, Award, Terminal, Cpu, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  level: string;
  description: string;
  skills: string[];
  color: string;
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    id: 'oscp',
    title: 'OSCP',
    issuer: 'OffSec (Offensive Security)',
    code: 'Offensive Security Certified Professional',
    level: 'Expert / Hands-On',
    description: 'Industry-standard 24-hour practical penetration testing exam demonstrating deep expertise in manual exploitation, active directory attacks, privilege escalation, and custom buffer overflows.',
    skills: ['Active Directory Attacks', 'Buffer Overflow', 'Privilege Escalation', 'Manual Exploitation', 'Pivoting'],
    color: 'border-red-500/50 shadow-red-500/20 text-red-400',
    featured: true,
  },
  {
    id: 'ccie',
    title: 'CCIE Security / Enterprise',
    issuer: 'Cisco Systems',
    code: 'Cisco Certified Internetwork Expert',
    level: 'Expert Level',
    description: 'Premier expert-level credential validating deep architecture, deployment, and troubleshooting of enterprise network infrastructure, complex security protocols, and perimeter defense.',
    skills: ['Enterprise Networking', 'BGP / OSPF', 'VPN & IPSec', 'Network Architecture', 'Infrastructure Security'],
    color: 'border-cyan-500/50 shadow-cyan-500/20 text-cyan-400',
    featured: true,
  },
  {
    id: 'ejpt',
    title: 'eJPT',
    issuer: 'INE Security (eLearnSecurity)',
    code: 'eLearnSecurity Junior Penetration Tester',
    level: 'Professional Pentester',
    description: 'Rigorous 100% practical penetration testing certification proving hands-on skills in network scanning, web application vulnerability assessment, exploitation, and post-exploitation.',
    skills: ['Network Scanning', 'Metasploit', 'Web Pentesting', 'Vulnerability Audits', 'Report Writing'],
    color: 'border-purple-500/50 shadow-purple-500/20 text-purple-400',
  },
  {
    id: 'cyberops',
    title: 'Cisco Certified CyberOps Associate',
    issuer: 'Cisco Systems',
    code: 'CyberOps Associate Certification',
    level: 'SOC & Incident Response',
    description: 'Validates core tactical knowledge in Security Operations Center (SOC) workflows, threat analysis, digital forensics principles, network monitoring, and incident response handling.',
    skills: ['SOC Analysis', 'Security Monitoring', 'Incident Response', 'Threat Intelligence', 'SIEM Logs'],
    color: 'border-blue-500/50 shadow-blue-500/20 text-blue-400',
  },
  {
    id: 'cisco-eth',
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    code: 'Cisco Networking Academy Ethical Hacker',
    level: 'Offensive Security Fundamentals',
    description: 'Comprehensive certification covering offensive security methodology, reconnaissance, threat vector identification, network vulnerability auditing, and countermeasure implementation.',
    skills: ['Reconnaissance', 'Vulnerability Auditing', 'Countermeasures', 'Ethical Hacking', 'System Hardening'],
    color: 'border-emerald-500/50 shadow-emerald-500/20 text-emerald-400',
  },
];

export function Journey() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="journey" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Background glow elements */}
      {!isMobile && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[110px] pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 mb-4 inline-flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Award className="w-4 h-4 text-cyan-400" />
            VERIFIED CREDENTIAL VAULT
          </span>
          <motion.h2
            className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-wider mb-4 text-glow-cyan"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              JOURNEY & CERTIFICATIONS
            </span>
          </motion.h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
            Validated technical expertise through industry-recognized practical certifications and continuous security research
          </p>
        </motion.div>

        {/* Certifications Holographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`cyber-box relative h-full rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 flex flex-col justify-between group ${cert.color}`}
            >
              {/* Corner HUD Plus Brackets */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-cyan-500/60">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-cyan-500/60">+</span>
              <span className="absolute bottom-2 left-2 font-mono text-[10px] text-cyan-500/60">+</span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-cyan-500/60">+</span>

              <div>
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-400/60 transition-colors">
                    <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  </div>
                  {cert.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-orbitron text-[10px] font-bold text-white tracking-wider shadow-md">
                      EXPERT LEVEL
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">{cert.issuer}</span>
                </div>

                <h3 className="font-orbitron text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-slate-400 text-xs font-mono mb-4">
                  {cert.code}
                </p>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-950/80 border border-slate-800 rounded-md text-[11px] text-cyan-200 font-mono group-hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* "And Many More To Come..." Holographic Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: certifications.length * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="cyber-box relative h-full rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 flex flex-col justify-between group border-purple-500/50 shadow-purple-500/20"
          >
            <span className="absolute top-2 left-2 font-mono text-[10px] text-purple-500/60">+</span>
            <span className="absolute top-2 right-2 font-mono text-[10px] text-purple-500/60">+</span>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40">
                  <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <span className="px-3 py-1 bg-purple-900/70 border border-purple-500/50 rounded-full font-orbitron text-[10px] font-bold text-purple-300 tracking-wider">
                  ALWAYS LEARNING
                </span>
              </div>

              <h3 className="font-orbitron text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                And Many More To Come...
              </h3>

              <p className="text-purple-400 text-xs font-mono mb-4">
                Continuous Research & Advanced Specialization
              </p>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                Constantly expanding offensive security knowledge through advanced OffSec labs, HackTheBox Pro labs, zero-day research, and preparing for upcoming advanced certifications.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-500/30">
              <div className="flex items-center gap-2 font-mono text-xs text-purple-300 font-bold">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Status: In Continuous Pursuit of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Practical Verification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cyber-box p-8 md:p-10 rounded-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-cyan-950 border border-cyan-500/40">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-orbitron text-xl font-bold text-white">
                  PRACTICAL HANDS-ON VERIFICATION
                </h4>
                <p className="text-slate-300 text-sm font-sans mt-1">
                  Every certification represents real-world lab environments, active exploitation, and infrastructure design.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-orbitron text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex-shrink-0 border border-cyan-400 tracking-wider"
            >
              <span>GET IN TOUCH</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
