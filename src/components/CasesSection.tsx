import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import caseBridge from "@/assets/case-bridge.jpg";
import caseRefinery from "@/assets/case-refinery.jpg";
import caseWindfarm from "@/assets/case-windfarm.jpg";
import caseOffshore from "@/assets/case-offshore.jpg";
import caseGearsystem from "@/assets/case-gearsystem.jpg";
import casePipeline from "@/assets/case-pipeline.jpg";
import caseWastewater from "@/assets/case-wastewater.jpg";

const cases = [
  {
    title: "Offshore Platform",
    shortTitle: "Offshore",
    headline: "$400M offshore platform was losing 6% output.",
    subline: "Nobody knew why.",
    question: "How did corrosion compromise a $400M offshore platform?",
    summary:
      "A major North Sea operator noticed a persistent 6.2% decline in production output over 14 months. Operations teams attributed it to seasonal variance and aging equipment. Standard inspection protocols showed nothing critical.",
    investigation:
      "Our team deployed a multi-physics approach: subsea jacket nodes showed accelerated pitting corrosion masked by marine growth. We cross-referenced cathodic protection current maps with tidal flow simulations, thermal imaging of heat exchangers, and vibration frequency analysis of the riser system.",
    findings: [
      "Three critical jacket joints at 60% wall loss — invisible to routine ROV inspection",
      "Progressive heat exchanger fouling degrading efficiency by 0.3% per month",
      "Flow-induced oscillation in the riser — a fatigue cracking precursor with 26-month horizon",
      "All four issues were interconnected through a cascade effect: fouling → pressure shift → vibration → accelerated fatigue",
    ],
    outcome: "We recovered 6.2% output, prevented $38M in failure costs, and provided 26 months of early warning before catastrophic failure.",
    disciplines: ["Structural Integrity", "Corrosion Engineering", "Subsea Systems", "Thermodynamics"],
    image: caseOffshore,
    color: "hsl(35, 100%, 50%)",
    stats: [
      { value: "$38M", label: "Prevented failure cost" },
      { value: "6.2%", label: "Output recovered" },
      { value: "26mo", label: "Early warning" },
    ],
  },
  {
    title: "Bridge Deflection",
    shortTitle: "Bridge",
    headline: "A bridge deflected 12mm overnight.",
    subline: "The design said it shouldn't.",
    question: "Why did a bridge deflect 12mm overnight?",
    summary:
      "A critical highway bridge showed an unexpected 12mm deflection during overnight monitoring. Structural engineers couldn't explain it — the deflection exceeded thermal expansion calculations by 400%.",
    investigation:
      "We deployed thermal gradient analysis combined with embedded sensor data arrays across all girder faces. High-resolution temperature mapping revealed asymmetric solar absorption patterns never considered in the original design.",
    findings: [
      "South-facing girders absorbed 3.2× more thermal energy than the design assumed",
      "Asymmetric expansion created a bending moment not in the structural model",
      "15 years of micro-fatigue cycles had reduced stiffness in 4 key connections",
      "The overnight deflection was actually a thermal relaxation event, not a load event",
    ],
    outcome: "Prevented a potential closure of a major highway artery. Retrofitted thermal expansion joints saved $12M vs full replacement.",
    disciplines: ["Structural Engineering", "Materials Science", "Sensor Analytics", "Thermal Analysis"],
    image: caseBridge,
    color: "hsl(45, 90%, 55%)",
    stats: [
      { value: "$12M", label: "Saved vs replacement" },
      { value: "12mm", label: "Deflection explained" },
      { value: "15yr", label: "Hidden fatigue found" },
    ],
  },
  {
    title: "Wind Farm Capacity",
    shortTitle: "Wind Farm",
    headline: "A wind farm lost 11% capacity.",
    subline: "Not a single alarm triggered.",
    question: "How did a wind farm lose 11% capacity without a single alarm?",
    summary:
      "An offshore wind farm of 47 turbines showed a gradual but persistent capacity decline of 11% over 8 months. Every individual turbine passed its performance checks. No alarms were triggered.",
    investigation:
      "We applied fleet-level aerodynamic modeling using SCADA data across all 47 turbines simultaneously, rather than analyzing each turbine independently. We built a wake interference model incorporating real-time wind direction, turbulence intensity, and yaw position data.",
    findings: [
      "Average yaw misalignment of 2.3° across the fleet — individually below alarm thresholds",
      "Cumulative misalignment created wake interference patterns across turbine rows",
      "Turbines in rows 3-5 were operating in degraded wind conditions 68% of the time",
      "The root cause was a systematic calibration drift in the yaw anemometers",
    ],
    outcome: "Fleet-wide yaw recalibration recovered 11% capacity worth $4.7M annually. Ongoing monitoring prevents recurrence.",
    disciplines: ["Aerodynamics", "Applied Mathematics", "Energy Systems", "Fleet Analytics"],
    image: caseWindfarm,
    color: "hsl(55, 80%, 55%)",
    stats: [
      { value: "11%", label: "Capacity recovered" },
      { value: "$4.7M", label: "Annual value" },
      { value: "47", label: "Turbines optimized" },
    ],
  },
  {
    title: "Gear System Failure",
    shortTitle: "Gears",
    headline: "A marine drive failed without warning.",
    subline: "The vibration data held the answer.",
    question: "What caused catastrophic gear tooth failure in a marine drive?",
    summary:
      "A critical marine propulsion gearbox suffered sudden tooth fracture during operation, causing $2.3M in direct damage and 6 weeks of downtime. Post-failure analysis of historical data revealed the failure was predictable.",
    investigation:
      "We performed root cause analysis using archived vibration spectral data, lubricant analysis records, and operational load profiles. A custom frequency decomposition algorithm isolated harmonic patterns invisible in standard vibration monitoring.",
    findings: [
      "Micro-pitting propagation from lubrication film breakdown at specific RPM harmonics",
      "3rd-order gear mesh frequency resonance amplified by progressive bearing clearance drift",
      "Lubricant degradation accelerated at sustained loads above 78% rated capacity",
      "The failure cascade took 18 months — during which standard monitoring showed 'healthy'",
    ],
    outcome: "Developed a predictive monitoring protocol now deployed across the operator's entire fleet of 12 vessels. Zero unplanned gearbox failures since implementation.",
    disciplines: ["Mechanical Engineering", "Tribology", "Vibration Analysis", "Signal Processing"],
    image: caseGearsystem,
    color: "hsl(30, 85%, 45%)",
    stats: [
      { value: "$2.3M", label: "Damage prevented" },
      { value: "12", label: "Vessels protected" },
      { value: "0", label: "Failures since" },
    ],
  },
  {
    title: "Refinery Energy Loss",
    shortTitle: "Refinery",
    headline: "A refinery was bleeding $2M per year.",
    subline: "Hidden in plain sight for 3 years.",
    question: "Where was a refinery bleeding $2M per year?",
    summary:
      "A major Gulf Coast refinery's crude distillation unit was consuming 15% more energy than its design basis. Multiple energy audits had failed to identify the root cause, attributing the excess to 'aging equipment'.",
    investigation:
      "We built a first-principles process simulation calibrated against 3 years of actual operating data — not design data. We then systematically compared simulated vs actual performance for every heat exchanger, pump, and control valve in the system.",
    findings: [
      "A control loop on the overhead condenser was miscalibrated, causing systematic over-cooling",
      "The over-cooling triggered compensatory heating downstream, wasting 2.1 MW of energy",
      "Three heat exchangers had fouling rates 4× higher than assumed in maintenance schedules",
      "The combined effect had been masked by operators manually compensating for temperature drift",
    ],
    outcome: "Control loop recalibration and optimized cleaning schedule saved $2.1M/year in energy costs with zero capital expenditure.",
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems", "Energy Optimization"],
    image: caseRefinery,
    color: "hsl(25, 75%, 50%)",
    stats: [
      { value: "$2.1M", label: "Annual savings" },
      { value: "0", label: "Capital required" },
      { value: "2.1MW", label: "Energy recovered" },
    ],
  },
  {
    title: "Pipeline Integrity",
    shortTitle: "Pipeline",
    headline: "A hidden pipeline defect. Under a river.",
    subline: "Found before it became a disaster.",
    question: "How was a hidden pipeline leak detected before environmental disaster?",
    summary:
      "A 36-inch transmission pipeline crossing a major river showed anomalous pressure readings — small enough to be within instrument tolerance, but persistent enough to raise concern with the integrity team.",
    investigation:
      "We deployed acoustic emission monitoring combined with pressure transient analysis using a digital twin of the entire pipeline segment. Machine learning models trained on known defect signatures analyzed 6 months of continuous monitoring data.",
    findings: [
      "A 0.5mm through-wall defect was identified in a buried section under the river crossing",
      "The defect growth rate indicated failure within 4-8 months under normal operating pressure",
      "Digital twin pressure modeling narrowed the location to a 12-meter segment",
      "The defect originated from external stress corrosion cracking accelerated by soil chemistry",
    ],
    outcome: "Targeted excavation and repair at the precise location prevented potential environmental catastrophe. Total cost: $800K vs estimated $50M+ for an uncontrolled release.",
    disciplines: ["Pipeline Engineering", "NDT", "Digital Twin Modeling", "Risk Assessment"],
    image: casePipeline,
    color: "hsl(40, 95%, 50%)",
    stats: [
      { value: "$50M+", label: "Disaster averted" },
      { value: "0.5mm", label: "Defect detected" },
      { value: "12m", label: "Precision located" },
    ],
  },
  {
    title: "Wastewater Treatment",
    shortTitle: "Wastewater",
    headline: "A treatment plant was failing compliance.",
    subline: "The chemistry said it shouldn't.",
    question: "Why was a wastewater plant consistently breaching discharge limits?",
    summary:
      "A municipal-industrial wastewater treatment facility serving 200,000 people was intermittently exceeding phosphorus and ammonia discharge limits despite operating within design parameters. Regulators issued a 6-month compliance notice with $15M in potential fines.",
    investigation:
      "We deployed a combination of real-time effluent chemistry monitoring, hydraulic flow modeling, and microbial community DNA sequencing across all treatment stages. Our team built a first-principles biochemical model calibrated against 2 years of lab data.",
    findings: [
      "Intermittent industrial discharges from an upstream chemical plant were shocking the nitrifying bacteria population",
      "Hydraulic short-circuiting in the secondary clarifier reduced effective retention time by 35%",
      "Phosphorus removal was undermined by ferric dosing at the wrong pH — a 0.4 pH unit error in the control setpoint",
      "The combination of biological and chemical failures only manifested during peak flow events, masking the root causes during routine sampling",
    ],
    outcome: "Achieved full regulatory compliance within 8 weeks. Control system recalibration and clarifier baffle modification cost $340K — avoiding $15M in fines and a $60M plant upgrade.",
    disciplines: ["Environmental Engineering", "Biochemistry", "Hydraulic Modeling", "Process Control"],
    image: caseWastewater,
    color: "hsl(180, 60%, 45%)",
    stats: [
      { value: "$15M", label: "Fines avoided" },
      { value: "8wk", label: "To compliance" },
      { value: "$340K", label: "Fix cost" },
    ],
  },
];

