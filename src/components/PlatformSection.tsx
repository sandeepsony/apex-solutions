import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "offshore",
    shortTitle: "Offshore",
    title: "Offshore Platform",
    headline: "$400M platform losing 6% output",
    color: "hsl(35, 100%, 50%)",
    stats: [
      { value: "$38M", label: "Failure cost prevented" },
      { value: "6.2%", label: "Output recovered" },
      { value: "26mo", label: "Early warning" },
    ],
    disciplines: ["Structural Integrity", "Corrosion Engineering", "Subsea Systems"],
    status: "RESOLVED",
    riskBefore: 0.87,
    riskAfter: 0.12,
  },
  {
    id: "bridge",
    shortTitle: "Bridge",
    title: "Bridge Deflection",
    headline: "12mm overnight deflection explained",
    color: "hsl(45, 90%, 55%)",
    stats: [
      { value: "$12M", label: "Saved vs replacement" },
      { value: "12mm", label: "Deflection explained" },
      { value: "15yr", label: "Hidden fatigue found" },
    ],
    disciplines: ["Structural Engineering", "Materials Science", "Thermal Analysis"],
    status: "RESOLVED",
    riskBefore: 0.72,
    riskAfter: 0.08,
  },
  {
    id: "windfarm",
    shortTitle: "Wind Farm",
    title: "Wind Farm Capacity",
    headline: "11% capacity loss — zero alarms",
    color: "hsl(55, 80%, 55%)",
    stats: [
      { value: "11%", label: "Capacity recovered" },
      { value: "$4.7M", label: "Annual value" },
      { value: "47", label: "Turbines optimized" },
    ],
    disciplines: ["Aerodynamics", "Applied Mathematics", "Fleet Analytics"],
    status: "MONITORING",
    riskBefore: 0.58,
    riskAfter: 0.04,
  },
  {
    id: "gears",
    shortTitle: "Gears",
    title: "Marine Drive Failure",
    headline: "Catastrophic gear failure predicted",
    color: "hsl(30, 85%, 45%)",
    stats: [
      { value: "$2.3M", label: "Damage prevented" },
      { value: "12", label: "Vessels protected" },
      { value: "0", label: "Failures since" },
    ],
    disciplines: ["Mechanical Engineering", "Tribology", "Vibration Analysis"],
    status: "RESOLVED",
    riskBefore: 0.93,
    riskAfter: 0.05,
  },
  {
    id: "refinery",
    shortTitle: "Refinery",
    title: "Refinery Energy Loss",
    headline: "$2M/year energy bleed found",
    color: "hsl(25, 75%, 50%)",
    stats: [
      { value: "$2.1M", label: "Annual savings" },
      { value: "0", label: "Capital required" },
      { value: "2.1MW", label: "Energy recovered" },
    ],
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems"],
    status: "RESOLVED",
    riskBefore: 0.45,
    riskAfter: 0.03,
  },
  {
    id: "pipeline",
    shortTitle: "Pipeline",
    title: "Pipeline Integrity",
    headline: "0.5mm defect under a river",
    color: "hsl(40, 95%, 50%)",
    stats: [
      { value: "$50M+", label: "Disaster averted" },
      { value: "0.5mm", label: "Defect detected" },
      { value: "12m", label: "Precision located" },
    ],
    disciplines: ["Pipeline Engineering", "Digital Twin", "Risk Assessment"],
    status: "RESOLVED",
    riskBefore: 0.96,
    riskAfter: 0.02,
  },
  {
    id: "wastewater",
    shortTitle: "Wastewater",
    title: "Wastewater Treatment",
    headline: "Compliance achieved in 8 weeks",
    color: "hsl(180, 60%, 45%)",
    stats: [
      { value: "$15M", label: "Fines avoided" },
      { value: "8wk", label: "To compliance" },
      { value: "$340K", label: "Fix cost" },
    ],
    disciplines: ["Environmental Eng.", "Biochemistry", "Process Control"],
    status: "RESOLVED",
    riskBefore: 0.68,
    riskAfter: 0.06,
  },
];

