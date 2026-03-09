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
        <div className="absolute inset-0 bg-foreground/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="editorial-container w-full pb-16">
            <div className="max-w-2xl">
              <p className="label-uppercase text-primary-foreground/70 mb-4 animate-reveal">
                Featured
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-primary-foreground mb-6 animate-reveal-delay-1">
                Solving the World's Most Complex Engineering Challenges
              </h1>
              <p className="font-body text-base text-primary-foreground/80 leading-relaxed max-w-lg mb-8 animate-reveal-delay-2">
                Our PhD-led teams combine deep domain expertise with AI-driven
                analytics to deliver measurable outcomes across critical industries.
              </p>
              <div className="animate-reveal-delay-3">
                <Button variant="editorialOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker / stats bar */}
      <div className="border-b border-border">
        <div className="editorial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "200+", label: "PhD Consultants" },
              { value: "40+", label: "Industries Served" },
              { value: "$12B", label: "Client Value Created" },
              { value: "98%", label: "Retention Rate" },
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
