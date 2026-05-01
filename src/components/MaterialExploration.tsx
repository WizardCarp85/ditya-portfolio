"use client";

import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function MaterialExploration() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-8 mb-16"
      >
        <div className="-rotate-90 text-4xl text-primary-green font-oswald -translate-x-4">06</div>
        <div className="p-2 flex flex-col items-center justify-center">
          <div className="w-48 h-64 relative overflow-hidden group">
            <Image src="/material exploration.png" alt="Material Exploration" fill className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105" />
          </div>
          <h4 className="text-primary-green mt-2 text-xl tracking-widest text-center">MATERIAL<br/>EXPLORATION</h4>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex-1 text-primary-red text-xs uppercase font-bold tracking-widest px-8"
        >
          PAPER EXPLORATION, CLAY EXPLORATION, METAL SHEET EXPLORATION, PRINT MAKING ETC.
        </motion.div>
      </motion.div>

      <section className="grid grid-cols-3 gap-4 my-8 bg-white p-4 stamp-border border-primary-red shadow-lg w-full max-w-4xl mx-auto">
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 1" fill className="object-cover border border-gray-300" /></div>
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 2" fill className="object-cover border border-gray-300" /></div>
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 3" fill className="object-cover border border-gray-300" /></div>
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 4" fill className="object-cover border border-gray-300" /></div>
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 5" fill className="object-cover border border-gray-300" /></div>
        <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Material 6" fill className="object-cover border border-gray-300" /></div>
      </section>
    </>
  );
}
