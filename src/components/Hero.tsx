import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Instagram, Send, ChevronDown } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

/* ─── Floating particle chip ─── */
function Chip({ children, delay = 0, x = 0, y = 0 }: {
  children: React.ReactNode; delay?: number; x?: number; y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 180 }}
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%` }}
      whileHover={{ scale: 1.08 }}
      className="font-mono-display text-[10px] tracking-widest px-3 py-1.5 rounded-full
        bg-[#0d1224] border border-orange-500/25 text-orange-300/80 whitespace-nowrap shadow-xl cursor-default"
    >
      {children}
    </motion.div>
  );
}

/* ─── Stat pill ─── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-mono-display text-xl md:text-2xl font-bold text-orange-400">{value}</span>
      <span className="font-mono-display text-[10px] tracking-widest text-white/35 uppercase">{label}</span>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  /* Parallax layers */
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const avatarY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14"
    >
      {/* ── Background grid + gradient ── */}
      <motion.div
        className="absolute inset-0 grid-bg"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050810]" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
      />

      {/* ── Floating Tech Chips (desktop) ── */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Chip x={5} y={22} delay={0.8}>AES-256</Chip>
        <Chip x={7} y={55} delay={1.0}>Zero-Trust</Chip>
        <Chip x={4} y={76} delay={1.2}>OSCP</Chip>
        <Chip x={80} y={20} delay={0.9}>Metasploit</Chip>
        <Chip x={79} y={48} delay={1.1}>Burp Suite</Chip>
        <Chip x={81} y={72} delay={1.3}>Wireshark</Chip>
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 md:px-10 max-w-4xl mx-auto"
        style={{ y: titleY, opacity }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono-display text-[11px] tracking-[0.22em] text-green-400/80 uppercase">
            Available for Engagements
          </span>
        </motion.div>

        {/* Avatar with parallax */}
        <motion.div
          style={{ y: avatarY }}
          className="relative mb-8"
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border border-orange-500/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          {/* Second ring */}
          <motion.div
            className="absolute -inset-6 rounded-full border border-orange-400/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-orange-500/50 orange-glow">
            <img src={profileImg} alt="Vishesh Ranjan" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-3 leading-none"
        >
          Vishesh
          <br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #f59e0b, #f97316)', backgroundSize: '200%' }}>
            Ranjan
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="font-mono-display text-xs md:text-sm tracking-[0.2em] text-white/40 uppercase mb-2"
        >
          Ethical Hacker &amp; Security Specialist
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base md:text-lg text-white/55 max-w-xl leading-relaxed mb-10"
        >
          Building tools to break systems — so others can't.
          Offensive security research, red team operations &amp; network defense.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-8 md:gap-14 mb-10 px-6 md:px-12 py-4 rounded-2xl bg-[#090d1a]/80 border border-white/[0.05] backdrop-blur-md"
        >
          <Stat value="18+" label="Projects" />
          <div className="w-px h-8 bg-white/[0.06]" />
          <Stat value="5+" label="Certs" />
          <div className="w-px h-8 bg-white/[0.06]" />
          <Stat value="3+" label="Yrs Exp" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-black
              bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400
              transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white/80
              border border-white/10 hover:border-orange-500/40 hover:text-white
              bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Twitter, href: 'https://x.com/MORNINGSTAR0213', label: 'Twitter' },
            { icon: Instagram, href: 'https://instagram.com/morningstar0213', label: 'Instagram' },
            { icon: Send, href: 'https://t.me/morningstar_0213', label: 'Telegram' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08]
                text-white/40 hover:text-orange-400 hover:border-orange-500/40
                bg-white/[0.03] hover:bg-orange-500/[0.08] transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll down nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <span className="font-mono-display text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={14} className="text-white/20" />
      </motion.div>
    </section>
  );
}