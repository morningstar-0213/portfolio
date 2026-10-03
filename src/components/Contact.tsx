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
      handle: 'bhumiharshihsir12@gmail.com',
      url: 'mailto:bhumiharshihsir12@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-4 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white mb-4">
            Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Available for security consulting, penetration testing assessments, red teaming, and technical collaboration
          </p>
        </motion.div>

        {/* Social Link Cards (Alternating Left/Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
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
                  x: isMobile ? 0 : isLeft ? -80 : 80,
                  y: isMobile ? 30 : 0 
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 90, damping: 20 }}
                whileHover={{ scale: 1.02 }}
                className="minimal-glass relative rounded-2xl p-6 transition-all duration-300 flex items-center justify-between group hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-500 text-xs font-mono mb-1">{link.label}</div>
                    <div className="text-white font-sans font-semibold text-sm md:text-base group-hover:text-cyan-300 transition-colors truncate">
                      {link.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="minimal-glass rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
              <Shield className="w-10 h-10" />
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-3">
            Secure Your Digital Infrastructure
          </h3>
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-lg mx-auto font-sans leading-relaxed">
            Whether you require manual penetration testing, code auditing, or red team simulations, let's connect.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:bhumiharshihsir12@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Start Conversation</span>
          </motion.a>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-mono text-xs italic px-4">
            "From the shadows to the spotlight, using darkness to protect the light."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
