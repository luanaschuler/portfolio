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
        backgroundImage: `linear-gradient(135deg, rgba(22, 37, 60, 0.28) 0%, rgba(53, 21, 57, 0.22) 50%, rgba(188, 147, 78, 0.18) 100%), url('/mamorizado.jpg')`,
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
                className="group relative h-[500px] rounded-[40px] overflow-hidden transition-all duration-700 shadow-2xl shadow-black/5"
              >
                {/* 1. FUNDO DO CARD: Textura de Vidro Líquido (Baseado no portfoliobg.png) */}
                {/* Esta imagem cria a base visual iridescente do card */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('/watermarked_img_10031387561657356201.png')`,
                  }}
                />

                {/* 2. OVERLAY DE VIDRO CRISTALINO (Transparência com leve desfoque) */}
                {/* Mantém o aspecto de vidro sem esconder a textura de fundo */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />

                {/* 3. MOLDURA INTERNA E ESPAÇO PARA A FOTO DO PROJETO */}
                {/* Este elemento cria a "moldura" física onde a foto do projeto será inserida */}
                <div className="absolute inset-8 rounded-2xl overflow-hidden border border-white/20 bg-black/5 shadow-inner z-20">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  {/* Adicione a tag <Image /> ou <img> aqui com project.image */}
                  {/* <img src={project.image} alt={project.title} className="..." /> */}

                  {/* Reflexo Especular sobre a moldura da foto */}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 4. CONTEÚDO TEXTUAL (Sobreposto à moldura da foto na parte inferior) */}
                {/* Gradiente sutil para garantir a legibilidade do texto branco */}
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-12 bg-linear-to-t from-black/60 via-transparent to-transparent">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 space-y-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    {/* Categoria do Projeto */}
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                      {project.category}
                    </span>

                    {/* Título do Projeto */}
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* Descrição (Aparece no Hover) */}
                    <motion.div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                      <p className="text-white/80 text-base font-light mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Link para o Projeto */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors"
                    >
                      ANALISAR CASE{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>

                {/* 5. BORDA EXTERNA DE LUZ (Glow) */}
                {/* Define o contorno do card e brilha no hover */}
                <div className="absolute -inset-[1px] rounded-[40px] border border-white/20 group-hover:border-white/30 transition-colors duration-500 z-40 pointer-events-none" />
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
