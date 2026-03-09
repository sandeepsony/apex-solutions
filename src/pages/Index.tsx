import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExplodedEngineering from "@/components/ExplodedEngineering";
import ExpertiseSection from "@/components/ExpertiseSection";
import ApproachSection from "@/components/ApproachSection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExplodedEngineering />
      <ExpertiseSection />
      <ApproachSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
