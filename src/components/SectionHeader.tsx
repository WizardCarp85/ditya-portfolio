"use client";

import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";

/** Convert a display label to a URL-safe id slug */
export function toSlug(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function SectionHeader({
  num,
  title,
  image,
  links,
  description,
}: {
  num: string;
  title: string;
  image?: string;
  links?: (string | { label: string; sublinks?: string[] })[];
  description?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 my-16">
      {/* Left: number + cover image + title */}
      <div className="flex items-center">
        <div className="-rotate-90 text-4xl md:text-6xl text-primary-green font-oswald tracking-widest origin-right -translate-x-6">
          {num}
        </div>
        <div className="flex flex-col items-center">
          <div className="p-2">
            <div className="w-48 h-64 md:w-56 md:h-72 relative overflow-hidden rounded-sm group">
              <Image
                src={image || PLACEHOLDER_IMG}
                alt={title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-in-out "
              />
            </div>
          </div>
          <h2 className="text-primary-green text-2xl md:text-3xl mt-4 text-center">{title}</h2>
        </div>
      </div>

      {/* Right: anchor links OR description text */}
      {(links && links.length > 0) ? (
        <div className="flex-1 flex flex-col justify-end gap-6 md:ml-12 pb-8">
          {links.map((linkItem, idx) => {
            const isObj = typeof linkItem === 'object' && linkItem !== null;
            const label = isObj ? (linkItem as any).label : linkItem;
            const sublinks = isObj ? (linkItem as any).sublinks : null;
            
            return (
              <div key={idx} className="flex flex-col gap-2">
                <a
                  href={`#${toSlug(label)}`}
                  className="flex items-center gap-4 text-primary-red uppercase text-sm md:text-base font-semibold tracking-wider group cursor-pointer hover:text-primary-green transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {label}
                  </span>
                  <div className="flex-1 border-b-2 border-dotted border-primary-red opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="text-primary-green font-oswald text-xl group- transition-transform duration-300">
                    {num}-0{idx + 1}
                  </div>
                </a>
                {sublinks && sublinks.length > 0 && (
                  <div className="flex flex-col gap-2 ml-4 mt-1 border-l-2 border-dotted border-primary-red/30 pl-4 py-1">
                    {sublinks.map((sublink: string, subIdx: number) => (
                      <a 
                        key={subIdx}
                        href={`#${toSlug(sublink)}`}
                        className="text-primary-red/70 text-xs uppercase font-semibold tracking-widest hover:text-primary-green transition-colors relative group flex items-center"
                      >
                        <span className="absolute -left-4 w-3 border-t-2 border-dotted border-primary-red/30 group-hover:border-primary-green transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {sublink}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : description ? (
        <div className="flex-1 flex items-center md:ml-12 pb-8">
          <p className="text-primary-red text-xs font-semibold tracking-widest uppercase leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
      ) : null}
    </div>
  );
}
