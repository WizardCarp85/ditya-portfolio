import SpaceAndFacadeDesignComponent from "@/components/SpaceAndFacadeDesign";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function SpaceAndFacadeDesignPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow max-w-7xl w-full mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <BackButton />
        <SpaceAndFacadeDesignComponent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}