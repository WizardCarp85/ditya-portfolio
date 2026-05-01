import Header from "@/components/Header";
import Resume from "@/components/Resume";
import TableOfContents from "@/components/TableOfContents";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="selection:bg-primary-green selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12 md:px-12 overflow-hidden">
        <SectionDivider className="-mx-4 md:-mx-12" />
        
        <Resume />
        <SectionDivider className="-mx-4 md:-mx-12" />
      
      <TableOfContents />
      <SectionDivider />
      
      <Footer />
    </main>
    </div>
  )}
