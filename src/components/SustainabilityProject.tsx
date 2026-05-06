"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

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
        title="SUSTAINABILITY PROJECT"
        image="/sustainability project.png"
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr_1.5fr] gap-6 my-16 md:items-stretch"
      >
        {/* ── Left Column: Text ──────────────────────────────── */}
        <motion.div
          variants={fadeLeft}
          custom={0}
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-between items-start mb-6"
          >
            <motion.h3
              variants={titleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-3xl text-primary-green font-bold tracking-wider"
            >
              SOLAR PYRAMID<br />SHIELD
            </motion.h3>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-primary-red text-sm leading-relaxed mb-6 font-medium"
          >
            <p className="mb-4">
              Our university is a residential campus where The passage from Residency 3 to our academic block majorly faces the harmful sun rays from around 11am to around 3pm. The main focus is to design a module that helps to avoid south and west rays of sun in the given area that not only provides shade but also helps in cooling the area. Materials used:
            </p>
            <ul className="list-disc list-outside ml-4 mb-4 flex flex-col gap-1">
              <li><span className="font-bold">Paper pulp:</span> helps in ensuring sustainability of the tile.</li>
              <li><span className="font-bold">Lime:</span> acts as a binder and hardener for the tile.</li>
              <li><span className="font-bold">Hempcrete:</span> helps in structural strength and stability, weather resistance and thermal resistance.</li>
              <li><span className="font-bold">Starch binder (corn, potato or tapioca):</span> helps in water resistance as well as thermal insulation.</li>
            </ul>
            <p className="font-bold mb-2">Approximate costing:</p>
            <ul className="list-disc list-outside ml-4 flex flex-col gap-1">
              <li><span className="font-bold">Paper pulp:</span> The cost of mid quality recycled paper pulp costs around Rs. 35000 to 50000 per tonne i.e. ₹ 35- 50 per kg</li>
              <li><span className="font-bold">Hydrated Lime:</span> Good grade hydrated lime cost around ₹ 6 to 10 per kg</li>
              <li><span className="font-bold">Hempcrete:</span> Given local costs having to include transport etc., a realistic ballpark for hempcrete would be around ₹ 20 to 35 per kg.</li>
              <li><span className="font-bold">Tapioca Starch:</span> Cost for industrial / binder-grade tapioca starch in or near Delhi is approximately ₹ 30 to ₹ 60 per kg.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Middle Column: Material Images ────────────────── */}
        <motion.div
          variants={fadeUp}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col items-end gap-3 p-2 w-full">
            {[
              { src: "/rhino.png", alt: "Rhino" },
              { src: "/twinmotion.png", alt: "Twinmotion" },
            ].map(({ src, alt }, i) => (
              <motion.div
                key={i}
                variants={logoSpin}
                custom={0.1 + i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="w-12 h-12 relative bg-primary-red overflow-hidden rounded-sm"
              >
                <Image src={src} alt={alt} fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={scaleReveal}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full group rounded-sm mb-3 cursor-pointer relative"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/sustain1.png", "Material Powder Bowl")}>
            <Image
              src="/sustain1.png"
              alt="Material Powder Bowl"
              width={1485} height={1489}
              className="w-full h-auto object-cover border-2 border-white shadow-sm transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
          </motion.div>

          <div className="flex gap-3 w-full" style={{ aspectRatio: 1.5 }}>
            {/* Left sub-column */}
            <div className="flex flex-col gap-3 flex-1 h-full">
              <motion.div
                variants={scaleReveal} custom={0.15}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative w-full group rounded-sm flex-1 cursor-pointer"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen("/sustain2.png", "Lime Powder")}>
                <Image
                  src="/sustain2.png" alt="Lime Powder"
                  fill
                  className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
              </motion.div>
              <motion.div
                variants={scaleReveal} custom={0.25}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative w-full group rounded-sm flex-1 cursor-pointer"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen("/sustain3.png", "Hempcrete Blocks")}>
                <Image
                  src="/sustain3.png" alt="Hempcrete Blocks"
                  fill
                  className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
              </motion.div>
            </div>

            {/* Right sub-column */}
            <div className="flex-1 flex h-full">
              <motion.div
                variants={scaleReveal} custom={0.2}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative w-full group rounded-sm flex-1 cursor-pointer"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen("/sustain4.png", "Hempcrete Ball")}>
                <Image
                  src="/sustain4.png" alt="Hempcrete Ball"
                  fill
                  className="object-cover border-2 border-white shadow-sm transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Right Column: Renders ─────────────────── */}
        <motion.div
          variants={fadeRight}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 w-full"
        >
          <motion.div
            variants={scaleReveal}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full group rounded-sm cursor-pointer relative"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/sustain5.png", "Pyramid Shield Render 1")}>
            <Image
              src="/sustain5.png"
              alt="Pyramid Shield Render 1"
              width={2768} height={1755}
              className="w-full h-auto object-cover border-2 border-white shadow-sm transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
          </motion.div>
          <motion.div
            variants={scaleReveal}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full group rounded-sm cursor-pointer relative"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/sustain6.png", "Pyramid Shield Render 2")}>
            <Image
              src="/sustain6.png"
              alt="Pyramid Shield Render 2"
              width={2768} height={1562}
              className="w-full h-auto object-cover border-2 border-white shadow-sm transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
          </motion.div>
        </motion.div>
      </motion.section>

      <ImageModal modalImage={modalImage} onClose={handleClose} />
    </>
  );
}
