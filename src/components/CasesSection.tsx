import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cases = [
  {
    question: "Why did a bridge deflect 12mm overnight?",
    answer: "Thermal gradient analysis combined with embedded sensor data revealed asymmetric expansion in the south-facing girders — a design assumption error compounded by 15 years of micro-fatigue.",
    disciplines: ["Structural Engineering", "Materials Science", "Sensor Analytics"],
  },
  {
    question: "Where was a refinery bleeding $2M per year?",
    answer: "Process simulation calibrated against real operating data exposed systematic over-cooling in the crude unit — energy wasted counteracting a control loop that had been slightly miscalibrated for 3 years.",
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems"],
  },
  {
    question: "How did a wind farm lose 11% capacity without a single alarm?",
    answer: "Yaw misalignment of 2.3° average — below the alarm threshold individually, but across 47 turbines it cascaded into wake interference patterns only visible through fleet-level physics modeling.",
    disciplines: ["Aerodynamics", "Applied Mathematics", "Energy Systems"],
  },
];

const CasesSection = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="cinematic-container">
        <div className="label-mono mb-6">More investigations</div>
        <div className="divider-line mb-20" />

        <div className="space-y-0">
          {cases.map((c, i) => (
            <CaseCard key={i} caseData={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CaseCardProps {
  caseData: typeof cases[0];
  index: number;
}

const CaseCard = ({ caseData, index }: CaseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="border-t border-border py-16 md:py-20 group"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <span className="font-mono-data text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase mb-4 block">
            Case {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground leading-snug italic">
            "{caseData.question}"
          </h3>
        </div>
        
        <div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
            {caseData.answer}
          </p>
          <div className="flex flex-wrap gap-2">
            {caseData.disciplines.map((d) => (
              <span
                key={d}
                className="font-mono-data text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 border border-border px-3 py-1"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CasesSection;
