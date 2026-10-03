import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Instagram, Send, Mail, ExternalLink } from 'lucide-react';

const contacts = [
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@MORNINGSTAR0213',
    sub: 'Follow for security research & updates',
    href: 'https://x.com/MORNINGSTAR0213',
    color: 'from-sky-500/15 to-blue-600/10',
    border: 'border-sky-500/20 hover:border-sky-400/50',
    iconColor: 'text-sky-400',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@morningstar0213',
    sub: 'DM for project code access & collabs',
    href: 'https://instagram.com/morningstar0213',
    color: 'from-pink-500/15 to-purple-600/10',
    border: 'border-pink-500/20 hover:border-pink-400/50',
    iconColor: 'text-pink-400',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: '@morningstar_0213',
    sub: 'Direct encrypted communication',
    href: 'https://t.me/morningstar_0213',
    color: 'from-blue-500/15 to-cyan-600/10',
    border: 'border-blue-500/20 hover:border-blue-400/50',
    iconColor: 'text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'visheshranjan0213@gmail.com',
    sub: 'For professional inquiries & pentests',
    href: 'mailto:visheshranjan0213@gmail.com',
    color: 'from-orange-500/15 to-amber-600/10',
    border: 'border-orange-500/20 hover:border-orange-400/50',
    iconColor: 'text-orange-400',
  },
];

function ContactCard({ c, index }: { c: typeof contacts[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.5'] });
  const fromLeft = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 0.6], [fromLeft ? -50 : 50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }}>
      <a
        href={c.href}
        target={c.href.startsWith('mailto') ? undefined : '_blank'}
        rel="noopener noreferrer"
        className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br ${c.color}
          border ${c.border} transition-all duration-300 group block`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.07]
          flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <c.icon size={20} className={c.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono-display text-[10px] tracking-widest text-white/30 mb-0.5">{c.label}</div>
          <div className="font-bold text-white text-sm truncate">{c.handle}</div>
          <div className="text-white/40 text-xs mt-0.5">{c.sub}</div>
        </div>
        <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
      </a>
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-4 md:px-10 rail-offset">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3">05 — Contact</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #f97316, #f59e0b)' }}>
              Connect
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-md mx-auto">
            Available for penetration testing engagements, red team operations, and security consulting.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} c={c} index={i} />
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 pt-10 border-t border-white/[0.05]"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
            <span className="font-mono-display font-bold text-[11px] text-black">VR</span>
          </div>
          <p className="font-mono-display text-[10px] tracking-widest text-white/20 text-center">
            © 2025 VISHESH RANJAN · ETHICAL HACKER &amp; SECURITY SPECIALIST<br />
            ALL PROJECT CODE IS PRIVATE — DM ON INSTAGRAM TO REQUEST ACCESS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
