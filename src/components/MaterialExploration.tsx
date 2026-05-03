"use client";

import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";

/* ─── Animation variants ────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.88, clipPath: "inset(10% 10% 10% 10%)" },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE, delay: d },
  }),
};

/* ─── Gallery items – matching the screenshot categories ─────── */
const galleryItems = [
  { alt: "Warli Art",        label: "Warli Art" },
  { alt: "Paper Mache",      label: "Paper Mache" },
  { alt: "Metal Sheet",      label: "Metal Sheet" },
  { alt: "Clay Mela",        label: "Clay Mela" },
  { alt: "3D Prototype",     label: "3D Prototype" },
  { alt: "Paper Exploration", label: "Paper Exploration" },
];

/* ─── Photo card ────────────────────────────────────────────── */
function PhotoCard({
  alt,
  label,
  delay = 0,
}: {
  alt: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={scaleReveal}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-2"
    >
      <div className="relative h-52 md:h-64 overflow-hidden group bg-[#F7F4EB]/40 border border-primary-red/15">
        <Image
          src={PLACEHOLDER_IMG}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Caption overlay on hover */}
        <div className="absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/10 transition-all duration-500 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <motion.p
        variants={fadeUp}
        custom={delay + 0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="text-primary-red text-center text-[11px] font-semibold tracking-widest uppercase"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function MaterialExploration() {
  return (
    <>
      <SectionHeader
        num="06"
        title="MATERIAL EXPLORATION"
        image="/material exploration.png"
      />

      {/* Subtitle tag line */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.04em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="text-primary-red text-xs font-semibold tracking-widest uppercase text-center mb-12 mt-4"
      >
        Paper Exploration · Clay Exploration · Metal Sheet Exploration · Print Making etc.
      </motion.p>

      {/* Drawing line before gallery */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="border-b-2 border-dotted border-primary-red/30 origin-left mb-12"
      />

      {/* 3×2 photo grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-8"
      >
        {galleryItems.map(({ alt, label }, i) => (
          <PhotoCard
            key={i}
            alt={alt}
            label={label}
            delay={i * 0.08}
          />
        ))}
      </motion.section>

      {/* Bottom drawing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="border-b-2 border-dotted border-primary-red/30 origin-right mt-12"
      />
    </>
  );
}
