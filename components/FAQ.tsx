"use client";

import { FAQ } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="faq" className="py-20 relative overflow-hidden bg-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-secondary/85 backdrop-blur-md border-2 border-accent/100 rounded-2xl p-8 md:p-12">
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
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-accent rounded-full mx-auto"
            ></motion.div>
          </div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="space-y-4">
            {FAQ.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="glass rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/10 transition-colors group"
                >
                  <span className="text-left font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent text-xl flex-shrink-0 ml-4"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-foreground/10"
                    >
                      <p className="px-6 py-4 text-foreground/70 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}
