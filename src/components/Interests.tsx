import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function Interests() {
  return (
    <>
      <SectionHeader num="05" title="INTERESTS" image="/interests.png" />
      
      <section className="my-16 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-8 items-center border-b-2 border-dotted border-primary-red pb-16">
          <div className="flex items-center gap-4">
            <div className="-rotate-90 text-4xl text-primary-green font-oswald -translate-x-4">05</div>
            <div className="stamp-border p-2 border-primary-red flex flex-col items-center justify-center">
              <div className="w-48 h-64 relative">
                <Image src={PLACEHOLDER_IMG} alt="Unreal Projects" fill className="object-cover" />
              </div>
              <h4 className="text-primary-green mt-2 text-xl tracking-widest">UNREAL PROJECTS</h4>
            </div>
          </div>
          <div className="flex-1 grid grid-rows-2 gap-4 w-full h-96">
             <div className="relative w-full h-full"><Image src={PLACEHOLDER_IMG} alt="Unreal 1" fill className="object-cover" /></div>
             <div className="relative w-full h-full"><Image src={PLACEHOLDER_IMG} alt="Unreal 2" fill className="object-cover" /></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center border-b-2 border-dotted border-primary-red pb-16">
          <div className="flex items-center gap-4">
            <div className="-rotate-90 text-4xl text-primary-green font-oswald -translate-x-4">05</div>
            <div className="stamp-border p-2 border-primary-red flex flex-col items-center justify-center">
              <div className="w-48 h-64 relative">
                <Image src={PLACEHOLDER_IMG} alt="ZBrush Projects" fill className="object-cover" />
              </div>
              <h4 className="text-primary-green mt-2 text-xl tracking-widest">ZBRUSH PROJECTS</h4>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 w-full h-96">
            <div className="grid grid-rows-2 gap-4">
              <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Zbrush 1" fill className="object-cover bg-black" /></div>
              <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Zbrush 2" fill className="object-cover bg-black" /></div>
            </div>
            <div className="relative h-full"><Image src={PLACEHOLDER_IMG} alt="Zbrush 3" fill className="object-cover bg-black" /></div>
          </div>
        </div>

        {/* The Joker */}
        <div>
          <div className="grid grid-cols-4 gap-2 mb-4 h-48 md:h-80">
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Joker 1" fill className="object-cover bg-black" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Joker 2" fill className="object-cover bg-black" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Joker 3" fill className="object-cover bg-black" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Joker 4" fill className="object-cover bg-black" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 relative h-48">
              <Image src={PLACEHOLDER_IMG} alt="Joker Detail" fill className="object-cover bg-black" />
            </div>
            <div className="col-span-2">
              <h3 className="text-3xl text-primary-green mb-2">THE JOKER</h3>
              <p className="text-primary-red text-xs leading-relaxed">
                This project involved 3D sculpting through mastering organic forms on Zbrush by using basic brushes like Claybuildup, TrimDynamic, Move etc. The character is then retopologized through UV unwrapping which was done on Autodesk Maya for low poly optimization. Adobe Substance Painter 3d was used for baking the high poly details on the UV unwrapped low poly model and then textures and colors were added to bring the stylized character to life. Finally the textures were imported back to Maya to produce high quality renders to showcase the end result. This was the result of a 10 day workshop which helped me in taking a deep dive in 3d modelling and sculpting pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* The Jade Mist Vagabond */}
        <div>
          <div className="grid grid-cols-4 gap-2 mb-4 h-48 md:h-80">
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Jade 1" fill className="object-cover bg-[#2d474b]" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Jade 2" fill className="object-cover bg-[#2d474b]" /></div>
            <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Jade 3" fill className="object-cover bg-[#2d474b]" /></div>
            <div className="grid grid-rows-2 gap-2">
              <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Jade 4" fill className="object-cover bg-[#2d474b]" /></div>
              <div className="relative"><Image src={PLACEHOLDER_IMG} alt="Jade 5" fill className="object-cover bg-[#2d474b]" /></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="col-span-1 relative h-48">
              <Image src={PLACEHOLDER_IMG} alt="Jade Detail" fill className="object-cover bg-[#2d474b]" />
            </div>
            <div className="col-span-2">
              <h3 className="text-3xl text-primary-green mb-2">THE JADE MIST VAGABOND</h3>
              <p className="text-primary-red text-xs leading-relaxed">
                This project involved 3D sculpting through mastering organic forms on Zbrush by using basic brushes like Claybuildup, TrimDynamic, Move etc. The character is then retopologized through UV unwrapping which was done on Autodesk Maya for low poly optimization. Adobe Substance Painter 3d was used for baking the high poly details on the UV unwrapped low poly model and then textures and colors were added to bring the stylized character to life. Finally the textures were imported back to Maya to produce high quality renders to showcase the end result. This was the result of a 10 day workshop which helped me in taking a deep dive in 3d modelling and sculpting pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
