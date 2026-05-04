"use client";

import { ABOUT } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image"; // Importe o componente Image do Next.js
import Link from "next/link";

export default function About() {
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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary/85 backdrop-blur-md border-2 border-accent/100 rounded-2xl p-8 md:p-12 w-300">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-background/90"
            >
              {ABOUT.title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-35 bg-accent rounded-full"
            ></motion.div>
          </div>

          {/* New Content Grid: Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Photo Column (Left) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl border-2 border-accent/20 w-full max-w-[350px] md:max-w-none">
                <Image
                  src="/lulu.png"
                  alt="Sua Foto"
                  fill
                  className="object-cover grayscale transition-all duration-500"
                />
              </div>
              {/* Elemento decorativo atrás da foto */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-10"></div>
            </motion.div>

            {/* Content Column (Right) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-lg text-background/85 leading-relaxed text-justify">
                {ABOUT.description}
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-background uppercase tracking-wide mb-4">
                  Minha Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Product Design",
                    "Web Development",
                    "Mobile Development",
                    "UI/UX Design",
                  ].map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-accent bg-background/5 p-3 rounded-lg border border-accent/10"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-background/90 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="items-center justify-center flex pt-14">
                  <Link
                    href="/portfolio"
                    className="px-8 py-3.5 bg-secondary/90 text-white rounded-lg hover:bg-primary-hover transition-all duration-300 inline-flex items-center justify-center font-semibold group border-3 border-accent"
                  >
                    {ABOUT.cta_primary}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
