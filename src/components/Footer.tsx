"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SPACE DESIGN", href: "/space-design" },
  { label: "SUSTAINABILITY", href: "/sustainability-project" },
  { label: "CONSTRUCTION", href: "/construction-drawings" },
  { label: "SERVICES", href: "/services" },
  { label: "INTERESTS", href: "/interests" },
  { label: "MATERIALS", href: "/material-exploration" },
];

const contacts = [
  { icon: Phone, label: "+91 9453997573", href: "tel:+919453997573" },
  { icon: Mail, label: "dityasharma00@gmail.com", href: "mailto:dityasharma00@gmail.com" },
  { icon: ExternalLink, label: "linkedin.com/in/ditya-sharma-2007", href: "https://linkedin.com/in/ditya-sharma-2007" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-dotted border-primary-red/40 relative overflow-hidden">

      {/* Decorative top rule that draws itself */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute top-0 left-0 right-0 h-px bg-primary-green/20 origin-left"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* ── Big Thank You ─────────────────────────────── */}
        <div className="text-center mb-14 overflow-hidden">
          <motion.div
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: EASE }}
          >
            <h2 className="text-6xl md:text-8xl text-primary-green font-oswald tracking-[0.2em]">
              THANK YOU
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="text-primary-red text-xs font-semibold mt-3 uppercase"
          >
            for visiting my portfolio
          </motion.p>

          {/* Stamp-style decorative rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="mt-6 border-b-2 border-dotted border-primary-red/50 origin-center max-w-xs mx-auto"
          />
        </div>

        {/* ── Three-column grid ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-14">

          {/* Col 1 — About snippet */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 mb-2">
              {/* Tiny stamp corner decoration */}
              <div className="stamp-border w-8 h-8 shrink-0 border-primary-green" />
              <h3 className="text-primary-green text-sm font-oswald tracking-widest">DITYA SHARMA</h3>
            </div>
            <p className="text-primary-red text-xs leading-relaxed font-medium">
              Aspiring Interior Designer blending traditional heritage with contemporary functionality.
              Crafting impactful, narrative-driven spaces.
            </p>
            <div className="border-b border-dotted border-primary-red/30 mt-2" />
            <p className="text-primary-red/60 text-[10px] tracking-widest uppercase font-semibold">
              School of Design · Rishihood University
            </p>
          </motion.div>

          {/* Col 2 — Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-primary-green text-sm font-oswald tracking-widest mb-2">NAVIGATION</h3>
            {navLinks.map(({ label, href }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                className="flex items-center gap-2 group"
              >
                <div className="w-1 h-1 rounded-full bg-primary-red/40 group-hover:bg-primary-red transition-colors duration-300" />
                <Link
                  href={href}
                  className="text-primary-red text-xs font-semibold tracking-wider hover:text-primary-green transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-primary-green text-sm font-oswald tracking-widest mb-2">GET IN TOUCH</h3>
            {contacts.map(({ icon: Icon, label, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                className="flex items-center gap-3 text-primary-red text-xs font-medium group hover:text-primary-green transition-colors duration-300"
              >
                <Icon
                  size={14}
                  className="shrink-0 text-primary-red/60 group-hover:text-primary-green transition-colors duration-300"
                />
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom bar ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="border-t border-dotted border-primary-red/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-primary-red/50 text-[10px] font-semibold tracking-widest uppercase">
            © {new Date().getFullYear()} Ditya Sharma · All rights reserved
          </p>

          {/* Page number style marker — matching the in-page blueprint style */}
          <div className="flex items-center gap-2 text-primary-red/40">
            <span className="text-[10px] font-oswald tracking-widest">PORTFOLIO</span>
            <div className="w-16 border-b border-dotted border-primary-red/30" />
            <span className="text-[10px] font-oswald">2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
