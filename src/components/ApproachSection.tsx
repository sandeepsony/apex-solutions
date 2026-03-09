const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We deploy PhD-level experts to deeply understand the problem space, stakeholder landscape, and technical constraints.",
  },
  {
    number: "02",
    title: "Model",
    description:
      "Our AI-augmented analytical frameworks model complex scenarios, identify hidden patterns, and quantify risk with precision.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We architect bespoke solutions—from digital twins to optimization algorithms—tested against real-world conditions.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Implementation with embedded teams, knowledge transfer, and measurable KPIs that prove ROI within the first quarter.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-28 bg-secondary/30">
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary mb-4">
            Our Methodology
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Rigor Meets{" "}
            <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A proven four-phase approach that combines academic rigor with the
            speed and precision of AI-driven consulting.
          </p>
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group p-8">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-px h-16 bg-border" />
              )}
              <span className="text-5xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
