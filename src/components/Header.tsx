import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center w-full h-screen">
      <div className="pt-16 md:pt-24 shrink-0">
        <h1 className="text-6xl md:text-9xl text-primary-green tracking-[0.2em] mb-6">
          PORTFOLIO
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground font-bold tracking-[0.4em] uppercase mb-8">
          Interior Designer
        </h2>
      </div>
      <div className="w-full flex-1 relative overflow-hidden">
        <Image
          src="/homepage.png"
          alt="House Illustration"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
