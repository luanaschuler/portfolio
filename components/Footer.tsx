"use client";

import { FOOTER, WHATSAPP_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-4"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-hover rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LP</span>
              </div>
              <span className="font-semibold text-white">Luana</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Creating premium digital experiences for brands that dare to be
              different.
            </p>
            <div className="flex gap-3 pt-2">
              {FOOTER.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_CONFIG.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60"
          >
            <p>{FOOTER.copyright}</p>
            <p>
              Designed & Developed with <span className="text-accent">💜</span>{" "}
              by Luana
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
