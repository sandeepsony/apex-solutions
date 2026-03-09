import { ArrowUpRight } from "lucide-react";

const problemStatement = {
  title: "The Problem We Solve",
  description:
    "Engineering-adjacent industries — from oil & gas to construction to advanced manufacturing — generate petabytes of operational data every year. Yet most organizations lack the specialized talent to connect domain knowledge with data science. Traditional consultants understand strategy but not thermodynamics. Data scientists understand algorithms but not reservoir mechanics. We are the bridge.",
};

const capabilities = [
  {
    title: "Predictive Asset Analytics",
    description:
      "Transform sensor data, maintenance logs, and inspection records into predictive models that prevent failures and extend asset life — built by PhDs who understand the underlying physics.",
    areas: ["Predictive Maintenance", "Remaining Useful Life", "Anomaly Detection"],
  },
  {
    title: "Process & Operational Optimization",
    description:
      "Apply advanced optimization and simulation to manufacturing, chemical, and energy processes — using your existing operational data to find efficiencies invisible to conventional analysis.",
    areas: ["Process Simulation", "Yield Optimization", "Energy Efficiency"],
  },
  {
    title: "Subsurface & Reservoir Intelligence",
    description:
      "Unlock value from seismic, well log, and production data with AI models built by PhD geoscientists and reservoir engineers who speak the language of the subsurface.",
    areas: ["Reservoir Characterization", "Production Forecasting", "Well Optimization"],
  },
  {
    title: "Climate Risk & ESG Quantification",
    description:
      "Move beyond qualitative ESG reporting. Our climate scientists build physics-based models that quantify portfolio-level risk from emissions, weather, and transition scenarios.",
    areas: ["Carbon Analytics", "Physical Risk Modeling", "Transition Scenario Analysis"],
  },
  {
    title: "Digital Twin Development",
    description:
      "Build physics-informed digital replicas of your assets that fuse real-time IoT data with engineering models — enabling simulation, prediction, and autonomous decision-making.",
    areas: ["Physics-Informed ML", "Real-Time Monitoring", "Scenario Simulation"],
  },
  {
    title: "BIM & Construction Intelligence",
    description:
      "Turn building information models and project data into actionable intelligence — from automated clash detection to lifecycle cost prediction using historical project data.",
    areas: ["Data-Driven BIM", "Cost Prediction", "Schedule Analytics"],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 bg-secondary/50">
      <div className="editorial-container">
        {/* Problem statement */}
        <div className="mb-20 max-w-3xl">
          <p className="label-uppercase mb-3">The Challenge</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
            {problemStatement.title}
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            {problemStatement.description}
          </p>
        </div>

        {/* Capabilities heading */}
        <div className="mb-12">
          <p className="label-uppercase mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            Turning Untapped Data Into Engineering Breakthroughs
          </h2>
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
