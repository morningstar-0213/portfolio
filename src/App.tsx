import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Twitter,
  Instagram,
  Send,
  Mail,
  ChevronDown,
  Terminal,
  Award,
  CheckCircle,
  Shield,
  Wifi,
  Globe,
  Key,
  Lock,
  Eye,
  Network,
  Cpu,
  Sparkles,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Radio,
  FileText,
  Smartphone,
  Fingerprint,
  AlertTriangle,
  WifiOff,
  Unlock,
  Server,
  Database,
  MessageSquare,
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import { PORTFOLIO_DATA, ProjectItem } from './data/portfolioData';
import { CosmicGalaxies } from './components/CosmicGalaxies';
import { ThreeCosmicScene } from './components/ThreeCosmicScene';
import { CentralTimelineTree } from './components/CentralTimelineTree';
import { Navigation } from './components/Navigation';
import { ProjectModal } from './components/ProjectModal';
import { TiltCard } from './components/TiltCard';
import './styles/globals.css';

const domainIcons: Record<string, React.ElementType> = {
  'Penetration Testing': Shield,
  'Wireless Security': Wifi,
  'Web App Security': Globe,
  'Cryptography': Key,
  'Red Team Ops': Lock,
  'Malware Analysis': Terminal,
  'OSINT & Recon': Eye,
  'Network Defense': Network,
};

