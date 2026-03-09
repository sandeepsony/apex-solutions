import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import InsightsSection from "@/components/InsightsSection";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <InsightsSection />
      <ApproachSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
