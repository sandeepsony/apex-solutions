import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsightsSection from "@/components/InsightsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InsightsSection />
      <ExpertiseSection />
      <ApproachSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
