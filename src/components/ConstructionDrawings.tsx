"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";

/* ─── Animation Variants ─────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 30, letterSpacing: "0.05em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.15em",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Helper: image card with hover lift & subtle glow ─────────── */
function DrawingCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#F7F4EB]/40 shadow-sm group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 ring-1 ring-inset ring-primary-green/0 group-hover:ring-primary-green/20 transition-all duration-500 pointer-events-none" />
    </div>
  );
}

/* ─── Section Title ─────────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3
      variants={titleReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center text-3xl text-primary-green mb-10 font-bold tracking-widest"
    >
      {children}
    </motion.h3>
  );
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function ConstructionDrawings() {
  return (
    <>
      <SectionHeader
        num="03"
        title="CONSTRUCTION DRAWINGS"
        image="/construction drawings.png"
        links={["GLASS PARTITION", "TYPES OF ARCHS", "TYPES OF LINTEL"]}
      />

      <section className="flex flex-col gap-28 my-16 py-8">

        {/* ── Glass Partition ─────────────────────────────────────── */}
        <div>
          <SectionTitle>GLASS PARTITION</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-x-10 gap-y-8 items-start">

            {/* Left column: Elevation (tall) + Section DD' (short strip) */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={fadeLeft}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-2"
              >
                {/* Elevation – tall blueprint */}
                <DrawingCard
                  src="/const1.png"
                  alt="Elevation"
                  className="w-full h-[340px] md:h-[400px]"
                />
                <p className="text-primary-red text-center text-sm font-medium mt-1 tracking-widest uppercase">
                  Elevation
                </p>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-2"
              >
                {/* Section DD' – thin horizontal strip */}
                <DrawingCard
                  src="/const2.png"
                  alt="Section DD'"
                  className="w-full h-[100px] md:h-[120px]"
                />
                <p className="text-primary-red text-center text-sm font-medium mt-1 tracking-widest uppercase">
                  Section DD&apos;
                </p>
              </motion.div>
            </div>

            {/* Right column: Elevations AA' BB' CC' (tall) + Details E & F (short) */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={fadeRight}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-2"
              >
                {/* Elevations – tall narrow columns */}
                <DrawingCard
                  src="/const3.png"
                  alt="Elevations AA' BB' CC'"
                  className="w-full h-[340px] md:h-[400px]"
                />
                <div className="flex justify-around w-full mt-1">
                  <p className="text-primary-red text-xs font-medium tracking-widest uppercase">Elevation AA&apos;</p>
                  <p className="text-primary-red text-xs font-medium tracking-widest uppercase">Elevation BB&apos;</p>
                  <p className="text-primary-red text-xs font-medium tracking-widest uppercase">Elevation CC&apos;</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-2"
              >
                {/* Details E & F – two small squares side by side */}
                <DrawingCard
                  src="/const4.png"
                  alt="Details at E & F"
                  className="w-full h-[100px] md:h-[120px]"
                />
                <div className="flex justify-around w-full mt-1">
                  <p className="text-primary-red text-xs font-medium tracking-widest uppercase">Detail at E</p>
                  <p className="text-primary-red text-xs font-medium tracking-widest uppercase">Detail at F</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Types of Archs ──────────────────────────────────────── */}
        <div>
          <SectionTitle>TYPES OF ARCHS</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">

            {/* Left: large terminology diagram */}
            <motion.div
              variants={fadeLeft}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <DrawingCard
                src="/const5.png"
                alt="Arch Terminology Diagram"
                className="w-full h-[440px] md:h-[500px]"
              />
            </motion.div>

            {/* Right: 2×2 grid of arch types */}
            <motion.div
              variants={fadeRight}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-[1fr_1.2fr] grid-rows-2 gap-4 h-[440px] md:h-[500px]"
            >
              {[
                { src: "/const6.png", alt: "Pointed Arch" },
                { src: "/const7.png", alt: "Corbel Arch" },
                { src: "/const8.png", alt: "Horseshoe Arch" },
                { src: "/const9.png", alt: "Flat Arch" },
              ].map(({ src, alt }, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative h-full"
                >
                  <DrawingCard src={src} alt={alt} className="w-full h-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Types of Lintel ─────────────────────────────────────── */}
        <div>
          <SectionTitle>TYPES OF LINTEL</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">

            {/* Left: large Timber + Plan drawing */}
            <motion.div
              variants={fadeLeft}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <DrawingCard
                src="/const10.png"
                alt="Timber Lintel & Plan Details"
                className="w-full h-[420px] md:h-[480px]"
              />
            </motion.div>

            {/* Right: 3 stacked lintel types */}
            <div className="grid grid-rows-3 gap-4 h-[420px] md:h-[480px]">
              {[
                { src: "/const11.png", alt: "Stone Lintel" },
                { src: "/const12.png", alt: "RCC Lintel" },
                { src: "/const13.png", alt: "Brick Lintel" },
              ].map(({ src, alt }, i) => (
                <motion.div
                  key={i}
                  variants={fadeRight}
                  custom={i * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="relative h-full"
                >
                  <DrawingCard src={src} alt={alt} className="w-full h-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
