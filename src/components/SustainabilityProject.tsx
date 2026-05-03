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

export default function SustainabilityProject() {
  return (
    <>
      <SectionHeader num="02" title="SUSTAINABILITY PROJECT" image="/sustainability project.png" />

      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr_1.5fr] gap-6 my-16"
      >
        {/* Left Column: Text */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl text-primary-green font-bold tracking-wider">SOLAR PYRAMID<br/>SHIELD</h3>
            <div className="flex flex-col gap-2">
            </div>
          </div>
          
          <div className="text-primary-red text-sm leading-relaxed mb-6 font-medium">
            <p className="mb-4">Our university is a residential campus where The passage from Residency 3 to our academic block majorly faces the harmful sun rays from around 11am to around 3pm. The main focus is to design a module that helps to avoid south and west rays of sun in the given area that not only provides shade but also helps in cooling the area. Materials used:</p>
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
          </div>
        </motion.div>

        {/* Middle Column: Material Images */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-3">
          <div className="flex flex-col items-end gap-3 p-2 w-full">
              <div className="w-12 h-12 relative bg-primary-red overflow-hidden rounded-sm"><Image src="/rhino.png" alt="Rhino" fill className="object-cover" /></div>
              <div className="w-12 h-12 relative bg-primary-red overflow-hidden rounded-sm"><Image src="/twinmotion.png" alt="Twinmotion" fill className="object-cover" /></div>
          </div>
          <div className="relative aspect-square w-full hover:scale-[1.02] transition-transform duration-500">
            <Image src="/sustain1.png" alt="Material Powder Bowl" fill className="object-cover border-2 border-white shadow-sm" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"><Image src="/sustain2.png" alt="Lime Powder" fill className="object-cover border-2 border-white shadow-sm" /></div>
            <div className="relative aspect-[3/4] row-span-2 hover:scale-[1.02] transition-transform duration-500"><Image src="/sustain4.png" alt="Hempcrete Ball" fill className="object-cover border-2 border-white shadow-sm" /></div>
            <div className="relative aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"><Image src="/sustain3.png" alt="Hempcrete Blocks" fill className="object-cover border-2 border-white shadow-sm" /></div>
          </div>
        </motion.div>

        {/* Right Column: Renders */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          <div className="relative h-64 md:h-[45%] w-full hover:scale-[1.02] transition-transform duration-500">
            <Image src="/sustain5.png" alt="Pyramid Shield Render 1" fill className="object-cover border-2 border-white shadow-sm p-1" />
          </div>
          <div className="relative h-64 md:h-[55%] w-full hover:scale-[1.02] transition-transform duration-500">
            <Image src="/sustain6.png" alt="Pyramid Shield Render 2" fill className="object-cover border-2 border-white shadow-sm" />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
