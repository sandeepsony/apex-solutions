import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="editorial-container relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Open for Engagement
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15] mb-6">
            Your data holds answers your teams can't yet see.
            <br />
            <span className="text-primary">Our PhDs can.</span>
          </h2>

          <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Whether it's predictive maintenance, reservoir optimization, or climate
            risk quantification — we deploy the domain experts who turn your data
            into your greatest competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="command" size="lg">
              Schedule a Briefing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="commandOutline" size="lg">
              Download Capabilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
