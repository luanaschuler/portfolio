"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Testimonials() {
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
      id="testimonials"
      className="py-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              What Clients Say
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-accent rounded-full mx-auto"
            ></motion.div>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass p-8 rounded-xl space-y-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/80 italic font-light text-sm leading-relaxed">
                  dssadasd
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-foreground/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-foreground/60 text-xs">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 right-1/3 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
