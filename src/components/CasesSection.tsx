import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import caseBridge from "@/assets/case-bridge.jpg";
import caseRefinery from "@/assets/case-refinery.jpg";
import caseWindfarm from "@/assets/case-windfarm.jpg";

const cases = [
  {
    question: "Why did a bridge deflect 12mm overnight?",
    answer: "Thermal gradient analysis combined with embedded sensor data revealed asymmetric expansion in the south-facing girders — a design assumption error compounded by 15 years of micro-fatigue.",
    disciplines: ["Structural Engineering", "Materials Science", "Sensor Analytics"],
    image: caseBridge,
    imageAlt: "Bridge cable and steel structure at night",
  },
  {
    question: "Where was a refinery bleeding $2M per year?",
    answer: "Process simulation calibrated against real operating data exposed systematic over-cooling in the crude unit — energy wasted counteracting a control loop miscalibrated for 3 years.",
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems"],
    image: caseRefinery,
    imageAlt: "Industrial refinery at dusk",
  },
  {
    question: "How did a wind farm lose 11% capacity without a single alarm?",
    answer: "Yaw misalignment of 2.3° — below the alarm threshold individually, but across 47 turbines it cascaded into wake interference patterns only visible through fleet-level physics modeling.",
    disciplines: ["Aerodynamics", "Applied Mathematics", "Energy Systems"],
    image: caseWindfarm,
    imageAlt: "Wind turbines in dawn fog",
  },
];

const CasesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="cinematic-container mb-16">
        <div className="label-mono mb-4">More investigations</div>
        <div className="divider-line" />
      </div>

      <div className="space-y-0">
        {cases.map((c, i) => (
          <CaseCard key={i} caseData={c} index={i} />
        ))}
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
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 min-h-[70vh] ${isEven ? "" : "direction-rtl"}`}>
        {/* Image - full height */}
        <div className={`relative overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
          <motion.img
            style={{ scale: imgScale }}
            src={caseData.image}
            alt={caseData.imageAlt}
            className="w-full h-full object-cover min-h-[40vh] md:min-h-full"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent md:bg-none ${
            isEven
              ? "md:bg-gradient-to-r md:from-transparent md:to-background/40"
              : "md:bg-gradient-to-l md:from-transparent md:to-background/40"
          }`} />
        </div>

        {/* Text content */}
        <div className={`flex items-center bg-background ${!isEven ? "md:order-1" : ""}`}>
          <div className="p-8 md:p-16 lg:p-20 max-w-lg">
            <span className="font-mono-data text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase mb-6 block">
              Case {String(index + 1).padStart(2, "0")}
            </span>
            
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-snug mb-6">
              {caseData.question}
            </h3>
            
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              {caseData.answer}
            </p>

            <div className="flex flex-wrap gap-2">
              {caseData.disciplines.map((d) => (
                <span
                  key={d}
                  className="font-mono-data text-[9px] uppercase tracking-[0.15em] text-muted-foreground/50 border border-border px-3 py-1.5"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CasesSection;
