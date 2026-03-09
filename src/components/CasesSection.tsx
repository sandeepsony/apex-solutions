import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import caseBridge from "@/assets/case-bridge.jpg";
import caseRefinery from "@/assets/case-refinery.jpg";
import caseWindfarm from "@/assets/case-windfarm.jpg";
import caseOffshore from "@/assets/case-offshore.jpg";
import caseGearsystem from "@/assets/case-gearsystem.jpg";
import casePipeline from "@/assets/case-pipeline.jpg";

const cases = [
  {
    title: "Offshore Platform",
    shortTitle: "Offshore",
    question: "How did corrosion compromise a $400M offshore platform?",
    answer:
      "Subsea jacket nodes showed accelerated pitting corrosion masked by marine growth. Our multi-physics model cross-referenced cathodic protection current maps with tidal flow simulations — revealing 3 critical joints at 60% wall loss, invisible to routine ROV inspection.",
    disciplines: ["Structural Integrity", "Corrosion Engineering", "Subsea Systems"],
    image: caseOffshore,
    color: "hsl(35, 100%, 50%)",
  },
  {
    title: "Bridge Deflection",
    shortTitle: "Bridge",
    question: "Why did a bridge deflect 12mm overnight?",
    answer:
      "Thermal gradient analysis combined with embedded sensor data revealed asymmetric expansion in the south-facing girders — a design assumption error compounded by 15 years of micro-fatigue.",
    disciplines: ["Structural Engineering", "Materials Science", "Sensor Analytics"],
    image: caseBridge,
    color: "hsl(45, 90%, 55%)",
  },
  {
    title: "Wind Farm Capacity",
    shortTitle: "Wind Farm",
    question: "How did a wind farm lose 11% capacity without a single alarm?",
    answer:
      "Yaw misalignment of 2.3° — below the alarm threshold individually, but across 47 turbines it cascaded into wake interference patterns only visible through fleet-level physics modeling.",
    disciplines: ["Aerodynamics", "Applied Mathematics", "Energy Systems"],
    image: caseWindfarm,
    color: "hsl(55, 80%, 55%)",
  },
  {
    title: "Gear System Failure",
    shortTitle: "Gear System",
    question: "What caused catastrophic gear tooth failure in a marine drive?",
    answer:
      "Root cause analysis revealed micro-pitting propagation from a lubrication film breakdown at specific RPM harmonics. Vibration spectral analysis pinpointed a 3rd-order mesh frequency resonance amplified by bearing clearance drift over 18 months.",
    disciplines: ["Mechanical Engineering", "Tribology", "Vibration Analysis"],
    image: caseGearsystem,
    color: "hsl(30, 85%, 45%)",
  },
  {
    title: "Refinery Energy Loss",
    shortTitle: "Refinery",
    question: "Where was a refinery bleeding $2M per year?",
    answer:
      "Process simulation calibrated against real operating data exposed systematic over-cooling in the crude unit — energy wasted counteracting a control loop miscalibrated for 3 years.",
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems"],
    image: caseRefinery,
    color: "hsl(25, 75%, 50%)",
  },
  {
    title: "Pipeline Integrity",
    shortTitle: "Pipeline",
    question: "How was a hidden pipeline leak detected before environmental disaster?",
    answer:
      "Acoustic emission monitoring combined with pressure transient analysis identified a 0.5mm through-wall defect in a buried section. Digital twin pressure modeling narrowed the location to a 12-meter segment under a river crossing.",
    disciplines: ["Pipeline Engineering", "NDT", "Digital Twin Modeling"],
    image: casePipeline,
    color: "hsl(40, 95%, 50%)",
  },
];

const SEGMENT_COUNT = 6;
const RADIUS = 180;
const CENTER = 220;
const INNER_RADIUS = 70;

interface PieSegmentProps {
  index: number;
  isActive: boolean;
  isHovered: boolean;
  onHover: (i: number | null) => void;
  onClick: (i: number) => void;
  caseData: (typeof cases)[0];
}

