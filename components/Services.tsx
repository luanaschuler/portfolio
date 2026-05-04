"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Services() {
  // Duplicamos a lista para criar o efeito visual de continuidade infinita
  const duplicatedServices = [...SERVICES, ...SERVICES];

  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Serviços
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
          <p className="text-lg text-foreground/60">
            Soluções completas para o seu negócio
          </p>
        </div>
      </div>

      {/* Container do Slider */}
      <div className="flex relative items-center">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // Move metade do caminho (uma lista completa)
          }}
          transition={{
            ease: "linear",
            duration: 30, // Velocidade: quanto maior, mais lento
            repeat: Infinity,
          }}
          // Pausa ao passar o mouse
          whileHover={{ animationPlayState: "pause" }}
        >
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="w-[240px] md:w-[400px] shrink-0"
            >
              <div
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="group relative p-4 rounded-2xl h-[250px] flex flex-col justify-end overflow-hidden border border-white/10 shadow-2xl"
              >
                {/* Overlay base */}
                <div className="absolute inset-0 transition-colors duration-500" />

                {/* Efeito Glass */}
                <div className="relative z-10 p-4 rounded-xl bg-background/10 backdrop-blur-sm transition-all duration-200 group-hover:bg-black/10 group-hover:-translate-y-2">
                  

                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradientes nas laterais para suavizar o "corte" do carrossel */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20"></div>
    </section>
  );
}
