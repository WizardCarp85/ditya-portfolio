import Image from "next/image";
import { PLACEHOLDER_IMG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 text-center">
      <h2 className="text-6xl md:text-8xl text-primary-green font-oswald tracking-widest mb-12">THANK YOU!</h2>
      <div className="w-full max-w-4xl mx-auto h-48 md:h-80 relative overflow-hidden">
        <Image src={PLACEHOLDER_IMG} alt="House Illustration Placeholder" fill className="object-cover opacity-80" />
      </div>
    </footer>
  );
}
