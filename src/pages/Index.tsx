import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StealthOverlay from "@/components/StealthOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StealthOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
