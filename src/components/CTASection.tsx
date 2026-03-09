import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-primary py-24 md:py-32">
      <div className="editorial-container">
        <div className="max-w-2xl">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
            Work With Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground leading-[1.15] mb-6">
            Your most complex problems deserve world-class minds.
          </h2>
          <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
            Whether you're navigating energy transition, scaling digital twins, or
            optimizing industrial operations — our PhD-led teams are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="editorialOutline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule a Briefing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="editorialGhost"
              size="lg"
              className="text-primary-foreground/70 hover:text-primary-foreground decoration-primary-foreground/20 hover:decoration-primary-foreground/50"
            >
              Download Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
