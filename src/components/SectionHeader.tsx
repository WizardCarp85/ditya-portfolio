import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";

export default function SectionHeader({ num, title, image, links }: { num: string; title: string; image?: string; links?: string[] }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 my-16">
      <div className="flex items-center">
        <div className="-rotate-90 text-4xl md:text-6xl text-primary-green font-oswald tracking-widest origin-right -translate-x-6">
          {num}
        </div>
        <div className="flex flex-col items-center">
          <div className="stamp-border p-2 border-primary-red">
            <div className="w-48 h-64 md:w-56 md:h-72 relative">
              <Image src={image || PLACEHOLDER_IMG} alt={title} fill className="object-cover" />
            </div>
          </div>
          <h2 className="text-primary-green text-2xl md:text-3xl mt-4 text-center">{title}</h2>
        </div>
      </div>
      
      {links && links.length > 0 && (
        <div className="flex-1 flex flex-col justify-end gap-6 md:ml-12 pb-8">
          {links.map((link, idx) => (
            <div key={idx} className="flex items-center gap-4 text-primary-red uppercase text-sm md:text-base font-semibold tracking-wider">
              <span>{link}</span>
              <div className="flex-1 border-b-2 border-dotted border-primary-red opacity-50" />
              <div className="text-primary-green font-oswald text-xl">{num}-0{idx + 1}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
