import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DescentSection from "@/components/DescentSection";
import RevealSection from "@/components/RevealSection";
import CasesSection from "@/components/CasesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BrandGallery from "@/components/BrandGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BrandGallery />
      <HeroSection />
      <DescentSection />
      <RevealSection />
      <CasesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
