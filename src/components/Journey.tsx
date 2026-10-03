import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  level: string;
  description: string;
  skills: string[];
  featured?: boolean;
}

const certifications: Certification[] = [
  {
    id: 'oscp',
    title: 'OSCP',
    issuer: 'OffSec (Offensive Security)',
    code: 'Offensive Security Certified Professional',
    level: 'Expert Hands-On',
    description: 'Industry-standard 24-hour practical penetration testing exam demonstrating deep expertise in manual exploitation, active directory attacks, privilege escalation, and custom buffer overflows.',
    skills: ['Active Directory Attacks', 'Buffer Overflow', 'Privilege Escalation', 'Manual Exploitation', 'Pivoting'],
    featured: true,
  },
  {
    id: 'ccie',
    title: 'CCIE Security / Enterprise',
    issuer: 'Cisco Systems',
    code: 'Cisco Certified Internetwork Expert',
    level: 'Expert Architecture',
    description: 'Premier expert-level credential validating deep architecture, deployment, and troubleshooting of enterprise network infrastructure, complex security protocols, and perimeter defense.',
    skills: ['Enterprise Networking', 'BGP / OSPF', 'VPN & IPSec', 'Network Architecture', 'Infrastructure Security'],
    featured: true,
  },
  {
    id: 'ejpt',
    title: 'eJPT',
    issuer: 'INE Security (eLearnSecurity)',
    code: 'eLearnSecurity Junior Penetration Tester',
    level: 'Practical Pentester',
    description: 'Rigorous 100% practical penetration testing certification proving hands-on skills in network scanning, web application vulnerability assessment, exploitation, and post-exploitation.',
    skills: ['Network Scanning', 'Metasploit', 'Web Pentesting', 'Vulnerability Audits', 'Report Writing'],
  },
  {
    id: 'cyberops',
    title: 'Cisco Certified CyberOps Associate',
    issuer: 'Cisco Systems',
    code: 'CyberOps Associate Certification',
    level: 'SOC & Threat Response',
    description: 'Validates core tactical knowledge in Security Operations Center (SOC) workflows, threat analysis, digital forensics principles, network monitoring, and incident response handling.',
    skills: ['SOC Analysis', 'Security Monitoring', 'Incident Response', 'Threat Intelligence', 'SIEM Logs'],
  },
  {
    id: 'cisco-eth',
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    code: 'Cisco Networking Academy Ethical Hacker',
    level: 'Offensive Security',
    description: 'Comprehensive certification covering offensive security methodology, reconnaissance, threat vector identification, network vulnerability auditing, and countermeasure implementation.',
    skills: ['Reconnaissance', 'Vulnerability Auditing', 'Countermeasures', 'Ethical Hacking', 'System Hardening'],
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
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 inline-flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            Stream of Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white mb-4">
            Journey & Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Validated technical expertise through industry-recognized practical certifications along the stream of light
          </p>
        </motion.div>

        {/* Timeline Alternating Left/Right Stream Cards */}
        <div className="relative space-y-12 md:space-y-20">
          {certifications.map((cert, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={cert.id} className="relative flex items-center justify-between md:flex-row flex-col">
                {/* Central Stream Node Connector Point */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_#06b6d4] z-20 hidden md:block">
                  <span className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Card Wrapper with Left / Right Scroll Animation */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: isMobile ? 0 : isLeft ? -120 : 120,
                    y: isMobile ? 40 : 0
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ 
                    duration: 0.7, 
                    type: 'spring', 
                    stiffness: 90, 
                    damping: 20 
                  }}
                  className={`w-full md:w-[45%] ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="minimal-glass relative rounded-2xl p-6 md:p-8 group hover:border-cyan-500/50 transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                      {cert.featured && (
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full font-mono text-[11px] font-bold text-cyan-300">
                          {cert.level}
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs text-cyan-400 font-semibold">{cert.issuer}</span>
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white mt-1 mb-1 group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-mono mb-4">{cert.code}</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                      {cert.skills.map((skill, i) => (
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
              </div>
            );
          })}

          {/* "And Many More To Come..." Card (Appears from Right) */}
          <div className="relative flex items-center justify-between md:flex-row flex-col">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-purple-400 shadow-[0_0_12px_#a855f7] z-20 hidden md:block">
              <span className="absolute inset-1 rounded-full bg-purple-400 animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 120, y: isMobile ? 40 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 90, damping: 20 }}
              className="w-full md:w-[45%] md:ml-auto"
            >
              <div className="minimal-glass relative rounded-2xl p-6 md:p-8 group hover:border-purple-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-400">
                    <Sparkles className="w-7 h-7 animate-pulse" />
                  </div>
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full font-mono text-[11px] font-bold text-purple-300">
                    CONTINUOUS RESEARCH
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  And Many More To Come...
                </h3>
                <p className="text-purple-400 text-xs font-mono mb-4">Ongoing Advanced Labs & Certifications</p>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-6">
                  Constantly expanding offensive security knowledge through advanced OffSec labs, HackTheBox Pro labs, zero-day research, and preparing for upcoming advanced certifications.
                </p>
                <div className="pt-4 border-t border-purple-500/20 text-xs font-mono text-purple-300 font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Status: Continuous Pursuit of Mastery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
