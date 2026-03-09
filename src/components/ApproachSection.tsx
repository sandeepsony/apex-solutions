const steps = [
  {
    number: "01",
    title: "Scoping & Diagnosis",
    description:
      "We deploy senior PhD consultants to rigorously define the problem space, map stakeholder landscapes, and identify the highest-leverage intervention points.",
  },
  {
    number: "02",
    title: "Analytical Modeling",
    description:
      "Our proprietary AI frameworks and domain-specific models generate insights that are both computationally rigorous and operationally actionable.",
  },
  {
    number: "03",
    title: "Solution Architecture",
    description:
      "We design bespoke solutions — from digital twins to optimization algorithms — stress-tested against real-world constraints and failure modes.",
  },
  {
    number: "04",
    title: "Implementation & Transfer",
    description:
      "Embedded teams drive execution with full knowledge transfer, ensuring your organization retains capability long after our engagement concludes.",
  },
];

const ApproachSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="editorial-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column */}
          <div className="lg:col-span-4">
            <p className="label-uppercase mb-3">Our Approach</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-5">
              Rigor Without Compromise
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Every engagement follows a disciplined methodology refined across hundreds
              of complex technical engagements. We don't template our thinking — we
              calibrate it to your reality.
            </p>
          </div>

          {/* Right column - steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-border">
              {steps.map((step) => (
                <div key={step.number} className="group py-10 first:pt-0">
                  <div className="flex gap-8">
                    <span className="font-heading text-4xl font-medium text-border group-hover:text-accent transition-colors duration-500">
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
