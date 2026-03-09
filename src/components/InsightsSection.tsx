import { ArrowUpRight } from "lucide-react";
import insightManufacturing from "@/assets/insight-manufacturing.jpg";
import insightClimate from "@/assets/insight-climate.jpg";
import insightDigitalTwin from "@/assets/insight-digital-twin.jpg";

const insights = [
  {
    image: insightManufacturing,
    category: "Advanced Manufacturing",
    title: "How AI-Driven Predictive Maintenance Is Reshaping Industrial Operations",
    description:
      "Our analysis of 120 manufacturing facilities reveals that PhD-led AI implementation yields 3.2x greater efficiency gains than traditional approaches.",
  },
  {
    image: insightClimate,
    category: "Climate & Energy Transition",
    title: "Quantifying Climate Risk: A New Framework for Energy Companies",
    description:
      "A rigorous, physics-based methodology for assessing portfolio-level climate exposure across upstream and midstream assets.",
  },
  {
    image: insightDigitalTwin,
    category: "Digital Twins & BIM",
    title: "The Digital Twin Maturity Model: From Visualization to Autonomous Decision-Making",
    description:
      "Our five-stage framework helps organizations benchmark their digital twin capabilities and chart a path to operational intelligence.",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="editorial-container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label-uppercase mb-3">Latest Insights</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
              Ideas That Move Industries
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            View All <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Featured insight - large */}
        <div className="grid lg:grid-cols-2 gap-0 border border-border mb-8 group cursor-pointer">
          <div className="overflow-hidden">
            <img
              src={insights[0].image}
              alt={insights[0].title}
              className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <p className="label-uppercase text-accent-warm mb-4">
              {insights[0].category}
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-4 leading-snug group-hover:text-accent transition-colors duration-300">
              {insights[0].title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              {insights[0].description}
            </p>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground flex items-center gap-1">
              Read More <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Secondary insights */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.slice(1).map((insight) => (
            <div
              key={insight.title}
              className="group cursor-pointer border border-border"
            >
              <div className="overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="label-uppercase text-accent-warm mb-3">
                  {insight.category}
                </p>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
