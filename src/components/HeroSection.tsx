import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-6">
              PhD-Led · AI-Augmented · Industry-Defining
            </p>
          </div>

          <h1 className="animate-slide-up-delay-1 font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-8">
            Engineering the Future
            <br />
            Through{" "}
            <span className="text-gradient">Deep Expertise</span>
          </h1>

          <p className="animate-slide-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            We deploy subject-matter expert PhDs and next-generation AI to solve
            the most critical challenges in engineering, climate, energy, and
            advanced manufacturing.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              Explore Our Expertise <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
