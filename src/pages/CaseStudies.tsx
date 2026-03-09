import Navbar from "@/components/Navbar";
import CasesSection from "@/components/CasesSection";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <CasesSection />
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