/* Mini waveform canvas for each case */
const WaveformViz = ({ color, seed }: { color: string; seed: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw multiple wave lines
      for (let line = 0; line < 3; line++) {
        ctx.beginPath();
        const alpha = 0.3 - line * 0.08;
        ctx.strokeStyle = color.replace(")", ` / ${alpha})`).replace("hsl(", "hsl(");
        ctx.lineWidth = 1;

        for (let x = 0; x < w; x++) {
          const freq1 = 0.02 + seed * 0.005;
          const freq2 = 0.035 + line * 0.01;
          const amp = h * 0.15 + line * 8;
          const y = h / 2 +
            Math.sin(x * freq1 + t + line) * amp +
            Math.sin(x * freq2 + t * 1.5 + seed) * (amp * 0.5) +
            Math.cos(x * 0.008 + t * 0.3) * (amp * 0.3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw anomaly markers
      for (let i = 0; i < 3; i++) {
        const ax = (w * (0.2 + i * 0.3 + seed * 0.05)) % w;
        const ay = h / 2 + Math.sin(ax * 0.02 + t) * h * 0.15;
        ctx.beginPath();
        ctx.arc(ax, ay, 3, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(")", " / 0.6)");
        ctx.fill();
        
        // Pulse ring
        const pulse = (Math.sin(t * 2 + i) + 1) * 4;
        ctx.beginPath();
        ctx.arc(ax, ay, 3 + pulse, 0, Math.PI * 2);
        ctx.strokeStyle = color.replace(")", " / 0.15)");
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      t += 0.02;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [color, seed]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

/* Risk bar component */
const RiskBar = ({ before, after, color }: { before: number; after: number; color: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">
          Risk Before
        </span>
        <span className="font-mono-data text-[9px] text-destructive">
          {(before * 100).toFixed(0)}%
        </span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${before * 100}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-destructive/70 rounded-full"
        />
      </div>
    </div>
    <div className="font-mono-data text-[8px] text-muted-foreground">→</div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">
          Risk After
        </span>
        <span className="font-mono-data text-[9px]" style={{ color }}>
          {(after * 100).toFixed(0)}%
        </span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${after * 100}%` }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  </div>
);

const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const activeCase = caseStudies[activeIndex];

  return (
    <section ref={ref} className="py-28 md:py-40 border-t border-border overflow-hidden">
      <motion.div style={{ opacity }} className="cinematic-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="label-mono mb-6">Our Platform</div>
          <div className="divider-line mx-auto mb-10" />
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground leading-[1.15] max-w-3xl mx-auto">
            Seven investigations.{" "}
            <span className="italic text-accent">One platform.</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto mt-6 leading-relaxed">
            Every case study tracked, analyzed, and resolved through our integrated 
            engineering intelligence platform.
          </p>
        </div>

        {/* Platform mock */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-card border border-border rounded-sm overflow-hidden shadow-2xl shadow-background/50">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                NovaActa Platform — Case Monitor
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono-data text-[8px] text-muted-foreground">7 CASES TRACKED</span>
              </div>
            </div>

            {/* Case tabs */}
            <div className="flex border-b border-border bg-secondary/30 overflow-x-auto">
              {caseStudies.map((cs, i) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative px-4 py-2.5 font-mono-data text-[9px] uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    i === activeIndex
                      ? "text-foreground bg-card"
                      : "text-muted-foreground hover:text-foreground/70"
                  }`}
                >
                  <span className="mr-2 text-[8px]" style={{ color: i === activeIndex ? cs.color : undefined }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {cs.shortTitle}
                  {i === activeIndex && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ backgroundColor: cs.color }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Main content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-[1fr,280px] min-h-[420px]"
              >
                {/* Left — Visualization */}
                <div className="relative border-r border-border/50">
                  {/* Waveform */}
                  <div className="absolute inset-0">
                    <WaveformViz color={activeCase.color} seed={activeIndex} />
                  </div>

                  {/* Case headline overlay */}
                  <div className="absolute top-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeCase.color }}
                      />
                      <span className="font-mono-data text-[9px] uppercase tracking-[0.2em]" style={{ color: activeCase.color }}>
                        {activeCase.title}
                      </span>
                      <span className={`ml-auto font-mono-data text-[8px] px-2 py-0.5 rounded-sm ${
                        activeCase.status === "MONITORING"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {activeCase.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl text-foreground leading-tight">
                      {activeCase.headline}
                    </h3>
                  </div>

                  {/* Stats row at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur border-t border-border/50">
                    <div className="grid grid-cols-3 divide-x divide-border/50">
                      {activeCase.stats.map((stat) => (
                        <div key={stat.label} className="px-4 py-3 text-center">
                          <div className="font-heading text-xl md:text-2xl text-foreground">
                            {stat.value}
                          </div>
                          <div className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — Details panel */}
                <div className="p-5 flex flex-col gap-5 bg-background/50">
                  {/* Disciplines */}
                  <div>
                    <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Disciplines Applied
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCase.disciplines.map((d) => (
                        <span
                          key={d}
                          className="font-mono-data text-[8px] px-2 py-1 border border-border text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Risk assessment */}
                  <div>
                    <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Risk Assessment
                    </div>
                    <RiskBar
                      before={activeCase.riskBefore}
                      after={activeCase.riskAfter}
                      color={activeCase.color}
                    />
                  </div>

                  {/* Case number */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading text-3xl text-foreground/20">
                          {String(activeIndex + 1).padStart(2, "0")}
                        </div>
                        <div className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">
                          of 07 cases
                        </div>
                      </div>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 font-mono-data text-[9px] uppercase tracking-[0.15em] hover:text-accent transition-colors group"
                        style={{ color: activeCase.color }}
                      >
                        Full Report
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Glow effect */}
          <div
            className="absolute -inset-8 blur-3xl -z-10 rounded-full opacity-10 transition-colors duration-700"
            style={{ backgroundColor: activeCase.color }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PlatformSection;
