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
  hidden: { opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" },
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
    letterSpacing: "0.12em",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const colorSwatch: Variants = {
  hidden: { opacity: 0, scaleY: 0, originY: 1 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
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

export default function SpaceAndFacadeDesign() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const handleOpen = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  const handleClose = () => setModalImage(null);

  return (
    <>
      <SectionHeader
        num="01"
        title="SPACE AND FACADE DESIGN"
        image="/space design.png"
        links={[
          {
            label: "SPACE DESIGN",
            sublinks: ["THE KAHLO ATRIUM", "MANDUVA SOUKHYAM"],
          },
          {
            label: "SUSTAINABILITY PROJECT",
            sublinks: ["SOLAR PYRAMID SHIELD"],
          },
        ]}
      />

      {/* ── Category: Space Design ────────────────────────────── */}
      <motion.div
        id="space-design"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mt-8 mb-8 border-b-2 border-dotted border-primary-red/30 pb-4 scroll-mt-8"
      >
        <h2 className="text-4xl md:text-5xl text-primary-green tracking-widest font-bold">
          SPACE DESIGN
        </h2>
      </motion.div>

      {/* ── The Kahlo Atrium ──────────────────────────────────── */}
      <section id="the-kahlo-atrium" className="flex flex-col lg:flex-row gap-8 my-16 items-start scroll-mt-8">
        {/* Text */}
        <motion.div
          variants={fadeLeft}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-1/4 shrink-0"
        >
          <motion.h3
            variants={titleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-4xl md:text-5xl text-primary-green mb-6 leading-tight font-semibold tracking-wide"
          >
            THE KAHLO<br />ATRIUM
          </motion.h3>
          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-primary-red text-sm leading-[1.8] text-justify pr-2 font-medium"
          >
            The project is to design a dedicated space in a backyard or garden for a celebrity of choice. The space should support activities the person enjoys—relaxing, reading, meditating, working out, or entertaining. Frida Kahlo was a Mexican painter known for her many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. She was a strong willed person, adored animals and had a great interest in fashion which was highlighted in her works. She enjoyed holding small gatherings with her friends and having drinks and storytelling session with them. The idea is to create a space in her memory that would be a bar and the space should support her love for animals while at the same time accommodate her love for small gatherings with her friends, family and all those who admire her as an artist and having drinks. It had to be bold just like her personality and at the same time should be inspired from her works.
          </motion.p>
        </motion.div>

        {/* 2×2 Image Grid */}
        <motion.div
          variants={fadeRight}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 h-150 md:h-200 bg-[#F7F4EB]/30 p-4 shadow-sm"
        >
          {[
            { src: "/kahlo1.png", alt: "Plan" },
            { src: "/kahlo2.png", alt: "Concept & Moodboard" },
            { src: "/kahlo3.png", alt: "Sections A-A & B-B" },
            { src: "/kahlo4.png", alt: "Master Render Plan" },
          ].map(({ src, alt }, i) => (
            <motion.div
              key={i}
              variants={scaleReveal}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative w-full h-full min-h-62.5 group rounded-sm cursor-pointer"
             whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
             onClick={() => handleOpen(src, alt)}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ZoomIn size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Manduva Soukhyam ─────────────────────────────────── */}
      <motion.section
        id="manduva-soukhyam"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24 mb-8 items-start scroll-mt-8"
      >
        {/* Left: 3D plan + 2 elevations — total ~580px */}
        <motion.div
          variants={fadeLeft}
          custom={0}
          className="lg:col-span-4 flex flex-col gap-4 h-auto lg:h-[580px]"
        >
          {[
            { src: "/manduva1.png", alt: "3D Floor Plan", flex: "flex-[2]" },
            { src: "/manduva3.png", alt: "Elevation 1",  flex: "flex-1" },
            { src: "/manduva4.png", alt: "Elevation 2",  flex: "flex-1" },
          ].map(({ src, alt, flex }, i) => (
            <motion.div
              key={i}
              variants={scaleReveal}
              custom={i * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className={`relative w-full ${flex} min-h-[120px] bg-[#F7F4EB]/30 p-2 shadow-sm group rounded-sm cursor-pointer`}
              whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
              onClick={() => handleOpen(src, alt)}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-700 "
              />
              <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <ZoomIn size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle: 2D plan + detail thumbnails — same height */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-4 flex flex-col gap-4 h-auto lg:h-[580px]"
        >
          <motion.div 
            className="relative flex-1 min-h-[300px] bg-[#F7F4EB]/30 p-2 shadow-sm border border-primary-green/10 group rounded-sm cursor-pointer"
            whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
            onClick={() => handleOpen("/manduva2.png", "2D Floor Plan")}
          >
            <Image
              src="/manduva2.png"
              alt="2D Floor Plan"
              fill
              className="object-contain transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <ZoomIn size={16} />
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 h-[120px]">
            {["/manduva5.png", "/manduva6.png"].map((src, i) => (
              <motion.div 
                key={i} 
                className="relative bg-[#F7F4EB]/30 p-1 shadow-sm border border-primary-green/10 group rounded-sm cursor-pointer"
                whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
                onClick={() => handleOpen(src, "Detail")}
              >
                <Image
                  src={src}
                  alt="Detail"
                  fill
                  className="object-cover transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Title, logos, description */}
        <motion.div
          variants={fadeRight}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-4 flex gap-6 mt-8 lg:mt-0 max-w-full"
        >
          <div className="flex flex-col gap-6 shrink-0 mt-4 items-center">
            {[
              { src: "/autocad.png", alt: "AutoCAD" },
              { src: "/rhino.png", alt: "Rhino" },
            ].map(({ src, alt }, i) => (
              <motion.div
                key={i}
                variants={scaleReveal}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative w-12 h-12"
              >
                <Image src={src} alt={alt} fill className="object-contain" />
              </motion.div>
            ))}
            <div className="flex flex-col items-center mt-6 gap-2">
              <motion.div
                variants={scaleReveal}
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative w-12 h-12"
              >
                <Image src="/gemini.png" alt="Gemini" fill className="object-contain" />
              </motion.div>
              <span className="text-primary-red text-sm font-bold tracking-wider capitalize">Gemini</span>
            </div>
          </div>

          <div className="flex flex-col text-left w-full pt-2">
            <motion.h3
              variants={titleReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-4xl lg:text-5xl text-primary-green font-semibold tracking-wide mb-8 leading-tight"
            >
              MANDUVA<br />SOUKHYAM
            </motion.h3>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-primary-red text-xs lg:text-sm leading-[1.8] flex flex-col gap-4 font-medium"
            >
              <p>Inspired by the traditional Manduva house, this residence is organized around a central open-to-sky courtyard that acts as both a climatic and social core. The client, Ms Pranaya, is from Hyderabad, Andhra Pradesh so she wanted a space that kept her close to her roots.</p>
              <p>Rather than being an empty void, the courtyard regulates the indoor environment by allowing hot air to rise, enabling cross-ventilation, and drawing natural light deep into surrounding rooms. Deep verandahs, known as ardha-manduva, wrap around the courtyard and function as shaded transitional zones. These semi-open spaces reduce heat gain while accommodating daily activities such as sitting or informal gatherings, blurring the boundary between indoors and outdoors.</p>
              <ul className="list-disc flex flex-col gap-2 mt-2 leading-[1.8] pl-4 text-left">
                <li>Emerald green walls bring a sense of calmness and connection to nature.</li>
                <li>The red oxide flooring adds warmth, nostalgia, and tactile richness reminiscent of traditional South Indian homes.</li>
                <li>Wooden columns, carved frames, and arched openings enhance the cultural character of the house.</li>
                <li>The courtyard water feature and surrounding vegetation introduce a soothing microclimate, reinforcing the feeling of comfort and tranquillity.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Gallery / Renders Collage ─────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col lg:flex-row gap-4 my-16 p-4 md:p-8"
      >
        {/* Left block */}
        <motion.div
          variants={fadeLeft}
          custom={0}
          className="flex flex-col gap-4 flex-1"
        >
          <motion.div
            variants={scaleReveal}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full h-[350px] md:h-[450px] group rounded-sm cursor-pointer"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/sdextra1.png", "Bathroom Render")}>
            <Image
              src="/sdextra1.png"
              alt="Bathroom Render"
              fill
              className="object-cover shadow-md border-b-[8px] border-r-[8px] border-primary-green/10 transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <ZoomIn size={16} />
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {["/sdextra2.png", "/sdextra3.png"].map((src, i) => (
              <motion.div
                key={i}
                variants={scaleReveal}
                custom={0.1 + i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative h-[200px] md:h-[250px] group rounded-sm cursor-pointer"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen(src, "Render")}>
                <Image
                  src={src}
                  alt="Render"
                  fill
                  className="object-cover shadow-sm transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Color palette – desktop */}
        <motion.div
          variants={fadeUp}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden lg:flex flex-col justify-center gap-4 shrink-0 w-24 py-8 px-2 mx-2"
        >
          {["#3D251A", "#18392F", "#9B1D1D", "#A58B6D", "#E5D7B7"].map((color, i) => (
            <motion.div
              key={i}
              variants={colorSwatch}
              custom={0.1 + i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              style={{ backgroundColor: color }}
              className="h-12 w-full rounded-full shadow-md border border-white/20  transition-transform cursor-default"
            />
          ))}
        </motion.div>

        {/* Right block */}
        <motion.div
          variants={fadeRight}
          custom={0}
          className="flex flex-col gap-4 flex-1"
        >
          <div className="grid grid-cols-2 gap-4">
            {["/sdextra4.png", "/sdextra5.png"].map((src, i) => (
              <motion.div
                key={i}
                variants={scaleReveal}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative h-[200px] md:h-[250px] group rounded-sm cursor-pointer"
               whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
               onClick={() => handleOpen(src, "Render")}>
                <Image
                  src={src}
                  alt="Render"
                  fill
                  className="object-cover shadow-sm transition-transform duration-700 "
                />
                <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ZoomIn size={16} />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={scaleReveal}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full h-[350px] md:h-[450px] group rounded-sm cursor-pointer"
           whileHover={{ y: -12, boxShadow: "0px 20px 40px -12px rgba(0,0,0,0.25)" }}
           onClick={() => handleOpen("/sdextra6.png", "Kitchen Render")}>
            <Image
              src="/sdextra6.png"
              alt="Kitchen Render"
              fill
              className="object-cover shadow-md border-b-[8px] border-l-[8px] border-primary-green/10 transition-transform duration-700 "
            />
            <div className="absolute top-4 right-4 bg-primary-green/80 text-[#F7F4EB] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <ZoomIn size={16} />
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile color palette */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex lg:hidden flex-row justify-center gap-4 w-full mt-4"
        >
          {["#3D251A", "#18392F", "#9B1D1D", "#A58B6D", "#E5D7B7"].map((color, i) => (
            <div key={i} style={{ backgroundColor: color }} className="h-8 w-1/5 rounded-full shadow-md" />
          ))}
        </motion.div>
      </motion.section>

      {/* ── Category: Sustainability Project ──────────────────── */}
      <motion.div
        id="sustainability-project"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="mt-24 mb-8 border-b-2 border-dotted border-primary-red/30 pb-4 scroll-mt-8"
      >
        <h2 className="text-4xl md:text-5xl text-primary-green tracking-widest font-bold">
          SUSTAINABILITY PROJECT
        </h2>
      </motion.div>

      {/* ── Sustainability Project ─────────────────────────────── */}
      <motion.section
        id="solar-pyramid-shield"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr_1.5fr] gap-6 my-16 md:items-stretch scroll-mt-8"
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
