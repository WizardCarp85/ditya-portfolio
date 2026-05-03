"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center w-full h-screen overflow-hidden">

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        className="pt-16 md:pt-24 shrink-0 z-10"
      >
        {/* Main title — letters slide up one by one */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="text-6xl md:text-9xl text-primary-green tracking-[0.2em] mb-4"
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* Subtitle — fade + letter-spacing expand */}
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="text-xl md:text-2xl text-foreground font-bold uppercase mb-8"
        >
          Interior Designer
        </motion.h2>

        {/* Decorative line under subtitle */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="h-px w-32 mx-auto bg-primary-red/50 origin-center"
        />
      </motion.div>

      {/* Hero image — scale from 110% → 100% for cinematic feel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: EASE }}
        className="w-full flex-1 relative overflow-hidden mt-6"
      >
        <Image
          src="/homepage.png"
          alt="House Illustration"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Gradient overlay — fades into background at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-green/60 text-xs tracking-widest flex flex-col items-center gap-1 pointer-events-none"
      >
        <span className="uppercase text-[10px]">Scroll</span>
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M6 0v12M1 8l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
