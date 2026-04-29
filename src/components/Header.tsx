import Image from "next/image";

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center w-full mb-16 h-screen">
      <div className="">
        <h1 className="text-6xl md:text-9xl text-primary-green tracking-[0.2em] mb-6 mt-12">
          PORTFOLIO
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground font-bold tracking-[0.4em] uppercase mb-12">
          Interior Designer
        </h2>
      </div>
      <div className="w-screen h-[50vh] md:h-[60vh] relative overflow-hidden p-2 border-primary-red">
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
