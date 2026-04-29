import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function ConstructionDrawings() {
  return (
    <>
      <SectionHeader 
        num="03" 
        title="CONSTRUCTION DRAWINGS" 
        links={["GLASS PARTITION", "TYPES OF ARCHS", "TYPES OF LINTEL"]}
      />

      <section className="flex flex-col gap-16 my-16">
        <div>
          <h3 className="text-center text-3xl text-primary-green mb-8">GLASS PARTITION</h3>
          <div className="relative w-full h-96 md:h-[600px] stamp-border border-primary-red p-2 bg-[#F7F4EB]">
            <Image src={PLACEHOLDER_IMG} alt="Glass Partition Drawing" fill className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl text-primary-green mb-8">TYPES OF ARCHS</h3>
          <div className="relative w-full h-96 md:h-[600px] stamp-border border-primary-red p-2 bg-[#F7F4EB]">
            <Image src={PLACEHOLDER_IMG} alt="Types of Archs Drawing" fill className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl text-primary-green mb-8">TYPES OF LINTEL</h3>
          <div className="relative w-full h-96 md:h-[600px] stamp-border border-primary-red p-2 bg-[#F7F4EB]">
            <Image src={PLACEHOLDER_IMG} alt="Types of Lintel Drawing" fill className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
