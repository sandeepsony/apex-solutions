import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-28">
      <div className="container">
        <div className="section-divider mb-20" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
            Ready to Transform
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Your Most Complex Challenge
            <br />
            <span className="text-gradient">Deserves World-Class Minds</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Engage our team of PhD experts and AI strategists to unlock
            breakthrough solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule a Briefing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Download Capabilities Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
