"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

/* ─── Animation variants ────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 28, letterSpacing: "0.05em" },
  visible: {
    opacity: 1, y: 0, letterSpacing: "0.18em",
    transition: { duration: 0.9, ease: EASE },
  },
};

const sheetReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, clipPath: "inset(6% 6% 6% 6%)" },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: EASE, delay: d },
  }),
};

/* ─── Single blueprint sheet section ────────────────────────── */
function BlueprintSection({
  id,
  title,
  src,
  alt,
  height = "h-[420px] md:h-[520px]",
  onImageClick,
}: {
  id: string;
  title: string;
  src: string;
  alt: string;
  height?: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div id={id} className="scroll-mt-8">
      {/* Section title */}
      <motion.h3
        variants={titleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center text-2xl md:text-3xl text-primary-green font-bold tracking-widest mb-8"
      >
        {title}
      </motion.h3>

      {/* Blueprint sheet image */}
      <motion.div
        variants={sheetReveal}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={`relative w-full ${height} bg-[#F7F4EB]/50 group rounded-sm border border-primary-red/20 cursor-pointer`}
        whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
        onClick={() => onImageClick(src, alt)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-3 transition-transform duration-700 "
        />
        {/* hover glow ring */}
        <div className="absolute inset-0 ring-1 ring-inset ring-primary-green/0 group-hover:ring-primary-green/20 transition-all duration-500 pointer-events-none" />
        {/* Zoom icon hint */}
        <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn size={16} />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Dotted divider ─────────────────────────────────────────── */
function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
      className="border-b-2 border-dotted border-primary-red/30 origin-center"
    />
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function ConstructionDrawings() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpen = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  const handleClose = () => setModalImage(null);

  return (
    <>
      <SectionHeader
        num="03"
        title="CONSTRUCTION DRAWINGS"
        image="/construction drawings.png"
        links={[
          "GLASS PARTITION",
          "EXTERIOR WALL SECTION",
          "TYPES OF ARCHS",
          "TYPES OF LINTELS",
          "STAIRCASE",
        ]}
      />

      <section className="flex flex-col gap-20 my-16 py-8">

        <BlueprintSection
          id="glass-partition"
          title="GLASS PARTITION"
          src="/construction2.jpg"
          alt="Glass Partition Drawing Sheet"
          onImageClick={handleOpen}
        />

        <Divider />

        <BlueprintSection
          id="exterior-wall-section"
          title="EXTERIOR WALL SECTION"
          src="/construction5.jpg"
          alt="Exterior Wall Section Drawing Sheet"
          onImageClick={handleOpen}
        />

        <Divider />

        <BlueprintSection
          id="types-of-archs"
          title="TYPES OF ARCHS"
          src="/construction1.jpg"
          alt="Types of Archs Drawing Sheet"
          onImageClick={handleOpen}
        />

        <Divider />

        <BlueprintSection
          id="types-of-lintels"
          title="TYPES OF LINTELS"
          src="/construction3.jpg"
          alt="Types of Lintels Drawing Sheet"
          onImageClick={handleOpen}
        />

        <Divider />

        <BlueprintSection
          id="staircase"
          title="STAIRCASE"
          src="/construction4.jpg"
          alt="Staircase Drawing Sheet"
          onImageClick={handleOpen}
        />

      </section>

      <ImageModal modalImage={modalImage} onClose={handleClose} />
    </>
  );
}
