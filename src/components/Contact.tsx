import { motion } from 'framer-motion';
import { Github, Send, Instagram, Mail, Shield, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@morningstar0213',
      url: 'https://instagram.com/morningstar0213',
    },
    {
      icon: Send,
      label: 'Telegram',
      handle: '@morningstar_0213',
      url: 'https://t.me/morningstar_0213',
    },
    {
      icon: Github,
      label: 'GitHub',
      handle: '@morningstar-0213',
      url: 'https://github.com/morningstar-0213',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'visheshranjan0213@gmail.com',
      url: 'mailto:visheshranjan0213@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3 inline-block">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white mb-3 tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
            Available for security consulting, penetration testing assessments, red teaming, and technical collaboration
          </p>
        </motion.div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((link, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  x: isMobile ? 0 : isLeft ? -50 : 50,
                  y: isMobile ? 25 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
                className="luxury-glass relative rounded-2xl p-5 md:p-6 transition-all duration-300 flex items-center justify-between group hover:border-emerald-500/40"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-500 text-xs font-mono mb-0.5">{link.label}</div>
                    <div className="text-white font-sans font-semibold text-xs sm:text-sm group-hover:text-emerald-300 transition-colors truncate">
                      {link.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="luxury-glass rounded-3xl p-6 md:p-10 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Shield className="w-8 h-8" />
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-2">
            Secure Your Digital Infrastructure
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-md mx-auto font-sans leading-relaxed">
            Whether you require manual penetration testing, code auditing, or red team simulations, let's connect.
          </p>
          
          <a
            href="mailto:visheshranjan0213@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Start Conversation</span>
          </a>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500 font-mono text-xs italic px-4">
            "From the shadows to the spotlight, using darkness to protect the light."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
