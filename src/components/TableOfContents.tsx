"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const items = [
  { num: "01", title: "SPACE DESIGN", image: "/space design.png", link: "/space-design" },
  { num: "02", title: "SUSTAINABILITY PROJECT", image: "/sustainability project.png", link: "/sustainability-project" },
  { num: "03", title: "CONSTRUCTION DRAWINGS", image: "/construction drawings.png", link: "/construction-drawings" },
  { num: "04", title: "SERVICES", image: "/services.png", link: "/services" },
  { num: "05", title: "INTERESTS", image: "/interests.png", link: "/interests" },
  { num: "06", title: "MATERIAL EXPLORATION", image: "/material exploration.png", link: "/material-exploration" },
];

export default function TableOfContents() {
  return (
    <section id="table-of-contents" className="py-8 scroll-mt-12">
      {/* Section heading with letter-spacing expand */}
      <div className="overflow-hidden mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 60, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          className="text-5xl md:text-7xl text-primary-green text-center tracking-widest"
        >
          TABLE OF CONTENTS
        </motion.h2>
      </div>

      {/* Decorative divider line that draws itself */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
        className="w-full h-px bg-primary-red/20 origin-left mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-16 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: EASE }}
          >
            <Link
              href={item.link}
              className="group relative flex flex-col items-center ml-4 md:ml-8 cursor-pointer transition-all duration-500 hover:-translate-y-3"
            >
              {/* Glow halo */}
              <div className="absolute inset-0 bg-primary-green/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-full" />

              <div className="relative z-10">
                {/* Rotating number on hover */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12 -rotate-90 text-4xl text-primary-green font-oswald transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-2 group-hover:text-primary-red origin-center"
                >
                  {item.num}
                </motion.div>

                {/* Card image */}
                <div className="shrink-0 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:scale-105 group-hover:rotate-1">
                  <div className="w-28 h-40 md:w-46 md:h-60 relative rounded-sm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Red overlay on hover */}
                    <div className="absolute inset-0 bg-primary-red/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
                    {/* Bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-green/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-primary-red font-bold text-xs md:text-sm mt-6 text-center w-full max-w-35 md:max-w-45 leading-tight transition-colors duration-500 group-hover:text-primary-green">
                {item.title}
              </h3>

              {/* Underline that grows on hover */}
              <motion.div
                className="h-0.5 w-0 bg-primary-green mt-2 transition-all duration-700 group-hover:w-full max-w-12.5 mx-auto opacity-0 group-hover:opacity-100"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
