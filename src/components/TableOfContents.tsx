import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";

export default function TableOfContents() {
  return (
    <section className="py-8">
      <h2 className="text-5xl md:text-7xl text-primary-green text-center tracking-widest mb-16">TABLE OF CONTENTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
        {[
          { num: "01", title: "SPACE DESIGN" },
          { num: "02", title: "SUSTAINABILITY PROJECT" },
          { num: "03", title: "CONSTRUCTION DRAWINGS" },
          { num: "04", title: "SERVICES" },
          { num: "05", title: "INTERESTS" },
          { num: "06", title: "MATERIAL EXPLORATION" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="-rotate-90 text-4xl text-primary-green font-oswald">{item.num}</div>
              <div className="stamp-border p-2 border-primary-red">
                <div className="w-24 h-32 md:w-32 md:h-40 relative">
                  <Image src={PLACEHOLDER_IMG} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            </div>
            <h3 className="text-primary-red font-bold text-xs md:text-sm mt-4 text-center w-3/4 leading-tight">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