const PieSegment = ({ index, isActive, isHovered, onHover, onClick, caseData }: PieSegmentProps) => {
  const anglePerSegment = 360 / SEGMENT_COUNT;
  const startAngle = index * anglePerSegment - 90;
  const endAngle = startAngle + anglePerSegment;
  const gap = 1.5; // degrees gap between segments

  const startRad = ((startAngle + gap / 2) * Math.PI) / 180;
  const endRad = ((endAngle - gap / 2) * Math.PI) / 180;

  const outerR = isHovered || isActive ? RADIUS + 12 : RADIUS;

  const x1 = CENTER + INNER_RADIUS * Math.cos(startRad);
  const y1 = CENTER + INNER_RADIUS * Math.sin(startRad);
  const x2 = CENTER + outerR * Math.cos(startRad);
  const y2 = CENTER + outerR * Math.sin(startRad);
  const x3 = CENTER + outerR * Math.cos(endRad);
  const y3 = CENTER + outerR * Math.sin(endRad);
  const x4 = CENTER + INNER_RADIUS * Math.cos(endRad);
  const y4 = CENTER + INNER_RADIUS * Math.sin(endRad);

  const largeArc = anglePerSegment - gap > 180 ? 1 : 0;

  const d = [
    `M ${x1} ${y1}`,
    `L ${x2} ${y2}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x3} ${y3}`,
    `L ${x4} ${y4}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArc} 0 ${x1} ${y1}`,
    "Z",
  ].join(" ");

  // Label position
  const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180);
  const labelR = (INNER_RADIUS + outerR) / 2;
  const lx = CENTER + labelR * Math.cos(midAngle);
  const ly = CENTER + labelR * Math.sin(midAngle);

  return (
    <g
      className="cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(index)}
    >
      <motion.path
        d={d}
        fill={isActive ? caseData.color : isHovered ? "hsl(35, 100%, 50%)" : "hsl(0, 0%, 10%)"}
        stroke={isActive || isHovered ? caseData.color : "hsl(0, 0%, 18%)"}
        strokeWidth={isActive || isHovered ? 2 : 1}
        initial={false}
        animate={{
          opacity: isActive ? 1 : isHovered ? 0.9 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
      <text
        x={lx}
        y={ly}
        textAnchor="middle"
        dominantBaseline="central"
        className="pointer-events-none select-none"
        fill={isActive || isHovered ? "hsl(0,0%,3%)" : "hsl(0,0%,60%)"}
        fontSize="11"
        fontFamily="'JetBrains Mono', monospace"
        fontWeight={isActive || isHovered ? "600" : "400"}
        letterSpacing="0.05em"
      >
        {caseData.shortTitle}
      </text>
    </g>
  );
};

const CasesSection = () => {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveCase(activeCase === i ? null : i);
  };

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="cinematic-container mb-16">
        <div className="label-mono mb-4">Case Studies</div>
        <div className="divider-line mb-6" />
        <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground max-w-2xl">
          Six investigations.<br />
          <span className="text-accent">Six engineering puzzles solved.</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground mt-4 max-w-lg">
          Click any segment to explore the full case study.
        </p>
      </div>

      <div className="cinematic-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Pie Chart */}
          <div className="flex-shrink-0">
            <svg
              width={CENTER * 2}
              height={CENTER * 2}
              viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
              className="w-[320px] h-[320px] md:w-[440px] md:h-[440px]"
            >
              {/* Center glow */}
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(35, 100%, 50%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(35, 100%, 50%)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS - 5} fill="url(#centerGlow)" />

              {cases.map((c, i) => (
                <PieSegment
                  key={i}
                  index={i}
                  isActive={activeCase === i}
                  isHovered={hoveredCase === i}
                  onHover={setHoveredCase}
                  onClick={handleClick}
                  caseData={c}
                />
              ))}

              {/* Center text */}
              <text
                x={CENTER}
                y={CENTER - 8}
                textAnchor="middle"
                fill="hsl(0,0%,93%)"
                fontSize="14"
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="500"
              >
                {activeCase !== null ? String(activeCase + 1).padStart(2, "0") : "06"}
              </text>
              <text
                x={CENTER}
                y={CENTER + 10}
                textAnchor="middle"
                fill="hsl(0,0%,45%)"
                fontSize="8"
                fontFamily="'JetBrains Mono', monospace"
                letterSpacing="0.2em"
              >
                {activeCase !== null ? "ACTIVE" : "CASES"}
              </text>
            </svg>
          </div>

          {/* Expanded Case Detail */}
          <div className="flex-1 min-h-[400px] relative w-full">
            <AnimatePresence mode="wait">
              {activeCase !== null ? (
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="border border-border bg-card overflow-hidden"
                >
                  {/* Case image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={cases[activeCase].image}
                      alt={cases[activeCase].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <button
                      onClick={() => setActiveCase(null)}
                      className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-colors"
                      aria-label="Close case study"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-4 left-6">
                      <span
                        className="font-mono-data text-[10px] uppercase tracking-[0.3em] px-2 py-1"
                        style={{ color: cases[activeCase].color }}
                      >
                        Case {String(activeCase + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Case content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground leading-snug mb-4">
                      {cases[activeCase].question}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {cases[activeCase].answer}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cases[activeCase].disciplines.map((d) => (
                        <span
                          key={d}
                          className="font-mono-data text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 border border-border px-3 py-1.5"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full min-h-[400px] border border-dashed border-border"
                >
                  <div className="text-center px-8">
                    <div className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 mb-3">
                      Select a segment
                    </div>
                    <p className="font-heading text-lg text-muted-foreground/60">
                      Click on the pie chart to explore a case study
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
