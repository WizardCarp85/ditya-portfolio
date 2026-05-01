import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_IMG } from "@/lib/constants";

export default function TableOfContents() {
  return (
    <section className="py-8">
      <h2 className="text-5xl md:text-7xl text-primary-green text-center tracking-widest mb-16">TABLE OF CONTENTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-16 max-w-6xl mx-auto">
        {[
          { num: "01", title: "SPACE DESIGN", image: "/space design.png", link: "/space-design" },
          { num: "02", title: "SUSTAINABILITY PROJECT", image: "/sustainability project.png", link: "/sustainability-project" },
          { num: "03", title: "CONSTRUCTION DRAWINGS", image: "/contruction drawings.png", link: "/construction-drawings" },
          { num: "04", title: "SERVICES", image: "/services.png", link: "/services" },
          { num: "05", title: "INTERESTS", image: "/interests.png", link: "/interests" },
          { num: "06", title: "MATERIAL EXPLORATION", image: "/material exploration.png", link: "/material-exploration" },
        ].map((item, idx) => (
          <Link href={item.link} key={idx} className="group relative flex flex-col items-center ml-4 md:ml-8 cursor-pointer transition-all duration-500 hover:-translate-y-3">
            <div className="absolute inset-0 bg-primary-green/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-full"></div>
            <div className="relative z-10">
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12 -rotate-90 text-4xl text-primary-green font-oswald transition-all duration-500 group-hover:scale-125 group-hover:-translate-x-2 group-hover:text-primary-red">
                {item.num}
              </div>
              <div className="shrink-0 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-2">
                <div className="w-28 h-40 md:w-44 md:h-60 relative rounded-sm overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-primary-red/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
            <h3 className="relative z-10 text-primary-red font-bold text-xs md:text-sm mt-6 text-center w-full max-w-35 md:max-w-45 leading-tight transition-colors duration-500 group-hover:text-primary-green">
              {item.title}
            </h3>
            <div className="h-0.5 w-0 bg-primary-green mt-2 transition-all duration-700 group-hover:w-full max-w-12.5 mx-auto opacity-0 group-hover:opacity-100"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
