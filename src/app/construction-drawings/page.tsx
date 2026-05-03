import ConstructionDrawingsComponent from "@/components/ConstructionDrawings";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function ConstructionDrawingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow max-w-7xl w-full mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <BackButton />
        <ConstructionDrawingsComponent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}