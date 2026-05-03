"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
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

      {/* The Kahlo Atrium */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row gap-8 my-16 items-center lg:items-start"
      >
        <motion.div variants={fadeInUp} className="w-full lg:w-1/4 shrink-0">
          <h3 className="text-4xl md:text-5xl text-primary-green mb-6 leading-tight font-semibold tracking-wide">THE KAHLO<br/>ATRIUM</h3>
          <p className="text-primary-red text-sm leading-[1.8] text-justify pr-2 font-medium">
            The project is to design a dedicated space in a backyard or garden for a celebrity of choice. The space should support activities the person enjoys—relaxing, reading, meditating, working out, or entertaining. Frida Kahlo was a Mexican painter known for her many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. She was a strong willed person, adored animals and had a great interest in fashion which was highlighted in her works. She enjoyed holding small gatherings with her friends and having drinks and storytelling session with them. The idea is to create a space in her memory that would be a bar and the space should support her love for animals while at the same time accommodate her love for small gatherings with her friends, family and all those who admire her as an artist and having drinks. It had to be bold just like her personality and at the same time should be inspired from her works.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4 h-150 md:h-200 bg-[#F7F4EB]/30 p-4 shadow-sm">
          <div className="relative w-full h-full min-h-62.5 hover:scale-[1.02] transition-transform duration-500"><Image src="/kahlo1.png" alt="Plan" fill className="object-contain" /></div>
          <div className="relative w-full h-full min-h-62.5 hover:scale-[1.02] transition-transform duration-500"><Image src="/kahlo2.png" alt="Concept & Moodboard" fill className="object-contain" /></div>
          <div className="relative w-full h-full min-h-62.5 hover:scale-[1.02] transition-transform duration-500"><Image src="/kahlo3.png" alt="Sections A-A & B-B" fill className="object-contain" /></div>
          <div className="relative w-full h-full min-h-62.5 hover:scale-[1.02] transition-transform duration-500"><Image src="/kahlo4.png" alt="Master Render Plan" fill className="object-contain" /></div>
        </motion.div>
      </motion.section>

      {/* Manduva Soukhyam */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24 mb-8 items-start"
      >
        {/* Left: 3D plan + sections */}
        <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-6">
          <div className="relative w-full h-75 md:h-100 bg-[#F7F4EB]/30 p-2 shadow-sm hover:scale-[1.02] transition-transform duration-500">
            <Image src="/manduva1.png" alt="3D Floor Plan" fill className="object-contain" />
          </div>
          <div className="relative w-full h-37.5 bg-[#F7F4EB]/30 p-2 shadow-sm hover:scale-[1.02] transition-transform duration-500">
            <Image src="/manduva3.png" alt="Elevation 1" fill className="object-contain" />
          </div>
          <div className="relative w-full h-37.5 bg-[#F7F4EB]/30 p-2 shadow-sm hover:scale-[1.02] transition-transform duration-500">
            <Image src="/manduva4.png" alt="Elevation 2" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Middle: 2D plan + details */}
        <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-6">
          <div className="relative w-full h-112.5 md:h-137.5 bg-[#F7F4EB]/30 p-2 shadow-sm border border-primary-green/10 hover:scale-[1.02] transition-transform duration-500">
            <Image src="/manduva2.png" alt="2D Floor Plan" fill className="object-contain" />
          </div>
          <div className="grid grid-cols-2 gap-2 h-[120px]">
            <div className="relative bg-[#F7F4EB]/30 p-1 shadow-sm border border-primary-green/10 hover:scale-[1.02] transition-transform duration-500"><Image src="/manduva5.png" alt="Detail" fill className="object-cover" /></div>
            <div className="relative bg-[#F7F4EB]/30 p-1 shadow-sm border border-primary-green/10 hover:scale-[1.02] transition-transform duration-500"><Image src="/manduva6.png" alt="Detail" fill className="object-cover" /></div>
          </div>
        </motion.div>

        {/* Right: Text & Logos */}
        <motion.div variants={fadeInUp} className="lg:col-span-4 flex gap-6 mt-8 lg:mt-0 max-w-full">
          <div className="flex flex-col gap-6 shrink-0 mt-4 items-center">
            {/* Logos */}
            <div className="relative w-12 h-12">
              <Image src="/autocad.png" alt="Logo A" fill className="object-contain" />
            </div>
            <div className="relative w-12 h-12">
              <Image src="/rhino.png" alt="Logo 3D" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-center mt-6 gap-2">
              <div className="relative w-12 h-12">
                <Image src="/gemini.png" alt="Logo Gemini" fill className="object-contain" />
              </div>
              <span className="text-primary-red text-sm font-bold tracking-wider capitalize">Gemini</span>
            </div>
          </div>
          
          <div className="flex flex-col text-left w-full pt-2">
            <h3 className="text-4xl lg:text-5xl text-primary-green font-semibold tracking-wide mb-8 leading-tight">
              MANDUVA<br/>SOUKHYAM
            </h3>
            
            <div className="text-primary-red text-xs lg:text-sm leading-[1.8] flex flex-col gap-4 font-medium">
              <p>Inspired by the traditional Manduva house, this residence is organized around a central open-to-sky courtyard that acts as both a climatic and social core. The client, Ms Pranaya, is from Hyderabad, Andhra Pradesh so she wanted a space that kept her close to her roots.</p>
              <p>Rather than being an empty void, the courtyard regulates the indoor environment by allowing hot air to rise, enabling cross-ventilation, and drawing natural light deep into surrounding rooms. Deep verandahs, known as ardha-manduva, wrap around the courtyard and function as shaded transitional zones. These semi-open spaces reduce heat gain while accommodating daily activities such as sitting or informal gatherings, blurring the boundary between indoors and outdoors.</p>
              <ul className="list-disc flex flex-col gap-2 mt-2 leading-[1.8] pl-4 text-left">
                <li>Emerald green walls bring a sense of calmness and connection to nature.</li>
                <li>The red oxide flooring adds warmth, nostalgia, and tactile richness reminiscent of traditional South Indian homes.</li>
                <li>Wooden columns, carved frames, and arched openings enhance the cultural character of the house.</li>
                <li>The courtyard water feature and surrounding vegetation introduce a soothing microclimate, reinforcing the feeling of comfort and tranquillity.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Gallery / Renders Collage */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row gap-4 my-16 p-4 md:p-8"
      >
        {/* Left Block */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4 flex-1 group">
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image src="/sdextra1.png" alt="Bathroom Render" fill className="object-cover shadow-md border-b-[8px] border-r-[8px] border-primary-green/10 transition-transform duration-700 hover:scale-[1.02]" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[200px] md:h-[250px]">
               <Image src="/sdextra2.png" alt="Courtyard Render" fill className="object-cover shadow-sm transition-transform duration-700 hover:scale-[1.02]" />
            </div>
            <div className="relative h-[200px] md:h-[250px]">
               <Image src="/sdextra3.png" alt="Veranda Render" fill className="object-cover shadow-sm transition-transform duration-700 hover:scale-[1.02]" />
            </div>
          </div>
        </motion.div>

        {/* Color Palette */}
        <motion.div variants={fadeInUp} className="hidden lg:flex flex-col justify-center gap-4 shrink-0 w-24 py-8 px-2 mx-2">
          <div className="h-12 w-full rounded-full bg-[#3D251A] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
          <div className="h-12 w-full rounded-full bg-[#18392F] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
          <div className="h-12 w-full rounded-full bg-[#9B1D1D] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
          <div className="h-12 w-full rounded-full bg-[#A58B6D] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
          <div className="h-12 w-full rounded-full bg-[#E5D7B7] shadow-md border border-white/20 hover:scale-110 transition-transform"></div>
        </motion.div>

        {/* Right Block */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4 flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[200px] md:h-[250px]">
               <Image src="/sdextra4.png" alt="Living Room Render" fill className="object-cover shadow-sm transition-transform duration-700 hover:scale-[1.02]" />
            </div>
            <div className="relative h-[200px] md:h-[250px]">
               <Image src="/sdextra5.png" alt="Bedroom Render" fill className="object-cover shadow-sm transition-transform duration-700 hover:scale-[1.02]" />
            </div>
          </div>
          <div className="relative w-full h-[350px] md:h-[450px]">
             <Image src="/sdextra6.png" alt="Kitchen Render" fill className="object-cover shadow-md border-b-[8px] border-l-[8px] border-primary-green/10 transition-transform duration-700 hover:scale-[1.02]" />
          </div>
        </motion.div>

        {/* Mobile Color Palette */}
        <motion.div variants={fadeInUp} className="flex lg:hidden flex-row justify-center gap-4 w-full mt-4">
          <div className="h-8 w-1/5 rounded-full bg-[#3D251A] shadow-md"></div>
          <div className="h-8 w-1/5 rounded-full bg-[#18392F] shadow-md"></div>
          <div className="h-8 w-1/5 rounded-full bg-[#9B1D1D] shadow-md"></div>
          <div className="h-8 w-1/5 rounded-full bg-[#A58B6D] shadow-md"></div>
          <div className="h-8 w-1/5 rounded-full bg-[#E5D7B7] shadow-md"></div>
        </motion.div>
      </motion.section>
    </>
  );
}
