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

const subTitleReveal: Variants = {
  hidden: { opacity: 0, y: 18, letterSpacing: "0.04em" },
  visible: (d = 0) => ({
    opacity: 1, y: 0, letterSpacing: "0.14em",
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};

const sheetReveal: Variants = {
  hidden: { opacity: 0, scale: 0.94, clipPath: "inset(6% 6% 6% 6%)" },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.9, ease: EASE, delay: d },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};

/* ─── Single blueprint sheet card ───────────────────────────── */
function SheetCard({
  src, alt, label, variant, delay = 0, onImageClick
}: {
  src: string;
  alt: string;
  label: string;
  variant: Variants;
  delay?: number;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <motion.div
      variants={variant}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-3"
    >
      <motion.p
        variants={subTitleReveal}
        custom={delay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-primary-red text-center text-xs font-semibold tracking-widest uppercase"
      >
        {label}
      </motion.p>

      <motion.div
        variants={sheetReveal}
        custom={delay + 0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full h-[320px] md:h-[420px] bg-[#F7F4EB]/50 group rounded-sm  border border-primary-red/20 cursor-pointer"
       whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
       onClick={() => onImageClick(src, alt)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-3 transition-transform duration-700 "
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-primary-green/0 group-hover:ring-primary-green/20 transition-all duration-500 pointer-events-none" />
        {/* Zoom icon hint */}
        <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn size={16} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Service group ──────────────────────────────────────────── */
function ServiceGroup({
  id, title, supplyImg, drainageImg, supplyAlt, drainageAlt, onImageClick
}: {
  id: string;
  title: string;
  supplyImg: string;
  drainageImg: string;
  supplyAlt: string;
  drainageAlt: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div id={id} className="flex flex-col gap-8 scroll-mt-8">
      <motion.h3
        variants={titleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center text-2xl md:text-3xl text-primary-green font-bold tracking-widest"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <SheetCard src={supplyImg}   alt={supplyAlt}   label="Supply"   variant={slideLeft}  delay={0} onImageClick={onImageClick} />
        <SheetCard src={drainageImg} alt={drainageAlt} label="Drainage" variant={slideRight} delay={0.1} onImageClick={onImageClick} />
      </div>
    </div>
  );
}

/* ─── Electrical group ───────────────────────────────────────── */
function ElectricalGroup({ onImageClick }: { onImageClick: (src: string, alt: string) => void }) {
  return (
    <div id="residential-electricals" className="flex flex-col gap-8 scroll-mt-8">
      <motion.h3
        variants={titleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center text-2xl md:text-3xl text-primary-green font-bold tracking-widest uppercase"
      >
        RESIDENTIAL ELECTRICALS
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <SheetCard src="/services5.jpeg" alt="RCP drawing" label="RCP drawing" variant={slideLeft} delay={0} onImageClick={onImageClick} />
        <SheetCard src="/services6.jpeg" alt="lighting" label="lighting" variant={slideRight} delay={0.1} onImageClick={onImageClick} />
        <SheetCard src="/services7.jpeg" alt="switches and sockets" label="switches and sockets" variant={slideLeft} delay={0.2} onImageClick={onImageClick} />
        <SheetCard src="/services8.jpeg" alt="Connection" label="Connection" variant={slideRight} delay={0.3} onImageClick={onImageClick} />
      </div>
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
export default function Services() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpen = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  const handleClose = () => setModalImage(null);

  return (
    <>
      <SectionHeader
        num="04"
        title="SERVICES"
        image="/services.png"
        links={[
          { label: "Public washroom plumbing", sublinks: ["supply", "drainage"] },
          { label: "residential plumbing", sublinks: ["supply", "drainage"] },
          { label: "residential electricals", sublinks: ["RCP drawing", "lighting", "switches and sockets", "Connection"] }
        ]}
      />

      <section className="flex flex-col gap-20 my-16 py-8">

        <ServiceGroup
          id="public-washroom"
          title="PUBLIC WASHROOM PLUMBING SERVICES"
          supplyImg="/services3.jpg"
          drainageImg="/services4.jpg"
          supplyAlt="Public Washroom – Supply Diagram"
          drainageAlt="Public Washroom – Drainage Diagram"
          onImageClick={handleOpen}
        />

        <Divider />

        <ServiceGroup
          id="residential-plumbing"
          title="RESIDENCY PLUMBING SERVICE"
          supplyImg="/services1.jpg"
          drainageImg="/services2.jpg"
          supplyAlt="Residency Plumbing – Supply Diagram"
          drainageAlt="Residency Plumbing – Drainage Diagram"
          onImageClick={handleOpen}
        />

        <Divider />

        <ElectricalGroup onImageClick={handleOpen} />

      </section>

      <ImageModal modalImage={modalImage} onClose={handleClose} />
    </>
  );
}
