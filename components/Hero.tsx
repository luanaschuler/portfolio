"use client";

import { HERO, WHATSAPP_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl text-right lg:text-7xl font-bold font-serif leading-tight text-foreground"
            >
              {HERO.headline} <span className="text-accent italic">{HERO.part1}</span> <span>{HERO.part2}</span> <span className="text-accent italic">{HERO.part3}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-right text-foreground/70 max-w-2xl font-sans leading-relaxed"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-16 pt-4"
            >
              <Link
                href="/portfolio"
                className="px-8 py-3.5 bg-secondary/90 text-white rounded-lg hover:bg-primary-hover transition-all duration-300 inline-flex items-center justify-center font-semibold group border-3 border-accent"
              >
                {HERO.cta_primary}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              <a
                href={WHATSAPP_CONFIG.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-3 bg-secondary/90 border-accent text-white hover:bg-primary hover:text-white rounded-lg transition-all duration-300 inline-flex items-center justify-center font-semibold"
              >
                {HERO.cta_secondary}
              </a>
            </motion.div>
          </div>

          {/* Image Placeholder - Reserved Space */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden glass group pt-20"
          >
            <div
              className="w-full h-full flex items-center justify-center bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('/iniciais-bg.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
