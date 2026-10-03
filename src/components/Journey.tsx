import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, Terminal } from 'lucide-react';
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
    <section id="journey" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Stream of Credentials
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white mb-3 tracking-tight">
            Journey & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Validated technical expertise through practical certifications along the stream of light
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-10 md:space-y-16">
          {certifications.map((cert, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={cert.id} className="relative flex items-center justify-between md:flex-row flex-col">
                {/* Center Node Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 z-20 hidden md:block">
                  <span className="absolute inset-0.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Card Container */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : isLeft ? -70 : 70,
                    y: isMobile ? 30 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`w-full md:w-[46%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  <div className="luxury-glass relative rounded-2xl p-5 md:p-7 group hover:border-emerald-500/40 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      {cert.featured && (
                        <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full font-mono text-[10px] font-semibold text-emerald-300">
                          {cert.level}
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs text-emerald-400 font-semibold">{cert.issuer}</span>
                    <h3 className="text-lg md:text-xl font-sans font-bold text-white mt-1 mb-1 group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-mono mb-3">{cert.code}</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-5">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {cert.skills.map((skill, i) => (
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
              </div>
            );
          })}

          {/* "And Many More To Come..." Card */}
          <div className="relative flex items-center justify-between md:flex-row flex-col">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 z-20 hidden md:block">
              <span className="absolute inset-0.5 rounded-full bg-indigo-400 animate-pulse" />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: isMobile ? 0 : 70,
                y: isMobile ? 30 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full md:w-[46%] md:ml-auto"
            >
              <div className="luxury-glass relative rounded-2xl p-5 md:p-7 group hover:border-indigo-500/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-400">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full font-mono text-[10px] font-semibold text-indigo-300">
                    CONTINUOUS RESEARCH
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-sans font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  And Many More To Come...
                </h3>
                <p className="text-indigo-400 text-xs font-mono mb-3">Ongoing Labs & Advanced Certifications</p>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans mb-5">
                  Constantly expanding offensive security knowledge through advanced OffSec labs, HackTheBox Pro labs, zero-day research, and preparing for upcoming advanced certifications.
                </p>
                <div className="pt-3 border-t border-indigo-500/20 text-xs font-mono text-indigo-300 font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
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
