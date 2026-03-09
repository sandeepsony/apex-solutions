import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-oil-platform.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20">
      {/* Full-bleed hero image */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <img
          src={heroImg}
          alt="Industrial engineering at scale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />

        <div className="absolute inset-0 flex items-end">
          <div className="editorial-container w-full pb-16">
            <div className="max-w-2xl">
              <p className="label-uppercase text-primary-foreground/70 mb-4 animate-reveal">
                Data-Driven Engineering Advisory
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-primary-foreground mb-6 animate-reveal-delay-1">
                You Have the Data.
                <br />
                We Have the PhDs.
              </h1>
              <p className="font-body text-base text-primary-foreground/80 leading-relaxed max-w-lg mb-8 animate-reveal-delay-2">
                Engineering-intensive industries sit on vast, untapped data. Our subject-matter
                expert PhDs turn that data into decisions — solving problems that have resisted
                conventional approaches for decades.
              </p>
              <div className="animate-reveal-delay-3">
                <Button variant="editorialOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  See How We Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value proposition bar */}
      <div className="border-b border-border bg-secondary/30">
        <div className="editorial-container py-12 md:py-16">
          <p className="font-heading text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug max-w-4xl">
            Every engineering organization generates enormous volumes of operational,
            sensor, and simulation data. <span className="text-accent-warm">Very few know how to use it.</span> We
            bridge the gap between raw data and expert judgment — deploying PhDs who
            understand both the physics and the algorithms.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-border">
        <div className="editorial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "200+", label: "PhD Domain Experts" },
              { value: "85%", label: "Of Client Data Was Untapped" },
              { value: "$12B", label: "In Unlocked Value" },
              { value: "40+", label: "Engineering Disciplines" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <p className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
