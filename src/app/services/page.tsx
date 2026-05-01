import ServicesComponent from "@/components/Services";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="selection:bg-primary-green selection:text-white min-h-screen flex flex-col">
      <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <BackButton />
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
}