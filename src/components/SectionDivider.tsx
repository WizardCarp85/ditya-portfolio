"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`dotted-line my-16 origin-center ${className}`} 
    />
  );
}
