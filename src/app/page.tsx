import Header from "@/components/Header";
import Resume from "@/components/Resume";
import TableOfContents from "@/components/TableOfContents";
import SpaceDesign from "@/components/SpaceDesign";
import SustainabilityProject from "@/components/SustainabilityProject";
import ConstructionDrawings from "@/components/ConstructionDrawings";
import Services from "@/components/Services";
import Interests from "@/components/Interests";
import MaterialExploration from "@/components/MaterialExploration";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:px-12 selection:bg-primary-green selection:text-white">
      <Header />
      <SectionDivider />
      
      <Resume />
      <SectionDivider />
      
      <TableOfContents />
      <SectionDivider />
      
      <SpaceDesign />
      <SectionDivider />
      
      <SustainabilityProject />
      <SectionDivider />
      
      <ConstructionDrawings />
      <SectionDivider />
      
      <Services />
      <SectionDivider />
      
      <Interests />
      <SectionDivider />
      
      <MaterialExploration />
      <SectionDivider />
      
      <Footer />
    </main>
  );
}
