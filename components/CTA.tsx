"use client";

import { CTA, WHATSAPP_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="cta"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #16253C 0%, #351539 50%, #BC934E 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            {CTA.headline}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {CTA.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href={WHATSAPP_CONFIG.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-primary rounded-lg hover:bg-background transition-all duration-300 font-semibold inline-flex items-center justify-center group"
            >
              {CTA.button}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-semibold inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
