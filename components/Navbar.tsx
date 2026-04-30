"use client";

import { NAV_ITEMS, WHATSAPP_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 glass-light"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LS</span>
              </div>
              <span className="hidden sm:inline font-semibold text-accent">
                Luana Schüler - Web Developer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const href = item.href.startsWith("#")
                  ? `/#${item.href.slice(1)}`
                  : item.href;
                return (
                  <Link
                    key={item.label}
                    href={href}
                    className="text-accent hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href={WHATSAPP_CONFIG.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-6 py-2.5 bg-accent text-primary rounded-lg hover:bg-primary-hover hover:text-white transition-colors text-sm font-medium"
            >
              Vamos conversar no WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-foreground transition-all ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-foreground transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-foreground transition-all ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-4 pt-4 border-t border-border"
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => {
                  const href = item.href.startsWith("#")
                    ? `/#${item.href.slice(1)}`
                    : item.href;
                  return (
                    <Link
                      key={item.label}
                      href={href}
                      className="text-foreground hover:text-accent transition-colors text-sm font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={WHATSAPP_CONFIG.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors text-sm font-medium text-center"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_CONFIG.link}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-xl">💬</span>
      </a>
    </>
  );
}