const SEGMENT_COUNT = 7;
const RADIUS = 200;
const CENTER = 240;
const INNER_RADIUS = 75;

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
  const gap = 2;

  const startRad = ((startAngle + gap / 2) * Math.PI) / 180;
  const endRad = ((endAngle - gap / 2) * Math.PI) / 180;
  const outerR = isHovered || isActive ? RADIUS + 14 : RADIUS;

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
        animate={{ opacity: isActive ? 1 : isHovered ? 0.9 : 0.7 }}
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

  const active = activeCase !== null ? cases[activeCase] : null;

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="cinematic-container mb-12">
        <div className="label-mono mb-4">Case Studies</div>
        <div className="divider-line mb-6" />
        <h1 className="font-heading text-4xl md:text-6xl font-medium text-foreground max-w-3xl leading-[1.1]">
          Seven investigations.{" "}
          <span className="italic text-accent">Seven engineering puzzles solved.</span>
        </h1>
        <p className="font-body text-sm text-muted-foreground mt-4 max-w-lg">
          Each segment represents one of our landmark case studies. Click to dive deep into the investigation.
        </p>
      </div>

      {/* Pie Chart + Preview */}
      <div className="cinematic-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Pie */}
          <div className="flex-shrink-0">
            <svg
              width={CENTER * 2}
              height={CENTER * 2}
              viewBox={`0 0 ${CENTER * 2} ${CENTER * 2}`}
              className="w-[300px] h-[300px] md:w-[480px] md:h-[480px]"
            >
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
              <text x={CENTER} y={CENTER - 8} textAnchor="middle" fill="hsl(0,0%,93%)" fontSize="16" fontFamily="'JetBrains Mono', monospace" fontWeight="500">
                {activeCase !== null ? String(activeCase + 1).padStart(2, "0") : "06"}
              </text>
              <text x={CENTER} y={CENTER + 12} textAnchor="middle" fill="hsl(0,0%,45%)" fontSize="9" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.2em">
                {activeCase !== null ? "ACTIVE" : "CASES"}
              </text>
            </svg>
          </div>

          {/* Preview card */}
          <div className="flex-1 min-h-[300px] w-full">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="border border-border bg-card overflow-hidden"
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <button
                      onClick={() => setActiveCase(null)}
                      className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-accent transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-6">
                    <span className="font-mono-data text-[10px] uppercase tracking-[0.3em]" style={{ color: active.color }}>
                      Case {String(activeCase! + 1).padStart(2, "0")} — {active.title}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground mt-3 mb-2 leading-snug">
                      {active.headline}
                    </h3>
                    <p className="font-heading text-lg italic text-muted-foreground mb-4">{active.subline}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{active.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {active.disciplines.map((d) => (
                        <span key={d} className="font-mono-data text-[8px] uppercase tracking-[0.15em] text-muted-foreground/50 border border-border px-2.5 py-1">
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
                  className="flex items-center justify-center min-h-[300px] border border-dashed border-border"
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

      {/* Full Expanded Case Study */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="cinematic-container mt-16">
              <div className="border-t border-border pt-12">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-0 divide-x divide-border mb-16">
                  {active.stats.map((stat) => (
                    <div key={stat.label} className="text-center py-6">
                      <div className="font-heading text-3xl md:text-5xl font-medium text-accent mb-2">{stat.value}</div>
                      <div className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Investigation detail */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div>
                    <div className="label-mono mb-4 text-accent">The Investigation</div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {active.investigation}
                    </p>
                  </div>
                  <div>
                    <div className="label-mono mb-4 text-accent">Key Findings</div>
                    <ul className="space-y-3">
                      {active.findings.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="font-mono-data text-[10px] text-accent mt-1 flex-shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-body text-sm text-muted-foreground leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome */}
                <div className="border border-accent/20 bg-accent/5 p-8 md:p-12">
                  <div className="label-mono mb-4 text-accent">The Outcome</div>
                  <p className="font-heading text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CasesSection;
