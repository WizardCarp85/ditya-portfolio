"use client";

import Image from "next/image";
import { Mail, Phone, Link } from "lucide-react";
import { motion, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Shared variants ─────────────────────────────────────── */
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay: d } }),
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE, delay: 0.15 } },
};
const sectionTitle: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: d } }),
};

/* ─── Timeline item with animated dot ─────────────────────── */
function TimelineItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={slideUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative"
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE, delay: delay + 0.2 }}
        className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"
      />
      {children}
    </motion.div>
  );
}

/* ─── Skill logo with pop-in ───────────────────────────────── */
function SkillLogo({ src, alt, label, delay = 0 }: { src: string; alt: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className="flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:-translate-y-1">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <span className="text-primary-red text-xs font-semibold text-center">{label}</span>
    </motion.div>
  );
}

/* ─── Skill badge ──────────────────────────────────────────── */
function SkillBadge({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: EASE, delay }}
      className="text-primary-red text-[10px] uppercase font-bold text-center px-2 py-1 border border-primary-red/20 rounded-sm hover:bg-primary-red/5 transition-colors duration-300"
    >
      {label}
    </motion.div>
  );
}

export default function Resume() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-sm md:text-base -mx-4 md:-mx-12 overflow-hidden">

      {/* ── Left Column ──────────────────────────────────────── */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        {/* Profile photo with stamp border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="stamp-border p-1 w-48 h-48 mx-auto md:mx-0 border-primary-red"
        >
          <div className="w-full h-full relative">
            <Image src="/profilepic.png" alt="Profile Photo" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.h3
          variants={sectionTitle}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-primary-green text-2xl tracking-wider"
        >
          PERSONAL INFORMATION
        </motion.h3>

        {[
          { label: "Name", value: "Ditya Sharma" },
          { label: "Date of Birth", value: "12/12/2006" },
        ].map(({ label, value }, i) => (
          <motion.div
            key={i}
            variants={slideUp}
            custom={0.15 + i * 0.08}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-between font-bold text-primary-red uppercase text-xs"
          >
            <span>{label}</span>
            <span>{value}</span>
          </motion.div>
        ))}

        <motion.p
          variants={slideUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-primary-red leading-relaxed text-justify"
        >
          I am an aspiring Interior Designer dedicated to blending traditional heritage with contemporary functionality.
          I am a lifelong learner, eager to embrace every technical and creative challenge to craft impactful, narrative-driven spaces.
        </motion.p>

        <motion.div
          variants={slideUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-2 text-primary-red font-semibold text-xs mt-2"
        >
          <a href="tel:+919451397671" className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 hover:text-primary-green">
            <Phone size={14} /> +91 9451397671
          </a>
          <a href="mailto:dityashar06@gmail.com" className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 hover:text-primary-green">
            <Mail size={14} /> dityashar06@gmail.com
          </a>
          <a 
            href="https://linkedin.com/in/ditya-sharma-20a7bb347" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 hover:text-primary-green"
          >
            <Link size={14} /> linkedin.com/in/ditya-sharma-20a7bb347
          </a>
        </motion.div>
      </motion.div>

      {/* ── Middle Column ─────────────────────────────────────── */}
      <motion.div
        variants={slideUp}
        custom={0.1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-8"
      >
        {/* Education */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-6"
          >
            EDUCATION
          </motion.h3>
          <div className="flex flex-col gap-6 relative border-l-2 border-dotted border-primary-red pl-4 ml-2">
            {[
              { year: "2017–2022", school: "RANI LAXMI BAI MEMORIAL SCHOOL, HIGH SCHOOL", detail: "PERCENTAGE: 96.8%" },
              { year: "2022–24", school: "RANI LAXMI BAI MEMORIAL SCHOOL, SENIOR SECONDARY", detail: "PERCENTAGE: 98.6%" },
              { year: "2024–28", school: "SCHOOL OF DESIGN, RISHIHOOD UNIVERSITY", detail: "OVERALL CGPA: 9.3" },
            ].map(({ year, school, detail }, i) => (
              <TimelineItem key={i} delay={i * 0.1}>
                <div className="font-bold text-primary-red text-sm">{year}</div>
                <div className="text-primary-red font-semibold text-xs mt-1">{school}</div>
                <div className="text-primary-red text-xs mt-1">{detail}</div>
              </TimelineItem>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-6"
          >
            EXPERIENCE
          </motion.h3>
          <div className="flex flex-col gap-6 relative border-l-2 border-dotted border-primary-red pl-4 ml-2">
            {[
              { org: "Sargaalaya International Arts and Crafts Festival", role: "ASSOCIATE COORDINATOR", desc: "COORDINATION WITH INTERNATIONAL GUESTS AND ARTISANS, FINANCE MANAGEMENT, EVENT MANAGEMENT" },
              { org: "Rishihood University", role: "PLACEMENT COORDINATOR", desc: "PLACEMENT COORDINATION, CORPORATE LIAISON, STUDENT ADVOCACY" },
            ].map(({ org, role, desc }, i) => (
              <TimelineItem key={i} delay={i * 0.1}>
                <div className="font-bold text-primary-red text-xs uppercase">{org}</div>
                <div className="text-primary-red font-semibold text-xs mt-1">{role}</div>
                <div className="text-primary-red text-xs mt-1 leading-tight">{desc}</div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Right Column ──────────────────────────────────────── */}
      <motion.div
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-8"
      >
        {/* Software Skills */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-4"
          >
            SOFTWARE SKILLS
          </motion.h3>
          <div className="flex justify-between items-center text-primary-red mb-2 text-xs font-semibold text-center">
            <SkillLogo src="/autocad.png" alt="AutoCAD" label="AUTOCAD" delay={0} />
            <SkillLogo src="/rhino.png" alt="Rhino 3D" label="RHINO 3D" delay={0.07} />
            <SkillLogo src="/twinmotion.png" alt="Twinmotion" label="TWINMOTION" delay={0.14} />
            <SkillLogo src="/zbrush.png" alt="ZBrush" label="ZBRUSH" delay={0.21} />
            <SkillLogo src="/unreal.png" alt="Unreal Engine" label="UNREAL ENGINE" delay={0.28} />
          </div>
        </div>

        {/* Skills */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-4"
          >
            SKILLS
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {[
              "SPATIAL PLANNING",
              "LAYOUT DESIGN",
              "MATERIAL AND SURFACE EXPLORATION",
              "TECHNICAL DRAWINGS",
              "CREATIVITY",
              "DESIGN THINKING",
              "COMMUNICATION SKILLS"
            ].map((s, i) => (
              <SkillBadge key={i} label={s} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-4"
          >
            LANGUAGE
          </motion.h3>
          <div className="flex gap-4 text-primary-red font-bold text-xs uppercase">
            {["ENGLISH", "HINDI"].map((lang, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div>
          <motion.h3
            variants={sectionTitle}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-primary-green text-2xl tracking-wider mb-4"
          >
            OBJECTIVES
          </motion.h3>
          <div className="flex flex-col gap-4 text-primary-red text-xs">
            {[
              { term: "SHORT TERM", text: "To gain hands-on experience and enhance professional skills through participation in real life design projects. Aim to work in a creative environment that encourages learning, teamwork and professional growth." },
              { term: "LONG TERM", text: "After 5 years, possessing sufficient knowledge and experience to assume the position of design team leader." },
            ].map(({ term, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.15 }}
              >
                <div className="font-bold mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-red rounded-sm" />
                  {term}
                </div>
                <p className="pl-4 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
