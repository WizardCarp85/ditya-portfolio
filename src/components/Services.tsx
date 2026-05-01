import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <>
      <SectionHeader 
        num="04" 
        title="SERVICES" 
        image="/services.png"
        links={["PUBLIC WASHROOM PLUMBING SERVICE", "RESIDENTIAL PLUMBING SERVICE"]}
      />

      <section className="flex flex-col gap-16 my-16">
        <div>
          <h3 className="text-center text-3xl text-primary-green mb-8">PUBLIC WASHROOM PLUMBING SERVICES</h3>
          <div className="relative w-full h-80 md:h-[500px] stamp-border border-primary-red p-2 bg-[#F7F4EB]">
            <Image src={PLACEHOLDER_IMG} alt="Public Washroom Plumbing" fill className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="text-center text-3xl text-primary-green mb-8">RESIDENTIAL PLUMBING SERVICE</h3>
          <div className="relative w-full h-80 md:h-[500px] stamp-border border-primary-red p-2 bg-[#F7F4EB]">
            <Image src={PLACEHOLDER_IMG} alt="Residential Plumbing" fill className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
