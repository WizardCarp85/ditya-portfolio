"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion, Variants } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

/* ─── Animation variants ────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: EASE, delay: d },
  }),
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: EASE, delay: d },
  }),
};
const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(8% 8% 8% 8%)" },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.85, ease: EASE, delay: d },
  }),
};
const titleReveal: Variants = {
  hidden: { opacity: 0, y: 30, letterSpacing: "0.04em" },
  visible: {
    opacity: 1, y: 0, letterSpacing: "0.15em",
    transition: { duration: 1, ease: EASE },
  },
};
const logoSpin: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: (d = 0) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.5, ease: EASE, delay: d },
  }),
};

/* ─── Photo cell ─────────────────────────────────────────────── */
function PhotoCell({ src, alt, delay = 0, className = "", objectFit = "cover", style, onImageClick }: {
  src: string; alt: string; delay?: number; className?: string; objectFit?: "cover" | "contain"; style?: React.CSSProperties;
  onImageClick?: (src: string, alt: string) => void;
}) {
  return (
    <motion.div
      variants={scaleReveal}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`relative group rounded-sm ${onImageClick ? "cursor-pointer" : ""} ${className}`}
      style={style}
      whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
      onClick={() => onImageClick && onImageClick(src, alt)}
    >
      <Image
        src={src} alt={alt} fill
        className={`transition-transform duration-700  ${
          objectFit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
      <div className="absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/10 transition-all duration-500 pointer-events-none" />
      {onImageClick && (
        <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <ZoomIn size={16} />
        </div>
      )}
    </motion.div>
  );
}

/* ─── Tool icon badge ────────────────────────────────────────── */
function ToolIcon({ src, alt, delay = 0, size = "sm" }: {
  src: string; alt: string; delay?: number; size?: "sm" | "md" | "lg";
}) {
  const dim = size === "lg" ? "w-12 h-12" : size === "md" ? "w-10 h-10" : "w-9 h-9";
  return (
    <motion.div
      variants={logoSpin}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`${dim} relative flex-shrink-0`}
    >
      <Image src={src} alt={alt} fill className="object-contain" />
    </motion.div>
  );
}

/* ─── Stamp left panel (num + stamp frame + title only) ─────── */
function StampLeft({ num, image, title, delay = 0, large = false }: {
  num: string; image: string; title: React.ReactNode; delay?: number; large?: boolean;
}) {
  return (
    <motion.div
      variants={fadeLeft}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex items-start gap-1 flex-shrink-0"
    >
      {/* Rotated number */}
      <div className="-rotate-90 text-4xl text-primary-green font-oswald tracking-widest self-center select-none">
        {num}
      </div>

      {/* Stamp + title */}
      <div className="flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE, delay: delay + 0.1 }}
        >
          <div className={`relative overflow-hidden ${large ? "w-48 h-64 md:w-56 md:h-72" : "w-36 h-48"}`}>
            <Image src={image} alt="stamp" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.h3
          variants={titleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className={`text-primary-green tracking-widest text-center font-bold leading-snug whitespace-pre-line ${large ? "text-2xl md:text-3xl mt-4" : "text-sm"}`}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
}

/* ─── Animated divider ───────────────────────────────────────── */
function Divider({ fromRight = false }: { fromRight?: boolean }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
      className={`border-b-2 border-dotted border-primary-red/40 my-8 ${fromRight ? "origin-right" : "origin-left"}`}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Interests() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpen = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  const handleClose = () => setModalImage(null);

  return (
    <>
      <section className="flex flex-col gap-0">

        {/* ────────────────────────────────────────────────────────
            OVERVIEW
            Layout: [stamp] | [4 tool icons col] | [photo mosaic]
            ──────────────────────────────────────────────────────── */}
        <div className="flex gap-6 items-stretch py-10 border-b-2 border-dotted border-primary-red/30">

          {/* Stamp — large, acts as section header */}
          <StampLeft num="05" image="/interests.png" title="INTERESTS" delay={0} large={true} />

          {/* Navigation index — links to sub-sections */}
          <motion.div
            variants={fadeRight}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex-1 flex flex-col justify-center gap-8 ml-8 pb-4"
          >
            {[
              { label: "UNREAL PROJECTS",        href: "#unreal-projects",        num: "05-01" },
              { label: "ZBRUSH PROJECTS",        href: "#zbrush-projects",        num: "05-02" },
              { label: "THE JOKER",              href: "#the-joker",              num: "05-02.1", indent: true },
              { label: "THE JADE MIST VAGABOND", href: "#the-jade-mist-vagabond", num: "05-02.2", indent: true },
            ].map(({ label, href, num, indent }, i) => (
              <motion.a
                key={i}
                href={href}
                variants={fadeUp}
                custom={0.1 + i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`flex items-center gap-4 text-primary-red uppercase text-sm md:text-base font-semibold tracking-wider group cursor-pointer hover:text-primary-green transition-colors duration-300 ${indent ? "ml-8" : ""}`}
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300 whitespace-nowrap">
                  {label}
                </span>
                <div className="flex-1 border-b-2 border-dotted border-primary-red opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-primary-green font-oswald text-xl group- transition-transform duration-300 flex-shrink-0">
                  {num}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <Divider />

        {/* ────────────────────────────────────────────────────────
            UNREAL PROJECTS
            Layout: [stamp] | [photos with Unreal icon at top-center]
            ──────────────────────────────────────────────────────── */}
        <div id="unreal-projects" className="flex gap-8 items-start py-10 border-b-2 border-dotted border-primary-red/30">

          {/* Stamp */}
          <StampLeft num="05" image="/interests.png" title={"UNREAL\nPROJECTS"} delay={0} large={true} />

          {/* Right: [icon on left] + [stacked images] */}
          <motion.div
            variants={fadeRight}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex-1 flex flex-row gap-5 items-start justify-end"
          >
            {/* Unreal icon — left of images */}
            <motion.div
              variants={logoSpin}
              custom={0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="w-12 h-12 relative flex-shrink-0 mt-1"
            >
              <Image src="/unreal.png" alt="Unreal Engine" fill className="object-contain" />
            </motion.div>

            {/* Two stacked images — natural sizing for maximum width */}
            <div className="flex flex-col gap-6 max-w-[600px] w-full">
              <motion.div
                variants={scaleReveal} custom={0.05}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group rounded-sm cursor-pointer relative"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen("/interest1.png", "Unreal Night Scene")}>
                <Image
                  src="/interest1.png" alt="Unreal Night Scene"
                  width={3011} height={1695}
                  className="w-full h-auto transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn size={16} />
                </div>
              </motion.div>

              <motion.div
                variants={scaleReveal} custom={0.12}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group rounded-sm cursor-pointer relative"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen("/interest5.png", "Unreal Architecture Scene")}>
                <Image
                  src="/interest5.png" alt="Unreal Architecture Scene"
                  width={1879} height={1003}
                  className="w-full h-auto transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn size={16} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Divider fromRight />

        {/* ────────────────────────────────────────────────────────
            ZBRUSH PROJECTS
            Layout: [stamp] | [3 tool icons col] | [photo grid]
            ──────────────────────────────────────────────────────── */}
        <div id="zbrush-projects" className="flex gap-6 items-start py-10 border-b-2 border-dotted border-primary-red/30">

          {/* Stamp — large */}
          <StampLeft num="05" image="/interests.png" title={"ZBRUSH\nPROJECTS"} delay={0} large={true} />

          {/* Right side: [Tool icons] + [Photo grid] */}
          <motion.div
            variants={fadeRight}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex-1 flex gap-5 items-start justify-end"
          >
            {/* Tool icons column */}
            <div className="flex flex-col gap-3 pt-2">
              <ToolIcon src="/zbrush.png"           alt="ZBrush"            delay={0.1} />
              <ToolIcon src="/maya.png"             alt="Maya"              delay={0.18} />
              <ToolIcon src="/substanceprinter.png" alt="Substance Painter" delay={0.26} />
            </div>

            {/* Photo grid — natural sizing without cropping */}
            <div className="w-full max-w-[600px] flex gap-3 items-end">
              {/* Left sub-column: bear + duck */}
              <div className="flex flex-col gap-3" style={{ flex: 1 }}>
                <motion.div variants={scaleReveal} custom={0.05} className="group rounded-sm cursor-pointer relative" whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }} onClick={() => handleOpen("/interest4.png", "ZBrush Bear Front")}>
                  <Image src="/interest4.png" alt="ZBrush Bear Front" width={586} height={705} className="w-full h-auto transition-transform duration-700 " />
                  <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
                </motion.div>
                <motion.div variants={scaleReveal} custom={0.1} className="group rounded-sm cursor-pointer relative" whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }} onClick={() => handleOpen("/interest6.png", "ZBrush Duck")}>
                  <Image src="/interest6.png" alt="ZBrush Duck" width={1136} height={1672} className="w-full h-auto transition-transform duration-700 " />
                  <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
                </motion.div>
              </div>

              {/* Right: tall full character */}
              <motion.div variants={scaleReveal} custom={0.08} className="group rounded-sm cursor-pointer relative" style={{ flex: 1.225 }} whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }} onClick={() => handleOpen("/interest7.png", "ZBrush Full Character")}>
                <Image src="/interest7.png" alt="ZBrush Full Character" width={1393} height={3093} className="w-full h-auto transition-transform duration-700 " />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"><ZoomIn size={16} /></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Divider />

        {/* ────────────────────────────────────────────────────────
            THE JOKER
            Layout: top 4-image row | bottom: detail + title + desc
            ──────────────────────────────────────────────────────── */}
        <div id="the-joker" className="py-10 border-b-2 border-dotted border-primary-red/30">

          {/* Top 4 images */}
          <div className="flex gap-2 mb-6 w-full" style={{ aspectRatio: 2.888 }}>
            <PhotoCell src="/interest8.png"  alt="Joker Clay Base"    delay={0}    style={{ flex: 0.632 }} onImageClick={handleOpen} />
            <PhotoCell src="/interest9.png"  alt="Joker Clay Detail"  delay={0.07} style={{ flex: 0.873 }} onImageClick={handleOpen} />
            <PhotoCell src="/interest10.png" alt="Joker Colored"      delay={0.14} style={{ flex: 0.764 }} onImageClick={handleOpen} />
            <PhotoCell src="/interest2.png"  alt="Joker Final Render" delay={0.21} style={{ flex: 0.619 }} onImageClick={handleOpen} />
          </div>

          {/* Bottom: close-up + text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            <motion.div
              variants={scaleReveal}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative h-[220px] md:h-[260px] group rounded-sm cursor-pointer"
             whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
             onClick={() => handleOpen("/interest11.png", "Joker Close-up")}>
              <Image
                src="/interest11.png" alt="Joker Close-up" fill
                className="object-cover transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ZoomIn size={16} />
              </div>
            </motion.div>

            <div className="col-span-2 flex flex-col gap-4">
              <motion.h3
                variants={titleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-3xl md:text-4xl text-primary-green"
              >
                THE JOKER
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-primary-red text-xs leading-relaxed"
              >
                This project involved 3D sculpting through mastering organic forms on Zbrush by using basic brushes
                like Claybuildup, TrimDynamic, Move etc. The character is then retopologised through UV unwrapping
                which was done on Autodesk Maya for low poly optimisation. Adobe Substance Painter 3d was used for
                baking the high poly details on the UV unwrapped low poly model and then textures and colors were
                added to bring the stylized character to life. Finally the textures were imported back to Maya to
                produce high quality renders to showcase the end result. This was the result of a 10 day workshop
                which helped me in taking a deep dive in 3d modelling and sculpting pipeline.
              </motion.p>

              {/* Tool badges */}
              <motion.div
                variants={fadeUp}
                custom={0.25}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-3 flex-wrap"
              >
                {[
                  { src: "/zbrush.png",           alt: "ZBrush" },
                  { src: "/maya.png",             alt: "Maya" },
                  { src: "/substanceprinter.png", alt: "Substance Painter" },
                ].map(({ src, alt }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.3 + i * 0.08 }}
                    className="w-10 h-10 relative"
                  >
                    <Image src={src} alt={alt} fill className="object-contain" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <Divider fromRight />

        {/* ────────────────────────────────────────────────────────
            THE JADE MIST VAGABOND
            Layout: top 5-image grid | bottom: detail + title + desc
            ──────────────────────────────────────────────────────── */}
        <div id="the-jade-mist-vagabond" className="py-10">

          {/* Top: [col][col][col][stacked-right] */}
          <div className="flex gap-2 mb-6 w-full" style={{ aspectRatio: 2.125 }}>
            <PhotoCell src="/interest12.png" alt="Jade Clay Front"    delay={0}    style={{ flex: 0.6 }} onImageClick={handleOpen} />
            <PhotoCell src="/interest13.png" alt="Jade Clay Side"     delay={0.07} style={{ flex: 0.554 }} onImageClick={handleOpen} />
            <PhotoCell src="/interest14.png" alt="Jade Colored Front" delay={0.14} style={{ flex: 0.561 }} onImageClick={handleOpen} />
            <div className="flex flex-col gap-2" style={{ flex: 0.41 }}>
              <PhotoCell src="/interest15.png" alt="Jade Top Right"    delay={0.21} style={{ flex: 0.73 }} onImageClick={handleOpen} />
              <PhotoCell src="/interest16.png" alt="Jade Bottom Right" delay={0.28} style={{ flex: 0.27 }} onImageClick={handleOpen} />
            </div>
          </div>

          {/* Bottom: close-up + text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            <motion.div
              variants={scaleReveal}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative h-[220px] md:h-[260px] group rounded-sm cursor-pointer"
             whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
             onClick={() => handleOpen("/interest3.png", "Jade Mist Close-up")}>
              <Image
                src="/interest3.png" alt="Jade Mist Close-up" fill
                className="object-cover transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ZoomIn size={16} />
              </div>
            </motion.div>

            <div className="col-span-2 flex flex-col gap-4">
              <motion.h3
                variants={titleReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-3xl md:text-4xl text-primary-green"
              >
                THE JADE MIST VAGABOND
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="text-primary-red text-xs leading-relaxed"
              >
                This project involved 3D sculpting through mastering organic forms on Zbrush by using basic brushes
                like Claybuildup, TrimDynamic, Move etc. The character is then retopologised through UV unwrapping
                which was done on Autodesk Maya for low poly optimisation. Adobe Substance Painter 3d was used for
                baking the high poly details on the UV unwrapped low poly model and then textures and colors were
                added to bring the stylized character to life. Finally the textures were imported back to Maya to
                produce high quality renders to showcase the end result. This was the result of a 10 day workshop
                which helped me in taking a deep dive in 3d modelling and sculpting pipeline.
              </motion.p>

              {/* Tool badges */}
              <motion.div
                variants={fadeUp}
                custom={0.25}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-3 flex-wrap"
              >
                {[
                  { src: "/zbrush.png",           alt: "ZBrush" },
                  { src: "/maya.png",             alt: "Maya" },
                  { src: "/substanceprinter.png", alt: "Substance Painter" },
                ].map(({ src, alt }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.3 + i * 0.08 }}
                    className="w-10 h-10 relative"
                  >
                    <Image src={src} alt={alt} fill className="object-contain" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <Divider />

      </section>

      <ImageModal modalImage={modalImage} onClose={handleClose} />
    </>
  );
}
