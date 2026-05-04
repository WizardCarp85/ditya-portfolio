"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";

/* ─── Animation variants ────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(8% 8% 8% 8%)" },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.85, ease: EASE, delay: d },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

/* ─── Photo cell ─────────────────────────────────────────────── */
function PhotoCell({
  src,
  alt,
  label,
  delay = 0,
  rowHeight = "h-[280px] md:h-[360px]",
}: {
  src: string;
  alt: string;
  label?: string;
  delay?: number;
  rowHeight?: string;
}) {
  return (
    <motion.div
      variants={scaleReveal}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`relative ${rowHeight} group rounded-sm`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 "
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/10 transition-all duration-500 pointer-events-none" />

      {/* Caption label — always visible, styled like handwritten note */}
      {label && (
        <motion.div
          variants={fadeUp}
          custom={delay + 0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/40 to-transparent"
        >
          <span className="text-white text-xs font-medium tracking-wide italic drop-shadow">
            {label}
          </span>
        </motion.div>
      )}
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
        description="PAPER EXPLORATION, CLAY EXPLORATION, METAL SHEET EXPLORATION, PRINT MAKING ETC."
      />

      {/* Drawing line before gallery */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="border-b-2 border-dotted border-primary-red/30 origin-left mb-6"
      />

      {/* ── Photo Gallery ────────────────────────────────────── */}
      <section className="flex flex-col gap-2 my-4">

        {/* Row 1 — [2fr, 2fr, 1fr] */}
        <div className="grid gap-2" style={{ gridTemplateColumns: "2fr 2fr 1fr" }}>
          <PhotoCell
            src="/material1.png"
            alt="Warli Art"
            delay={0}
          />
          <PhotoCell
            src="/material2.png"
            alt="Paper Mache"
            label="Paper Mache"
            delay={0.08}
          />
          <PhotoCell
            src="/material3.png"
            alt="Metal Sheet Exploration"
            delay={0.16}
          />
        </div>

        {/* Row 2 — [1fr, 2fr, 1.5fr] */}
        <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 2fr 1.5fr" }}>
          <PhotoCell
            src="/material4.png"
            alt="Clay Work"
            label="Clay Work"
            delay={0.06}
          />
          <PhotoCell
            src="/material5.png"
            alt="3D Prototype"
            label="3D Prototype"
            delay={0.14}
          />
          <PhotoCell
            src="/material6.png"
            alt="Paper Exploration"
            label="Paper Exploration"
            delay={0.22}
          />
        </div>

      </section>

      {/* Bottom drawing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="border-b-2 border-dotted border-primary-red/30 origin-right mt-6"
      />
    </>
  );
}
