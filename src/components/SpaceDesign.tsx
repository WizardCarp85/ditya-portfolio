import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="col-span-1">
          <h3 className="text-4xl text-primary-green mb-4 leading-tight">THE KAHLO<br/>ATRIUM</h3>
          <p className="text-primary-red text-sm leading-relaxed text-justify pr-4">
            The project is to design a dedicated space in a backyard or garden for a celebrity of choice. The space should support activities the person enjoys - relaxing, reading, meditating, working out, or entertaining. Frida Kahlo was a Mexican painter known for her many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. She was a strong willed person, adored animals and had a great interest in fashion which was highlighted in her works. She enjoyed holding small gatherings with her friends and having drinks and storytelling session with them. The idea is to create a space in her memory that would be a bar and the space should support her love for animals while at the same time accommodate her love for small gatherings with her friends, family and all those who admire her as an artist and having drinks. It had to be bold just like her personality and at the same time should be inspired from her works.
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="relative h-64 md:h-auto"><Image src={PLACEHOLDER_IMG} alt="Plan" fill className="object-cover stamp-border border-primary-red p-1" /></div>
          <div className="relative h-64 md:h-auto"><Image src={PLACEHOLDER_IMG} alt="Moodboard" fill className="object-cover stamp-border border-primary-red p-1" /></div>
          <div className="col-span-2 relative h-64"><Image src={PLACEHOLDER_IMG} alt="Section" fill className="object-cover stamp-border border-primary-red p-1" /></div>
        </div>
      </section>

      {/* Manduva Soukhyam */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 bg-[#F1EAD9] p-8 -mx-6 md:mx-0 stamp-border border-primary-red border-opacity-30">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 relative h-64"><Image src={PLACEHOLDER_IMG} alt="Render" fill className="object-cover" /></div>
          <div className="col-span-2 relative h-64"><Image src={PLACEHOLDER_IMG} alt="Plan" fill className="object-cover" /></div>
          <div className="relative h-32"><Image src={PLACEHOLDER_IMG} alt="Detail" fill className="object-cover" /></div>
          <div className="relative h-32"><Image src={PLACEHOLDER_IMG} alt="Detail" fill className="object-cover" /></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-end mb-6 text-primary-red">
             {/* Gemini/Accents */}
             <div className="flex flex-col items-center gap-4">
               <div className="text-3xl font-oswald border-2 border-primary-red rounded-full w-12 h-12 flex items-center justify-center">A</div>
               <div className="text-xl">✨ Gemini</div>
             </div>
          </div>
          <h3 className="text-4xl text-primary-green text-right mb-6">MANDUVA<br/>SOUKHYAM</h3>
          <div className="text-primary-red text-sm text-right leading-relaxed pl-8">
            <p className="mb-4">Inspired by the traditional Manduva house, this residence is organized around a central open-to-sky courtyard that acts as both a climatic and social core. The client, Ms Pranaya, is from Hyderabad, Andhra Pradesh so she wanted a space that kept her close to her roots.</p>
            <p className="mb-4">Rather than being an empty void, the courtyard regulates the indoor environment by allowing hot air to rise, enabling cross-ventilation, and drawing natural light deep into surrounding rooms. Deep verandahs, known as ardha manduva, wrap around the courtyard and function as shaded transitional zones.</p>
            <ul className="list-disc list-inside mt-4 text-xs flex flex-col gap-2">
              <li>Emerald green walls bring a sense of calmness and connection to nature.</li>
              <li>The red oxide flooring adds warmth, nostalgia, and tactile richness reminiscent of traditional South Indian homes.</li>
              <li>Wooden columns, carved frames, and arched openings enhance the cultural character of the house.</li>
              <li>The courtyard water feature and surrounding vegetation introduce a soothing microclimate, reinforcing the feeling of comfort and tranquillity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div className="col-span-2 relative h-80"><Image src={PLACEHOLDER_IMG} alt="Gallery 1" fill className="object-cover border-2 border-primary-green" /></div>
        <div className="relative h-80"><Image src={PLACEHOLDER_IMG} alt="Gallery 2" fill className="object-cover border-2 border-primary-green" /></div>
        <div className="relative h-80"><Image src={PLACEHOLDER_IMG} alt="Gallery 3" fill className="object-cover border-2 border-primary-green" /></div>
        <div className="relative h-48"><Image src={PLACEHOLDER_IMG} alt="Gallery 4" fill className="object-cover border-2 border-primary-green" /></div>
        <div className="relative h-48"><Image src={PLACEHOLDER_IMG} alt="Gallery 5" fill className="object-cover border-2 border-primary-green" /></div>
        <div className="col-span-2 flex flex-col justify-center gap-2 px-4">
          <div className="h-6 w-full bg-[#3D251A]"></div>
          <div className="h-6 w-full bg-[#18392F]"></div>
          <div className="h-6 w-full bg-[#9B1D1D]"></div>
          <div className="h-6 w-full bg-[#A58B6D]"></div>
          <div className="h-6 w-full bg-[#E5D7B7]"></div>
        </div>
      </section>
    </>
  );
}
