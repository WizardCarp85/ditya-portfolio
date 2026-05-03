"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.4, ease: EASE }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-1 group cursor-pointer"
        >
          {/* Main circle button */}
          <div className="w-11 h-11 rounded-full border-2 border-primary-green bg-background/80 backdrop-blur-sm shadow-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-green">
            {/* Arrow up */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-primary-green group-hover:text-background transition-colors duration-300"
            >
              <path
                d="M8 13V3M3 8l5-5 5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Label */}
          <span className="text-[9px] font-oswald tracking-widest uppercase text-primary-green/70 group-hover:text-primary-green transition-colors duration-300">
            TOP
          </span>

          {/* Dotted line decoration */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="w-px h-5 border-l-2 border-dotted border-primary-red/40 origin-top"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