const projectIcons: Record<string, React.ElementType> = {
  GoodFellas: MessageSquare,
  'Phishing Framework': Mail,
  'Network Jammer': WifiOff,
  'Android RAT Suite': Smartphone,
  'Multi-Protocol Bruteforcer': Key,
  'Advanced Keylogger': Terminal,
  'Message Encryptor': Lock,
  'Web App Scanner': Globe,
  'SQL Injection Toolkit': Database,
  'Port & Service Scanner': Server,
  'Packet Sniffer & Analyzer': Radio,
  'Vulnerability Scanner': AlertTriangle,
  'Digital Forensics Toolkit': Fingerprint,
  'Password Hash Cracker': Unlock,
  'Steganography Tool': FileText,
  'ARP Spoofer & Poisoner': Network,
  'MITM Proxy Framework': Shield,
  'WPA/WPA2 Audit Tool': Wifi,
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { profile, certifications, domains, arsenal, projects, contacts } = PORTFOLIO_DATA;

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#010c05] text-[#f0fdf4] selection:bg-[#ccff00] selection:text-black overflow-x-hidden"
    >
      {/* ── 1. Cosmic Background Realm (Deep Nebulae & Spinning Galaxies) ── */}
      <CosmicGalaxies />

      {/* ── 2. 3D WebGL Cosmic Atmosphere (Rising Stardust & Rotating Spiral Galaxy Core) ── */}
      <ThreeCosmicScene />

      {/* ── 3. Majestic Braided Timeline Tree & Emerging Lateral Branches ── */}
      <CentralTimelineTree containerRef={containerRef} />

      {/* ── 4. Fixed Glowing Navigation Bar ── */}
      <Navigation />

      {/* ── 5. Main Timeline Stream (Zoomed to 80% for Spacious Presentation) ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-2.5 sm:px-8 py-20" style={{ zoom: 0.8 }}>

        {/* ══════════════════════════════════════════════════════════
            01 — HERO / CORE (Tree Apex / Roots)
        ══════════════════════════════════════════════════════════ */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl"
          >
            <TiltCard
              id="hero-card"
              data-tree-branch="left"
              className="flex flex-col items-center text-center p-8 sm:p-10 border-[#00ff88]/40 shadow-[0_0_60px_rgba(0,0,0,0.85)]"
            >
              {/* Status Badge */}
              <div className="section-badge mb-6 cursor-default">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]" />
                <span>{profile.statusBadge}</span>
              </div>

              {/* Avatar with Dual 3D Temporal Rings */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-[#ccff00]/40 border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full border border-[#00ff88]/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-[#00ff88]/70 shadow-[0_0_40px_rgba(0,255,136,0.4)] bg-emerald-950/60">
                  <img
                    src={profileImg}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white mb-2">
                Vishesh{' '}
                <span className="text-gradient-electric drop-shadow-[0_0_35px_rgba(204,255,0,0.5)]">
                  Ranjan
                </span>
              </h1>

              <div className="flex items-center gap-2 mb-3">
                <Terminal size={16} className="text-[#ccff00]" />
                <span className="font-mono-display text-xs sm:text-sm tracking-[0.2em] text-[#a3ff00] uppercase font-semibold">
                  {profile.role}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed mb-6">
                {profile.tagline}
              </p>

              {/* Stats Strip */}
              <div className="flex items-center gap-6 sm:gap-10 mb-8 px-6 py-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                {profile.stats.map((s, idx) => (
                  <React.Fragment key={s.label}>
                    <div className="flex flex-col items-center">
                      <span className="font-mono-display text-xl sm:text-3xl font-bold text-gradient-electric">
                        {s.value}
                      </span>
                      <span className="font-mono-display text-[9px] tracking-widest text-slate-400 uppercase mt-0.5">
                        {s.label}
                      </span>
                    </div>
                    {idx < profile.stats.length - 1 && (
                      <div className="w-[1px] h-8 bg-emerald-500/25" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#ccff00] via-[#00ff88] to-[#14b8a6] hover:from-[#a3ff00] hover:to-[#00ff88] shadow-[0_0_25px_rgba(204,255,0,0.45)] transition-all transform hover:-translate-y-0.5"
                >
                  Explore 18 Projects
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#ccff00] border border-[#00ff88]/40 hover:border-[#ccff00] bg-emerald-950/40 hover:bg-emerald-900/40 transition-all transform hover:-translate-y-0.5"
                >
                  Initiate Contact
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Twitter, href: profile.socials.twitter, label: 'Twitter' },
                  { icon: Instagram, href: profile.socials.instagram, label: 'Instagram' },
                  { icon: Send, href: profile.socials.telegram, label: 'Telegram' },
                  { icon: Mail, href: profile.socials.email, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-950/50 border border-emerald-500/25 text-[#00ff88] hover:text-white hover:border-[#ccff00] hover:bg-emerald-900/40 transition-all shadow-[0_0_15px_rgba(0,255,136,0.18)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="mt-12 flex flex-col items-center gap-1 opacity-70"
          >
            <span className="font-mono-display text-[9px] tracking-widest text-[#ccff00] uppercase">
              Follow The Timeline Branches
            </span>
            <ChevronDown size={14} className="text-[#00ff88]" />
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            02 — CERTIFICATIONS (Alternating Wings: Left & Right Spaced Far)
        ══════════════════════════════════════════════════════════ */}
        <section id="certs" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="section-badge mb-3">02 — Certifications &amp; Credentials</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              Verified{' '}
              <span className="text-gradient-electric">
                Timeline Credentials
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Each certification physically anchored to dedicated branches extending from the central tree trunk.
            </p>
          </motion.div>

          {/* Alternating Cards Spaced Out on Left & Right */}
          <div className="flex flex-col gap-16">
            {certifications.map((cert, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={cert.id}
                  className={`flex w-full ${isLeft ? 'justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]' : 'justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.92 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ amount: 0.3, margin: '-5% 0px -15% 0px' }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <TiltCard
                      id={`cert-${cert.id}`}
                      data-tree-branch={isLeft ? 'left' : 'right'}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-3.5">
                        <span
                          className={`font-mono-display text-xs font-bold px-3 py-1 rounded-full text-black bg-gradient-to-r ${cert.badgeColor} shadow-[0_0_15px_rgba(204,255,0,0.35)]`}
                        >
                          {cert.name}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 font-mono-display text-xs">
                          <Award size={13} className="text-[#00ff88]" />
                          <span>{cert.org} · {cert.year}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                        {cert.full}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {cert.desc}
                      </p>

                      <div className="flex items-center gap-1.5 font-mono-display text-[10px] text-[#00ff88]">
                        <CheckCircle size={12} className="text-[#ccff00]" />
                        <span>Timeline Anchor Verified</span>
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            03 — EXPERTISE & ARSENAL (Alternating Wings: Left & Right Spaced Far)
        ══════════════════════════════════════════════════════════ */}
        <section id="expertise" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="section-badge mb-3">03 — Expertise &amp; Specialization</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              Offensive &amp; Defensive{' '}
              <span className="text-gradient-electric">
                Specialization Matrix
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Eight distinct security domains connected directly to the lateral branches of the tree.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 mb-16">
            {domains.map((domain, idx) => {
              const Icon = domainIcons[domain.title] || Shield;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={domain.title}
                  className={`flex w-full ${isLeft ? 'justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]' : 'justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.92 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ amount: 0.3, margin: '-5% 0px -15% 0px' }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <TiltCard
                      id={`domain-${idx}`}
                      data-tree-branch={isLeft ? 'left' : 'right'}
                      className="group"
                    >
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                          <Icon size={19} />
                        </div>
                        <h3 className="font-bold text-white text-base group-hover:text-[#ccff00] transition-colors">
                          {domain.title}
                        </h3>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {domain.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/15">
                        {domain.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono-display text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[#a3ff00]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Central Arsenal Toolkit Node */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-3xl"
            >
              <TiltCard
                id="arsenal-card"
                data-tree-branch="left"
                className="text-center p-6 sm:p-8"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Cpu size={17} className="text-[#ccff00]" />
                  <h3 className="font-mono-display text-xs sm:text-sm tracking-widest text-[#a3ff00] uppercase font-bold">
                    Operational Arsenal &amp; Tooling
                  </h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  {arsenal.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono-display text-xs px-3.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-[#86efac] hover:border-[#ccff00] hover:text-white hover:bg-emerald-900/40 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            04 — 18 PROJECTS & TOOLS (Alternating Wings: Left & Right Spaced Far)
        ══════════════════════════════════════════════════════════ */}
        <section id="projects" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="section-badge mb-3">04 — Security Projects &amp; Tools</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              18 Security{' '}
              <span className="text-gradient-electric">
                Architectures &amp; Utilities
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-8">
              Click any project card to inspect its full architecture and request private repository access.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono-display text-[11px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#ccff00] to-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.4)]'
                      : 'bg-emerald-950/40 text-slate-300 hover:text-white border border-emerald-500/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Alternating 18 Project Cards Spaced Far Out on Left & Right */}
          <div className="flex flex-col gap-16">
            {filteredProjects.map((project, idx) => {
              const Icon = projectIcons[project.title] || Shield;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`flex w-full ${isLeft ? 'justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]' : 'justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pr-[60%]'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.92 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ amount: 0.25, margin: '-5% 0px -15% 0px' }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <TiltCard
                      id={`project-${project.id}`}
                      data-tree-branch={isLeft ? 'left' : 'right'}
                      onClick={() => setSelectedProject(project)}
                      className={`cursor-pointer group ${
                        project.featured ? 'border-[#ccff00]/70 shadow-[0_0_35px_rgba(204,255,0,0.3)]' : ''
                      }`}
                    >
                      {project.featured && (
                        <div className="absolute top-4 right-4 font-mono-display text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/50 flex items-center gap-1 shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                          <Sparkles size={10} />
                          <span>FLAGSHIP</span>
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="font-mono-display text-[10px] text-[#00ff88] uppercase tracking-widest font-bold">
                            {project.category}
                          </div>
                          <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-[#ccff00] transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {project.tagline && (
                        <div className="font-mono-display text-xs text-[#a3ff00] italic mb-2">
                          &ldquo;{project.tagline}&rdquo;
                        </div>
                      )}

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="font-mono-display text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[#86efac]"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="font-mono-display text-[10px] px-1.5 py-0.5 rounded text-slate-400">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 font-mono-display text-xs text-[#ccff00] group-hover:translate-x-1 transition-all">
                        <span>Inspect architecture</span>
                        <ChevronRight size={13} />
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            05 — CONTACT / SECURE TRANSMISSION (Alternating Left & Right Spaced Far)
        ══════════════════════════════════════════════════════════ */}
        <section id="contact" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="section-badge mb-3">05 — Cosmic Zenith / Transmission</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
              Initialize{' '}
              <span className="text-gradient-electric">
                Secure Transmission
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
              Direct communication channels across the temporal timeline, anchored to the highest branches of the world tree.
            </p>
          </motion.div>

          {/* Contact Elements Alternating Left & Right */}
          <div className="flex flex-col gap-16 mb-24">
            {contacts.map((c, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={c.label}
                  className={`flex w-full ${isLeft ? 'justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]' : 'justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.92 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <TiltCard
                      id={`contact-${idx}`}
                      data-tree-branch={isLeft ? 'left' : 'right'}
                      className="p-6"
                    >
                      <a
                        href={c.href}
                        target={c.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] shrink-0">
                          {c.label.includes('Twitter') ? (
                            <Twitter size={22} />
                          ) : c.label.includes('Instagram') ? (
                            <Instagram size={22} />
                          ) : c.label.includes('Telegram') ? (
                            <Send size={22} />
                          ) : (
                            <Mail size={22} />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-mono-display text-[10px] text-[#00ff88] tracking-wider uppercase font-semibold">
                              {c.label}
                            </span>
                            <span className="font-mono-display text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/20 text-[#ccff00]">
                              {c.badge}
                            </span>
                          </div>
                          <div className="text-white font-bold text-sm sm:text-base truncate group-hover:text-[#ccff00] transition-colors">
                            {c.handle}
                          </div>
                          <div className="text-slate-400 text-xs truncate">
                            {c.sub}
                          </div>
                        </div>

                        <ExternalLink
                          size={16}
                          className="text-slate-500 group-hover:text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                        />
                      </a>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-emerald-500/20">
            <div className="flex items-center justify-center gap-2 font-mono-display text-xs text-[#00ff88]/80 tracking-widest uppercase mb-2">
              <ShieldCheck size={14} className="text-[#ccff00]" />
              <span>Vishesh Ranjan · Timeline Edition</span>
            </div>
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} All timelines secured. Encrypted &amp; Hardened.
            </p>
          </div>
        </section>

      </div>

      {/* ── 6. Interactive Architecture Inspection Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
