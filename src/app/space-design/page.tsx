import SpaceDesignComponent from "@/components/SpaceDesign";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function SpaceDesignPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow max-w-7xl w-full mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <BackButton />
        <SpaceDesignComponent />
      </main>
      <Footer />
    </div>
  );
}