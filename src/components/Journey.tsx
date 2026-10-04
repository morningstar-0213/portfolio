import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const certs = [
  {
    name: 'OSCP',
    full: 'Offensive Security Certified Professional',
    org: 'OffSec',
    year: '2026',
    color: 'from-orange-600 to-red-600',
    border: 'border-orange-500/30',
    desc: 'Hands-on penetration testing certification. 24-hour practical exam in a live vulnerable lab environment.',
    side: 'left',
  },
  {
    name: 'CCIE',
    full: 'CCIE Security / Enterprise',
    org: 'Cisco',
    year: '2026',
    color: 'from-blue-600 to-indigo-700',
    border: 'border-blue-500/30',
    desc: 'Expert-level network security certification. One of the most respected technical credentials worldwide.',
    side: 'right',
  },
  {
    name: 'eJPT',
    full: 'eLearnSecurity Junior Penetration Tester',
    org: 'INE Security',
    year: '2026',
    color: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/30',
    desc: 'Practical entry-level penetration testing certification with real-world simulated environments.',
    side: 'left',
  },
  {
    name: 'CyberOps',
    full: 'Cisco Certified CyberOps Associate',
    org: 'Cisco',
    year: '2025',
    color: 'from-violet-600 to-purple-700',
    border: 'border-violet-500/30',
    desc: 'SOC analyst skills — threat detection, incident response, and security monitoring operations.',
    side: 'right',
  },
  {
    name: 'CEH',
    full: 'Cisco Networking Academy Ethical Hacker',
    org: 'Cisco',
    year: '2025',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/30',
    desc: 'Industry-recognized ethical hacking methodology covering attack vectors and countermeasures.',
    side: 'left',
  },
];

/* ── Single certification card with parallax ── */
function CertCard({ cert, index }: { cert: typeof certs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.4'] });

  const fromLeft  = cert.side === 'left';
  const x         = useTransform(scrollYProgress, [0, 0.5], [fromLeft ? -70 : 70, 0]);
  const opacity   = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const scale     = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <div
      ref={ref}
      className={`flex w-full ${fromLeft ? 'justify-start' : 'justify-end'} md:px-0`}
    >
      <motion.div
        style={{ x, opacity, scale }}
        className={`w-full md:w-[calc(50%-2rem)] card rounded-2xl p-6 ${cert.border} cursor-default`}
      >
        {/* Year + org */}
        <div className="flex items-center justify-between mb-4">
          <div className={`px-3 py-1 rounded-full text-[11px] font-mono-display font-bold text-white bg-gradient-to-r ${cert.color}`}>
            {cert.name}
          </div>
          <div className="flex items-center gap-1.5">
            <Award size={12} className="text-orange-400/60" />
            <span className="font-mono-display text-[10px] text-white/30 tracking-widest">{cert.org} · {cert.year}</span>
          </div>
        </div>

        <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">{cert.full}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{cert.desc}</p>
      </motion.div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-4 md:px-10 rail-offset">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="section-label mb-3">02 — Certifications</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Verified &amp;{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #f59e0b)' }}>
              Certified
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-lg mx-auto">
            Internationally recognized credentials in offensive security, network engineering &amp; cyber operations.
          </p>
        </motion.div>

        {/* ── Timeline spine + cards ── */}
        <div className="relative flex flex-col gap-10 md:gap-14">
          {/* Central spine line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.25) 15%, rgba(249,115,22,0.15) 85%, transparent)' }}
          />

          {certs.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}

          {/* "And more" card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center"
          >
            <div className="card rounded-2xl px-8 py-5 border-orange-500/20 flex items-center gap-3">
              <Star size={16} className="text-orange-400" />
              <span className="font-mono-display text-sm text-white/50 tracking-widest">AND MANY MORE TO COME...</span>
              <Star size={16} className="text-orange-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
