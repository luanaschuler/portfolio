"use client";

import { CONTACT, WHATSAPP_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              {CONTACT.title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-accent rounded-full mx-auto"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/60"
            >
              {CONTACT.description}
            </motion.p>
          </div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href={WHATSAPP_CONFIG.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="glass p-8 rounded-xl text-center space-y-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-6xl">💬</div>
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                WhatsApp
              </h3>
              <p className="text-foreground/60 text-sm">
                Chat with me directly on WhatsApp
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Open Chat
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href={`mailto:${CONTACT.email}`}
              whileHover={{ y: -4 }}
              className="glass p-8 rounded-xl text-center space-y-4 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="text-6xl">✉️</div>
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Email
              </h3>
              <p className="text-foreground/60 text-sm">
                Send me an email with your project details
              </p>
              <div className="pt-4 break-all">
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all text-xs sm:text-sm">
                  {CONTACT.email}
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-3 pt-6 border-t border-border"
          >
            <p className="text-sm text-foreground/50 uppercase tracking-wide font-semibold">
              Or Call
            </p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-3xl font-bold text-primary hover:text-primary-hover transition-colors"
            >
              {CONTACT.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 right-1/3 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}
