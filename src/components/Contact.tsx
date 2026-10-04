import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter, Instagram, Send, Mail, ExternalLink } from 'lucide-react';
import { useSectionRegistry } from '../context/SectionRegistry';

const contacts = [
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@MORNINGSTAR0213',
    sub: 'Follow for security research & updates',
    href: 'https://x.com/MORNINGSTAR0213',
    color: 'from-sky-500/15 to-emerald-600/10',
    border: 'border-sky-500/20 hover:border-emerald-400/50',
    iconColor: 'text-sky-400',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@morningstar0213',
    sub: 'DM for project code access & collabs',
    href: 'https://instagram.com/morningstar0213',
    color: 'from-emerald-500/15 to-teal-600/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: '@morningstar_0213',
    sub: 'Direct encrypted communication',
    href: 'https://t.me/morningstar_0213',
    color: 'from-teal-500/15 to-cyan-600/10',
    border: 'border-teal-500/20 hover:border-teal-400/50',
    iconColor: 'text-teal-400',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'visheshranjan0213@gmail.com',
    sub: 'For professional inquiries & pentests',
    href: 'mailto:visheshranjan0213@gmail.com',
    color: 'from-emerald-600/15 to-green-700/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    iconColor: 'text-emerald-300',
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
          border ${c.border} transition-all duration-300 group block hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.07]
          flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <c.icon size={20} className={c.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono-display text-[10px] tracking-widest text-emerald-400/60 mb-0.5">{c.label}</div>
          <div className="font-bold text-white text-sm truncate">{c.handle}</div>
          <div className="text-white/45 text-xs mt-0.5">{c.sub}</div>
        </div>
        <ExternalLink size={14} className="text-white/20 group-hover:text-emerald-400 transition-colors shrink-0" />
      </a>
    </motion.div>
  );
}

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { registerSection, unregisterSection } = useSectionRegistry();

  useEffect(() => {
    if (ref.current) {
      registerSection({ id: 'contact', label: 'Contact', ref });
    }
    return () => unregisterSection('contact');
  }, [registerSection, unregisterSection]);

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-4 md:px-10 rail-offset">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-3 text-emerald-400">05 — Contact</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Connect
            </span>
          </h2>
          <p className="text-white/45 text-sm md:text-base max-w-md mx-auto">
            Available for authorized penetration tests, red team engagements, and security consulting.
          </p>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {contacts.map((c, i) => (
            <ContactCard key={c.label} c={c} index={i} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-10 border-t border-emerald-500/15">
          <div className="font-mono-display text-xs text-emerald-400/50 tracking-widest uppercase mb-2">
            Vishesh Ranjan · Yggdrasil Timeline Edition
          </div>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} All rights reserved. Encrypted &amp; Secured.
          </p>
        </div>
      </div>
    </section>
  );
}
