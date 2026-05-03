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

export default function SpaceDesign() {
  return (
    <>
      <SectionHeader
        num="01"
        title="SPACE DESIGN"
        image="/space design.png"
        links={["THE KAHLO ATRIUM", "MANDUVA SOUKHYAM"]}
      />

      {/* ── The Kahlo Atrium ──────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row gap-8 my-16 items-start">
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
              className="relative w-full h-full min-h-62.5 overflow-hidden group"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Manduva Soukhyam ─────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24 mb-8 items-start"
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
              className={`relative w-full ${flex} min-h-[120px] bg-[#F7F4EB]/30 p-2 shadow-sm overflow-hidden group`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
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
          <div className="relative flex-1 min-h-[300px] bg-[#F7F4EB]/30 p-2 shadow-sm border border-primary-green/10 overflow-hidden group">
            <Image
              src="/manduva2.png"
              alt="2D Floor Plan"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 h-[120px]">
            {["/manduva5.png", "/manduva6.png"].map((src, i) => (
              <div key={i} className="relative bg-[#F7F4EB]/30 p-1 shadow-sm border border-primary-green/10 overflow-hidden group">
                <Image
                  src={src}
                  alt="Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
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
            className="relative w-full h-[350px] md:h-[450px] overflow-hidden group"
          >
            <Image
              src="/sdextra1.png"
              alt="Bathroom Render"
              fill
              className="object-cover shadow-md border-b-[8px] border-r-[8px] border-primary-green/10 transition-transform duration-700 group-hover:scale-[1.04]"
            />
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
                className="relative h-[200px] md:h-[250px] overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Render"
                  fill
                  className="object-cover shadow-sm transition-transform duration-700 group-hover:scale-[1.05]"
                />
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
              className="h-12 w-full rounded-full shadow-md border border-white/20 hover:scale-110 transition-transform cursor-default"
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
                className="relative h-[200px] md:h-[250px] overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Render"
                  fill
                  className="object-cover shadow-sm transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={scaleReveal}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full h-[350px] md:h-[450px] overflow-hidden group"
          >
            <Image
              src="/sdextra6.png"
              alt="Kitchen Render"
              fill
              className="object-cover shadow-md border-b-[8px] border-l-[8px] border-primary-green/10 transition-transform duration-700 group-hover:scale-[1.04]"
            />
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
    </>
  );
}
