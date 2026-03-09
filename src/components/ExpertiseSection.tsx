import { Cpu, Leaf, Factory, Droplets, Building2, Layers } from "lucide-react";

const domains = [
  {
    icon: Cpu,
    title: "Engineering & Systems",
    description:
      "Complex systems design, optimization, and failure analysis led by PhD engineers with decades of field experience.",
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    description:
      "Carbon strategy, ESG quantification, and climate risk modeling using proprietary AI frameworks.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "Industry 4.0 transformation, predictive maintenance, and process optimization at scale.",
  },
  {
    icon: Droplets,
    title: "Oil & Gas",
    description:
      "Reservoir engineering, asset integrity, and energy transition strategy backed by deep subsurface expertise.",
  },
  {
    icon: Building2,
    title: "BIM & Construction",
    description:
      "Building information modeling, clash detection automation, and lifecycle cost optimization.",
  },
  {
    icon: Layers,
    title: "Digital Twins",
    description:
      "Physics-informed digital twin development for real-time asset monitoring and scenario planning.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-28">
      <div className="container">
        <div className="section-divider mb-20" />

        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
            Domains of Excellence
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Deep Expertise,{" "}
            <span className="text-gradient">Measurable Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our PhD-led teams combine rigorous domain knowledge with AI-driven
            analytics to deliver outcomes that redefine what's possible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group card-elevated rounded-lg p-8 transition-all duration-500 hover:border-glow hover:shadow-[var(--shadow-glow)]"
            >
              <domain.icon className="h-8 w-8 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
