const steps = [
  {
    number: "01",
    title: "Data & Domain Audit",
    description:
      "We embed PhD-level specialists in your operations to map the data you're generating, assess its quality, and identify the highest-value problems it can solve — problems your teams know exist but can't quantify.",
  },
  {
    number: "02",
    title: "Problem Formulation",
    description:
      "Most organizations fail at AI not because of bad data, but because of poorly framed problems. Our domain experts translate engineering challenges into precise analytical questions that data can actually answer.",
  },
  {
    number: "03",
    title: "Model & Solution Engineering",
    description:
      "We build bespoke analytical solutions — from physics-informed machine learning to optimization algorithms — designed by people who understand both the math and the machinery.",
  },
  {
    number: "04",
    title: "Operationalization & Transfer",
    description:
      "Solutions are embedded into your workflows with full knowledge transfer. We don't leave behind black boxes — we leave behind capabilities your engineers can own, maintain, and extend.",
  },
];

const ApproachSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column */}
          <div className="lg:col-span-4">
            <p className="label-uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-5">
              From Raw Data to Real Decisions
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Our methodology is built for engineering organizations that have invested
              in data infrastructure but haven't yet realized the return. We close the
              gap between what your data contains and what your teams can act on.
            </p>
          </div>

          {/* Right column - steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-border">
              {steps.map((step) => (
                <div key={step.number} className="group py-10 first:pt-0">
                  <div className="flex gap-8">
                    <span className="font-heading text-4xl font-medium text-border group-hover:text-accent transition-colors duration-500 shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
