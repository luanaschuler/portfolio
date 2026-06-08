"use client";

import { PORTFOLIO } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const placeholderImages = ["/barbara.png", "/thiago.png", "/sonho.png"];

function shuffleArray<T>(array: T[]) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImages = placeholderImages;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const activeProject = PORTFOLIO.projects[activeIndex];

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + PORTFOLIO.projects.length) % PORTFOLIO.projects.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO.projects.length);
  };

  return (
    <section
      id="portfolio"
      className="py-10 relative overflow-hidden bg-black/70 backdrop-blur-md border-2 border-accent/30 rounded-2xl "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header (Mantido Original) */}
          <div className="text-center space-y-4 max-w-3xl mx-auto ">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-white font-sans"
            >
              {PORTFOLIO.title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-24 bg-accent rounded-full mx-auto"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/70 max-w-xl mx-auto"
            >
              {PORTFOLIO.description}
            </motion.p>
          </div>
          {/* Portfolio Slider */}
          <motion.div variants={containerVariants} className="space-y-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
              <motion.div
                variants={itemVariants}
                className="lg:w-1/2 rounded-[40px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-2xl p-8"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase">
                  {activeProject.category}
                </span>
                <h3 className="mt-5 text-4xl font-bold text-white leading-tight">
                  {activeProject.title}
                </h3>
                <p className="mt-6 text-white/70 text-lg leading-relaxed">
                  {activeProject.description}
                </p>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-white font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors"
                >
                  ANALISAR CASE
                  <span className="transition-transform">→</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="lg:w-1/2 min-h-[340px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-2xl relative"
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 w-full h-[320px] sm:h-[380px] lg:h-full overflow-hidden">
                  <Image
                    src={sliderImages[activeIndex % sliderImages.length]}
                    alt="Portfolio placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/15"
                >
                  Anterior
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/15"
                >
                  Próximo
                </button>
              </div>

              <div className="flex items-center gap-2">
                {PORTFOLIO.projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-12 bg-white"
                        : "w-4 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements (Mantidos Originais) */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
}
