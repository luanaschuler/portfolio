"use client";

import { PROCESS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Process() {
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
    <section id="process" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary/85 backdrop-blur-md border-2 border-accent/100 rounded-2xl p-8 md:p-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              My Process
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-accent rounded-full mx-auto"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/60"
            >
              A structured approach to delivering exceptional results
            </motion.p>
          </div>

          {/* Process Steps */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PROCESS.map((step, idx) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Card */}
                <div className="glass p-8 rounded-xl space-y-4 h-full hover:shadow-lg transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl pt-2">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground pt-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on last item) */}
                {idx < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-accent/30"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
