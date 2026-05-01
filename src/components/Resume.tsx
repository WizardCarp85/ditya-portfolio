"use client";

import Image from "next/image";
import { Mail, Phone, Link } from "lucide-react";
import { motion } from "framer-motion";


export default function Resume() {
  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-sm md:text-base -mx-4 md:-mx-12 overflow-hidden">
      {/* Left Column */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <div className="stamp-border p-1 w-48 h-48 mx-auto md:mx-0 border-primary-red">
          <div className="w-full h-full relative">
            <Image src="/profilepic.png" alt="Profile Photo" fill className="object-cover" />
          </div>
        </div>
        <h3 className="text-primary-green text-2xl tracking-wider">PERSONAL INFORMATION</h3>
        <div className="flex justify-between font-bold text-primary-red uppercase text-xs">
          <span>Name</span>
          <span>Ditya Sharma</span>
        </div>
        <div className="flex justify-between font-bold text-primary-red uppercase text-xs">
          <span>Date of Birth</span>
          <span>12/12/2000</span>
        </div>
        <p className="text-primary-red leading-relaxed text-justify">
          I am an aspiring Interior Designer dedicated to blending traditional heritage with contemporary functionality. 
          I am a lifelong learner, eager to embrace every technical and creative challenge to craft impactful, narrative-driven spaces.
        </p>
        <div className="flex flex-col gap-2 text-primary-red font-semibold text-xs mt-2">
          <div className="flex items-center gap-2"><Phone size={14} /> +91 9453997573</div>
          <div className="flex items-center gap-2"><Mail size={14} /> dityasharma00@gmail.com</div>
          <div className="flex items-center gap-2"><Link size={14} /> linkedin.com/in/ditya-sharma-2007</div>
        </div>
      </motion.div>

      {/* Middle Column */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-6">EDUCATION</h3>
          <div className="flex flex-col gap-6 relative border-l-2 border-dotted border-primary-red pl-4 ml-2">
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"></div>
              <div className="font-bold text-primary-red text-sm">2017-2022</div>
              <div className="text-primary-red font-semibold text-xs mt-1">RANI LAXMI BAI MEMORIAL SCHOOL, HIGH SCHOOL</div>
              <div className="text-primary-red text-xs mt-1">PERCENTAGE: 96.8%</div>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"></div>
              <div className="font-bold text-primary-red text-sm">2022-24</div>
              <div className="text-primary-red font-semibold text-xs mt-1">RANI LAXMI BAI MEMORIAL SCHOOL, SENIOR SECONDARY</div>
              <div className="text-primary-red text-xs mt-1">PERCENTAGE: 98.6%</div>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"></div>
              <div className="font-bold text-primary-red text-sm">2024-28</div>
              <div className="text-primary-red font-semibold text-xs mt-1">SCHOOL OF DESIGN, RISHIHOOD UNIVERSITY</div>
              <div className="text-primary-red text-xs mt-1">OVERALL CGPA: 9.3</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-6">EXPERIENCE</h3>
          <div className="flex flex-col gap-6 relative border-l-2 border-dotted border-primary-red pl-4 ml-2">
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"></div>
              <div className="font-bold text-primary-red text-xs uppercase">Sargaalaya International Arts and Crafts Festival</div>
              <div className="text-primary-red font-semibold text-xs mt-1">ASSOCIATE COORDINATOR</div>
              <div className="text-primary-red text-xs mt-1 leading-tight">COORDINATION WITH INTERNATIONAL GUESTS AND ARTISANS, FINANCE MANAGEMENT, EVENT MANAGEMENT</div>
            </div>
            <div className="relative">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-primary-red rounded-full"></div>
              <div className="font-bold text-primary-red text-xs uppercase">Rishihood University</div>
              <div className="text-primary-red font-semibold text-xs mt-1">PLACEMENT COORDINATOR</div>
              <div className="text-primary-red text-xs mt-1 leading-tight">PLACEMENT COORDINATION, CORPORATE LIAISON, STUDENT ADVOCACY</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-4">SOFTWARE SKILLS</h3>
          <div className="flex justify-between items-center text-primary-red mb-2 text-xs font-semibold text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12"><Image src="/autocad.png" alt="AutoCAD" fill className="object-contain" /></div>
              <span>AUTOCAD</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12"><Image src="/rhino.png" alt="Rhino 3D" fill className="object-contain" /></div>
              <span>RHINO 3D</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12"><Image src="/twinmotion.png" alt="Twinmotion" fill className="object-contain" /></div>
              <span>TWINMOTION</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12"><Image src="/zbrush.png" alt="ZBrush" fill className="object-contain" /></div>
              <span>ZBRUSH</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 md:w-12 md:h-12"><Image src="/unreal.png" alt="Unreal Engine" fill className="object-contain" /></div>
              <span>UNREAL ENGINE</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-4">SKILLS</h3>
          <div className="grid grid-cols-3 gap-2 text-primary-red text-[10px] uppercase font-bold text-center">
            <div>PRESENTATION</div>
            <div>TEAMWORK</div>
            <div>TIME MANAGEMENT</div>
            <div>SKETCH</div>
            <div>CREATIVITY</div>
            <div>COMMUNICATION</div>
            <div>RESEARCH</div>
            <div>LAYOUT</div>
          </div>
        </div>

        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-4">LANGUAGE</h3>
          <div className="flex gap-4 text-primary-red font-bold text-xs uppercase">
            <span>ENGLISH</span>
            <span>HINDI</span>
          </div>
        </div>

        <div>
          <h3 className="text-primary-green text-2xl tracking-wider mb-4">OBJECTIVES</h3>
          <div className="flex flex-col gap-4 text-primary-red text-xs">
            <div>
              <div className="font-bold mb-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-red rounded-sm"></div> SHORT TERM
              </div>
              <p className="pl-4 leading-relaxed">
                To gain hands-on experience and enhance professional skills through participation in real life design projects. Aim to work in a creative environment that encourages learning, teamwork and professional growth.
              </p>
            </div>
            <div>
              <div className="font-bold mb-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-red rounded-sm"></div> LONG TERM
              </div>
              <p className="pl-4 leading-relaxed">
                After 5 years, possessing sufficient knowledge and experience to assume the position of design team leader.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
