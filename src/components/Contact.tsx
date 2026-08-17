import { motion } from 'framer-motion';
import { Github, Send, Instagram, Mail, Shield, Terminal } from 'lucide-react';
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
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Send,
      label: 'Telegram',
      handle: '@morningstar_0213',
      url: 'https://t.me/morningstar_0213',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      handle: '@morningstar-0213',
      url: 'https://github.com/morningstar-0213',
      color: 'from-slate-400 to-slate-600',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'bhumiharshihsir12@gmail.com',
      url: 'mailto:bhumiharshihsir12@gmail.com',
      color: 'from-cyan-400 to-teal-500',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-mono text-xs md:text-sm text-cyan-400 font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 mb-4 inline-block shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            SECURE TRANSMISSION CHANNEL
          </span>
          <motion.h2 
            className="font-orbitron text-4xl sm:text-6xl md:text-7xl font-black tracking-wider mb-4 text-glow-cyan"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </motion.h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Available for security consulting, penetration testing assessments, red teaming, and technical collaboration
          </p>
        </motion.div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: isMobile ? 1 : 1.03, y: isMobile ? 0 : -5 }}
              className="cyber-box relative rounded-2xl p-5 md:p-6 transition-all duration-500 flex items-center justify-between group"
            >
              <span className="absolute top-1.5 left-2 font-mono text-[9px] text-cyan-500/60">+</span>
              <span className="absolute top-1.5 right-2 font-mono text-[9px] text-cyan-500/60">+</span>

              <div className="flex items-center gap-4 min-w-0">
                <div className={`p-3.5 rounded-xl bg-gradient-to-r ${link.color} shadow-lg text-white`}>
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-500 text-xs font-mono mb-1">{link.label}</div>
                  <div className="text-white font-mono font-bold text-sm md:text-base group-hover:text-cyan-300 transition-colors truncate">
                    {link.handle}
                  </div>
                </div>
              </div>

              <div className="text-cyan-400 group-hover:translate-x-1.5 transition-transform font-bold text-lg">
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct Email Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cyber-box rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-cyan-400 animate-pulse" />
              <Terminal className="w-12 h-12 text-purple-400" />
            </div>
            
            <h3 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SECURE YOUR DIGITAL ASSETS
            </h3>
            <p className="text-slate-300 text-sm md:text-base mb-8 max-w-xl mx-auto font-sans leading-relaxed">
              Whether you require manual penetration testing, code security auditing, or red team simulations, let's connect.
            </p>
            
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:bhumiharshihsir12@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-orbitron font-bold text-sm tracking-wider rounded-xl shadow-xl border border-cyan-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              START ENCRYPTED CONVERSATION
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-slate-400 font-mono text-xs md:text-sm italic px-4">
            "From the shadows to the spotlight, using darkness to protect the light."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
