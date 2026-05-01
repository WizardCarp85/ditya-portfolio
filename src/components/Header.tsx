"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center w-full h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pt-16 md:pt-24 shrink-0"
      >
        <h1 className="text-6xl md:text-9xl text-primary-green tracking-[0.2em] mb-6">
          PORTFOLIO
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground font-bold tracking-[0.4em] uppercase mb-8">
          Interior Designer
        </h2>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        className="w-full flex-1 relative overflow-hidden"
      >
        <Image
          src="/homepage.png"
          alt="House Illustration"
          fill
          className="object-cover object-bottom"
        />
      </motion.div>
    </section>
  );
}
