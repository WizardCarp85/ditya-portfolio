"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

import { PLACEHOLDER_IMG } from "@/lib/constants";

/* ─── Animation Variants ─────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
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

const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(8% 8% 8% 8%)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 30, letterSpacing: "0.04em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.15em",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoSpin: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function SustainabilityProject() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpen = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  const handleClose = () => setModalImage(null);

  return (
    <>
      <SectionHeader
        num="02"
        title="FURNITURE DESIGN"
        image="/sustainability project.png"
        links={["CHAIR DECODING", "CHAIR MAKING"]}
      />

      {/* ── Category: Chair Decoding ────────────────────────────── */}
      <motion.div
        id="chair-decoding"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mt-8 mb-8 border-b-2 border-dotted border-primary-red/30 pb-4 scroll-mt-8"
      >
        <h2 className="text-4xl md:text-5xl text-primary-green tracking-widest font-bold">
          CHAIR DECODING
        </h2>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 my-16 lg:items-stretch"
      >
        {/* ── Left Column: Text ──────────────────────────────── */}
        <motion.div variants={fadeLeft} custom={0} className="relative">
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-primary-red text-sm leading-relaxed mb-6 font-medium"
          >
            <p className="mb-4">
              This project involves decoding some of the iconic Finn Juhl's chairs and creating handmade scaled technical drawings for the same. This helped me in understanding the ergonomics of chairs and how to create scaled drawings which further helped me in designing a simple chair of my own inspired by the iconic Chieftain chair of Finn Juhl.
            </p>
            <p>
              The chair included the organic, sculptural teak frame mimicing bone structures, while the detached, &quot;floating&quot; leather upholstery provides ergonomic comfort. Inspired by tribal weaponry and ancient craftsmanship, the design's majestic scale and expressive curves redefined mid-century furniture as high-art seating.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right Column: 4 Images Grid ─────────────────── */}
        <motion.div
          variants={fadeRight}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4 w-full h-full"
        >
          {[1, 2, 3, 4].map((num, i) => (
            <motion.div
              key={num}
              variants={scaleReveal}
              custom={i * 0.15}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="w-full min-h-[250px] md:min-h-[300px] group rounded-sm cursor-pointer relative"
             whileHover={{ y: -8, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
             onClick={() => handleOpen(`/furniture${num}.jpeg`, `Decoding Image ${num}`)}>
              <Image
                src={`/furniture${num}.jpeg`}
                alt={`Decoding Image ${num}`}
                fill
                className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Category: Chair Making ────────────────────────────── */}
      <motion.div
        id="chair-making"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mt-24 mb-8 border-b-2 border-dotted border-primary-red/30 pb-4 scroll-mt-8"
      >
        <h2 className="text-4xl md:text-5xl text-primary-green tracking-widest font-bold">
          CHAIR MAKING
        </h2>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16"
      >
        <div className="grid grid-cols-2 gap-4 h-full">
          {[
            { id: 5, title: "Cut List" },
            { id: 6, title: "Wood Cuts" },
            { id: 7, title: "Materials" },
            { id: 8, title: "Prototype" }
          ].map((item, i) => (
            <motion.div
              key={item.id}
              variants={scaleReveal}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="w-full min-h-[200px] md:min-h-[280px] group rounded-sm cursor-pointer relative"
             whileHover={{ y: -8, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
             onClick={() => handleOpen(`/furniture${item.id}.jpeg`, item.title)}>
              <Image
                src={`/furniture${item.id}.jpeg`}
                alt={item.title}
                fill
                className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeRight}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 h-full"
        >
          <motion.div
            variants={scaleReveal}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full h-full min-h-[600px] group rounded-sm cursor-pointer relative"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/furniture9.jpeg", "Making Final")}>
            <Image
              src="/furniture9.jpeg"
              alt="Making Final"
              fill
              className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
          </motion.div>
        </motion.div>
      </motion.section>

      <ImageModal modalImage={modalImage} onClose={handleClose} />
    </>
  );
}
