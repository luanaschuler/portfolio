"use client";

import { PORTFOLIO } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
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

  return (
    <section
      id="portfolio"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(22, 37, 60, 0.28) 0%, rgba(53, 21, 57, 0.22) 50%, rgba(188, 147, 78, 0.18) 100%), url('/bgmain.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundBlendMode: "overlay",
      }}
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
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-foreground"
            >
              {PORTFOLIO.title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-24 bg-accent rounded-full mx-auto"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-xl text-foreground/60 max-w-xl mx-auto"
            >
              {PORTFOLIO.description}
            </motion.p>
          </div>
          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PORTFOLIO.projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-3xl overflow-hidden transition-all duration-700"
              >
                {/* 1. FUNDO LÍQUIDO DINÂMICO (Muito sutil para não esconder o portfoliobg.png) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 opacity-30 transition-all duration-1000 group-hover:scale-150 group-hover:opacity-60" />

                {/* 2. O VIDRO CRISTALINO (Blur reduzido drasticamente para transparência) */}
                {/* backdrop-blur-sm (4px) ou [8px] permite ver o fundo quase perfeitamente */}
                <div className="absolute inset-0 backdrop-blur-[1.3px] backdrop-saturate-[1.4] bg-white/[0.005] transition-all duration-500 group-hover:bg-white/[0.04]" />

                {/* 3. REFLEXO ESPECULAR (Essencial quando o blur é baixo) */}
                {/* Isso cria a "cara" de vidro sem precisar de desfoque */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-white/[0.05] to-transparent opacity-40" />

                {/* 4. BORDA DE LUZ (300% maior no hover para definir o limite) */}
                <div className="absolute -inset-[1px] rounded-3xl border border-white/5 group-hover:border-white/20 group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.3)] transition-all duration-500 z-20" />

                {/* 5. CONTEÚDO (Com sombra para legibilidade no vidro transparente) */}
                <div className="relative z-30 h-full flex flex-col justify-between p-10">
                  <div>
                    <span className="inline-block px-3 py-1 bg-black/10 border border-white/20 rounded-full text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-4xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 drop-shadow-md">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 pt-4 text-white font-bold group/link drop-shadow-md"
                    >
                      VIEW PROJECT
                      <span className="group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* 6. BORDA INTERNA (Reflexo de quina) */}
                <div className="absolute inset-0 rounded-3xl ring-[1px] ring-inset ring-white/20 pointer-events-none group-hover:ring-white/40" />
              </motion.div>
            ))}
          </motion.div>
          {/* View All Projects CTA (Mantido Original) */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <Link
              href="/"
              className="group px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-hover transition-all duration-300 font-semibold flex items-center gap-3"
            >
              Back to Home
              <span className="group-hover:translate-x-1 transition-transform">
                ←
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements (Mantidos Originais) */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
}
