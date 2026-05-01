import SustainabilityProjectComponent from "@/components/SustainabilityProject";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function SustainabilityProjectPage() {
  return (
    <div className="selection:bg-primary-green selection:text-white min-h-screen flex flex-col">
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <BackButton />
        <SustainabilityProjectComponent />
      </main>
      <Footer />
    </div>
  );
}