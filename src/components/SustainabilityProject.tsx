import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function SustainabilityProject() {
  return (
    <>
      <SectionHeader num="02" title="SUSTAINABILITY PROJECT" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
        <div>
          <h3 className="text-3xl text-primary-green mb-6">SOLAR PYRAMID<br/>SHIELD</h3>
          <div className="text-primary-red text-sm leading-relaxed mb-6">
            <p className="mb-4">Our university is a residential campus where The passage from Residency 2 to our academic block majorly faces the harmful sun rays from around 11am to around 3pm. The main focus is to design a module that helps to avoid south and west rays of sun in the given area that not only provides shade but also helps in cooling the area. Materials used:</p>
            <ul className="list-disc list-inside mb-4 flex flex-col gap-2">
              <li>Paper pulp: helps in ensuring sustainability of the tile.</li>
              <li>Lime: acts as a binder and hardener for the tile.</li>
              <li>Hempcrete: helps in structural strength and stability, weather resistance and thermal resistance.</li>
              <li>Starch binder (corn, potato or tapioca): helps in water resistance as well as thermal insulation.</li>
            </ul>
            <p className="font-bold">Approximate costing:</p>
            <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
              <li>Paper pulp: The cost of mid quality recycled paper pulp costs around Rs. 35000 to 50000 per tonne i.e. ₹ 35 - 50 per kg.</li>
              <li>Hydrated Lime: Good grade hydrated lime cost around ₹ 6 to 10 per kg.</li>
              <li>Hempcrete: Given local costs having to include transport etc., a realistic ballpark for hempcrete would be around ₹ 20 to 35 per kg.</li>
              <li>Tapioca Starch: Cost for industrial / binder-grade tapioca starch in or near Delhi is approximately ₹ 30 to ₹ 60 per kg.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Pyramid Shield 1" fill className="object-cover stamp-border border-primary-red p-1" /></div>
          <div className="grid grid-cols-2 gap-4 h-48">
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Material 1" fill className="object-cover" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Material 2" fill className="object-cover" /></div>
          </div>
          <div className="relative h-64"><Image src={PLACEHOLDER_IMG} alt="Pyramid Shield 2" fill className="object-cover" /></div>
        </div>
      </section>
    </>
  );
}
