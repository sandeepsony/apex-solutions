import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    title: "Engineering & Complex Systems",
    description:
      "Failure analysis, systems optimization, and design assurance led by PhD engineers with deep operational experience.",
    areas: ["Structural Integrity", "Process Safety", "Systems Engineering"],
  },
  {
    title: "Climate & Sustainability",
    description:
      "Rigorous climate risk quantification, carbon strategy, and ESG framework development grounded in earth science.",
    areas: ["Carbon Accounting", "Climate Risk Modeling", "Net-Zero Strategy"],
  },
  {
    title: "Oil & Gas",
    description:
      "Subsurface modeling, reservoir optimization, and energy transition advisory from industry veterans.",
    areas: ["Reservoir Engineering", "Asset Integrity", "Decommissioning"],
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Industry 4.0 transformation, AI-driven quality control, and predictive maintenance at industrial scale.",
    areas: ["Predictive Maintenance", "Digital Quality", "Process Optimization"],
  },
  {
    title: "BIM & Construction Technology",
    description:
      "Building information modeling, automated clash detection, and lifecycle cost analytics for major capital projects.",
    areas: ["BIM Strategy", "Clash Detection", "4D/5D Modeling"],
  },
  {
    title: "Digital Twins",
    description:
      "Physics-informed digital twin architectures for real-time monitoring, simulation, and autonomous operations.",
    areas: ["IoT Integration", "Simulation Modeling", "Decision Automation"],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-secondary/50">
      <div className="editorial-container">
        <div className="mb-16 max-w-xl">
          <p className="label-uppercase mb-3">Capabilities</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-5">
            Where Science Meets Strategy
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            We operate at the intersection of deep technical knowledge and strategic
            advisory — deploying PhD-caliber talent to solve problems that resist
            conventional consulting approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-background p-10 group cursor-pointer hover:bg-card transition-colors duration-300"
            >
              <h3 className="font-heading text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {cap.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {cap.areas.map((area) => (
                  <span
                    key={area}
                    className="font-body text-[10px] uppercase tracking-[0.1em] text-muted-foreground border border-border px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/60 flex items-center gap-1 group-hover:text-foreground transition-colors duration-300">
                Learn More <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
