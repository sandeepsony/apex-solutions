import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip,
} from "recharts";

/* ── Case data ────────────────────────────────────── */

interface SensorData { name: string; data: number[] }

interface CaseStudy {
  id: string;
  shortTitle: string;
  title: string;
  headline: string;
  color: string;
  stats: { value: string; label: string }[];
  disciplines: string[];
  status: string;
  riskBefore: number;
  riskAfter: number;
  sensors: SensorData[];
  timelineLabel: string;
}

const seededRandom = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

const generateSensorData = (seed: number, baseline: number, variance: number, anomalyAt?: number) => {
  const rng = seededRandom(seed);
  return Array.from({ length: 24 }, (_, i) => {
    let val = baseline + (rng() - 0.5) * variance;
    if (anomalyAt !== undefined && Math.abs(i - anomalyAt) <= 1) {
      val += variance * (1.5 + rng());
    }
    return Math.round(val * 10) / 10;
  });
};

const generateTimeline = (seed: number, riskStart: number, riskEnd: number) => {
  const rng = seededRandom(seed + 100);
  const points = 30;
  return Array.from({ length: points }, (_, i) => {
    const progress = i / (points - 1);
    const base = riskStart + (riskEnd - riskStart) * Math.pow(progress, 0.6);
    const noise = (rng() - 0.5) * 8;
    return {
      day: `D${i + 1}`,
      risk: Math.max(0, Math.min(100, Math.round((base + noise) * 100) / 100)),
      threshold: 70,
    };
  });
};

const caseStudies: CaseStudy[] = [
  {
    id: "offshore", shortTitle: "Offshore", title: "Offshore Platform",
    headline: "$400M platform losing 6% output",
    color: "hsl(35, 100%, 50%)",
    stats: [
      { value: "$38M", label: "Failure cost prevented" },
      { value: "6.2%", label: "Output recovered" },
      { value: "26mo", label: "Early warning" },
    ],
    disciplines: ["Structural Integrity", "Corrosion Engineering", "Subsea Systems"],
    status: "RESOLVED", riskBefore: 0.87, riskAfter: 0.12,
    sensors: [
      { name: "Vibration (mm/s)", data: generateSensorData(1, 4.2, 2.5, 16) },
      { name: "Corrosion Rate (mpy)", data: generateSensorData(2, 12, 8, 18) },
      { name: "Strain (µε)", data: generateSensorData(3, 340, 120, 15) },
      { name: "Pressure (bar)", data: generateSensorData(4, 85, 15) },
      { name: "Temperature (°C)", data: generateSensorData(5, 72, 18, 17) },
      { name: "Fatigue Cycles (k)", data: generateSensorData(6, 1200, 300) },
    ],
    timelineLabel: "Structural Risk Index",
  },
  {
    id: "bridge", shortTitle: "Bridge", title: "Bridge Deflection",
    headline: "12mm overnight deflection explained",
    color: "hsl(45, 90%, 55%)",
    stats: [
      { value: "$12M", label: "Saved vs replacement" },
      { value: "12mm", label: "Deflection explained" },
      { value: "15yr", label: "Hidden fatigue found" },
    ],
    disciplines: ["Structural Engineering", "Materials Science", "Thermal Analysis"],
    status: "RESOLVED", riskBefore: 0.72, riskAfter: 0.08,
    sensors: [
      { name: "Deflection (mm)", data: generateSensorData(10, 8, 5, 12) },
      { name: "Temperature (°C)", data: generateSensorData(11, 15, 22) },
      { name: "Strain (µε)", data: generateSensorData(12, 280, 90, 14) },
      { name: "Load (kN)", data: generateSensorData(13, 450, 120) },
      { name: "Wind Speed (m/s)", data: generateSensorData(14, 12, 15) },
      { name: "Tilt Angle (°)", data: generateSensorData(15, 0.3, 0.2, 13) },
    ],
    timelineLabel: "Fatigue Risk Score",
  },
  {
    id: "windfarm", shortTitle: "Wind Farm", title: "Wind Farm Capacity",
    headline: "11% capacity loss — zero alarms",
    color: "hsl(55, 80%, 55%)",
    stats: [
      { value: "11%", label: "Capacity recovered" },
      { value: "$4.7M", label: "Annual value" },
      { value: "47", label: "Turbines optimized" },
    ],
    disciplines: ["Aerodynamics", "Applied Mathematics", "Fleet Analytics"],
    status: "MONITORING", riskBefore: 0.58, riskAfter: 0.04,
    sensors: [
      { name: "Power Output (kW)", data: generateSensorData(20, 2800, 600) },
      { name: "Wind Speed (m/s)", data: generateSensorData(21, 11, 6) },
      { name: "Blade Pitch (°)", data: generateSensorData(22, 12, 5, 8) },
      { name: "Rotor RPM", data: generateSensorData(23, 14, 3) },
      { name: "Yaw Error (°)", data: generateSensorData(24, 3, 4, 10) },
      { name: "Vibration (mm/s)", data: generateSensorData(25, 2.1, 1.5) },
    ],
    timelineLabel: "Efficiency Loss Index",
  },
  {
    id: "gears", shortTitle: "Gears", title: "Marine Drive Failure",
    headline: "Catastrophic gear failure predicted",
    color: "hsl(30, 85%, 45%)",
    stats: [
      { value: "$2.3M", label: "Damage prevented" },
      { value: "12", label: "Vessels protected" },
      { value: "0", label: "Failures since" },
    ],
    disciplines: ["Mechanical Engineering", "Tribology", "Vibration Analysis"],
    status: "RESOLVED", riskBefore: 0.93, riskAfter: 0.05,
    sensors: [
      { name: "Vibration (g)", data: generateSensorData(30, 2.8, 3.5, 19) },
      { name: "Oil Temp (°C)", data: generateSensorData(31, 68, 20, 20) },
      { name: "Particle Count", data: generateSensorData(32, 45, 60, 18) },
      { name: "Torque (kNm)", data: generateSensorData(33, 180, 50) },
      { name: "RPM", data: generateSensorData(34, 1450, 80) },
      { name: "Bearing Temp (°C)", data: generateSensorData(35, 55, 15, 19) },
    ],
    timelineLabel: "Gear Failure Probability",
  },
  {
    id: "refinery", shortTitle: "Refinery", title: "Refinery Energy Loss",
    headline: "$2M/year energy bleed found",
    color: "hsl(25, 75%, 50%)",
    stats: [
      { value: "$2.1M", label: "Annual savings" },
      { value: "0", label: "Capital required" },
      { value: "2.1MW", label: "Energy recovered" },
    ],
    disciplines: ["Process Engineering", "Thermodynamics", "Control Systems"],
    status: "RESOLVED", riskBefore: 0.45, riskAfter: 0.03,
    sensors: [
      { name: "Steam Flow (t/h)", data: generateSensorData(40, 120, 30) },
      { name: "Heat Loss (kW)", data: generateSensorData(41, 850, 200, 14) },
      { name: "Efficiency (%)", data: generateSensorData(42, 78, 8) },
      { name: "Pressure (bar)", data: generateSensorData(43, 42, 8) },
      { name: "Exhaust Temp (°C)", data: generateSensorData(44, 310, 45, 16) },
      { name: "Flow Rate (m³/h)", data: generateSensorData(45, 2400, 300) },
    ],
    timelineLabel: "Energy Loss Index",
  },
  {
    id: "pipeline", shortTitle: "Pipeline", title: "Pipeline Integrity",
    headline: "0.5mm defect under a river",
    color: "hsl(40, 95%, 50%)",
    stats: [
      { value: "$50M+", label: "Disaster averted" },
      { value: "0.5mm", label: "Defect detected" },
      { value: "12m", label: "Precision located" },
    ],
    disciplines: ["Pipeline Engineering", "Digital Twin", "Risk Assessment"],
    status: "RESOLVED", riskBefore: 0.96, riskAfter: 0.02,
    sensors: [
      { name: "Wall Thickness (mm)", data: generateSensorData(50, 8.2, 2.5, 20) },
      { name: "Pressure (bar)", data: generateSensorData(51, 65, 12) },
      { name: "Corrosion (mpy)", data: generateSensorData(52, 6, 8, 21) },
      { name: "Flow Velocity (m/s)", data: generateSensorData(53, 3.2, 1.2) },
      { name: "Ground Movement (mm)", data: generateSensorData(54, 0.8, 1.5, 19) },
      { name: "Cathodic Prot. (mV)", data: generateSensorData(55, -850, 120) },
    ],
    timelineLabel: "Integrity Threat Level",
  },
  {
    id: "wastewater", shortTitle: "Wastewater", title: "Wastewater Treatment",
    headline: "Compliance achieved in 8 weeks",
    color: "hsl(180, 60%, 45%)",
    stats: [
      { value: "$15M", label: "Fines avoided" },
      { value: "8wk", label: "To compliance" },
      { value: "$340K", label: "Fix cost" },
    ],
    disciplines: ["Environmental Eng.", "Biochemistry", "Process Control"],
    status: "RESOLVED", riskBefore: 0.68, riskAfter: 0.06,
    sensors: [
      { name: "BOD (mg/L)", data: generateSensorData(60, 45, 25, 6) },
      { name: "pH Level", data: generateSensorData(61, 7.2, 1.5) },
      { name: "TSS (mg/L)", data: generateSensorData(62, 35, 20, 8) },
      { name: "DO (mg/L)", data: generateSensorData(63, 5.5, 2.5) },
      { name: "Flow (ML/d)", data: generateSensorData(64, 12, 4) },
      { name: "Ammonia (mg/L)", data: generateSensorData(65, 8, 6, 5) },
    ],
    timelineLabel: "Compliance Risk",
  },
];

/* ── Sparkline Card ───────────────────────────────── */

const SparklineCard = ({ sensor, color }: { sensor: SensorData; color: string }) => {
  const [expanded, setExpanded] = useState(false);
  const chartData = useMemo(
    () => sensor.data.map((v, i) => ({ i, v })),
    [sensor.data]
  );

  const max = Math.max(...sensor.data);
  const min = Math.min(...sensor.data);
  const avg = sensor.data.reduce((a, b) => a + b, 0) / sensor.data.length;
  const current = sensor.data[sensor.data.length - 1];
  const prev = sensor.data[sensor.data.length - 2];
  const delta = current - prev;
  const isSpike = Math.abs(delta) > (max - min) * 0.3;

  return (
    <>
      <div
        onClick={() => setExpanded(true)}
        className="bg-secondary/30 border border-border/50 rounded-sm p-3 hover:border-border transition-colors group cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono-data text-[8px] uppercase tracking-[0.12em] text-muted-foreground truncate mr-2">
            {sensor.name}
          </span>
          <span className={`font-mono-data text-[9px] font-semibold ${isSpike ? "text-destructive" : "text-foreground"}`}>
            {current}
          </span>
        </div>
        <div className="h-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
              <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.2} dot={false} strokeOpacity={0.7} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-mono-data text-[7px] text-muted-foreground">
            {min.toFixed(1)} — {max.toFixed(1)}
          </span>
          <span className={`font-mono-data text-[7px] ${delta > 0 ? "text-destructive" : "text-accent"}`}>
            {delta > 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}
          </span>
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-card border border-border rounded-sm shadow-2xl w-[90vw] max-w-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-data text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {sensor.name}
                </span>
                <button
                  onClick={() => setExpanded(false)}
                  className="font-mono-data text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Large chart */}
              <div className="h-56 mb-5">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                    <defs>
                      <linearGradient id="expandGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="i"
                      tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
                      axisLine={false}
                      tickLine={false}
                      domain={[Math.floor(min * 0.9), Math.ceil(max * 1.1)]}
                      width={40}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "2px",
                        fontSize: "10px",
                        fontFamily: "monospace",
                      }}
                      formatter={(value: number) => [value.toFixed(2), sensor.name]}
                    />
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={color}
                      strokeWidth={2}
                      fill="url(#expandGrad)"
                      dot={{ r: 2.5, fill: color, strokeWidth: 0 }}
                      activeDot={{ r: 4, fill: color }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Current", value: current.toFixed(2) },
                  { label: "Average", value: avg.toFixed(2) },
                  { label: "Min", value: min.toFixed(2) },
                  { label: "Max", value: max.toFixed(2) },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary/30 border border-border/50 rounded-sm p-3 text-center">
                    <div className="font-heading text-base text-foreground">{s.value}</div>
                    <div className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Risk bar ─────────────────────────────────────── */

const RiskBar = ({ before, after, color }: { before: number; after: number; color: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">Risk Before</span>
        <span className="font-mono-data text-[9px] text-destructive">{(before * 100).toFixed(0)}%</span>
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
        <span className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">Risk After</span>
        <span className="font-mono-data text-[9px]" style={{ color }}>{(after * 100).toFixed(0)}%</span>
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

/* ── Main section ─────────────────────────────────── */

const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const activeCase = caseStudies[activeIndex];

  const timelineData = useMemo(
    () => generateTimeline(activeIndex, activeCase.riskBefore, activeCase.riskAfter),
    [activeIndex, activeCase.riskBefore, activeCase.riskAfter]
  );

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
        <div className="max-w-6xl mx-auto">
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

            {/* Main content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {/* Case header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50 bg-secondary/20">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeCase.color }} />
                  <span className="font-mono-data text-[9px] uppercase tracking-[0.2em]" style={{ color: activeCase.color }}>
                    {activeCase.title}
                  </span>
                  <span className="font-heading text-sm md:text-base text-foreground ml-2">
                    {activeCase.headline}
                  </span>
                  <span className={`ml-auto font-mono-data text-[8px] px-2 py-0.5 rounded-sm ${
                    activeCase.status === "MONITORING"
                      ? "bg-accent/20 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {activeCase.status}
                  </span>
                </div>

                {/* Sparkline grid */}
                <div className="px-5 pt-5 pb-3">
                  <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Sensor Array — Live Monitoring
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {activeCase.sensors.map((sensor) => (
                      <SparklineCard key={sensor.name} sensor={sensor} color={activeCase.color} />
                    ))}
                  </div>
                </div>

                {/* Main timeline chart + sidebar */}
                <div className="grid md:grid-cols-[1fr,260px] border-t border-border/50">
                  {/* Chart */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
                        {activeCase.timelineLabel} — 30 Day Trend
                      </span>
                      <span className="font-mono-data text-[8px] text-muted-foreground/50">
                        ─── Threshold
                      </span>
                    </div>
                    <div className="h-44">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={timelineData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                          <defs>
                            <linearGradient id={`grad-${activeCase.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor={activeCase.color} stopOpacity={0.25} />
                              <stop offset="100%" stopColor={activeCase.color} stopOpacity={0.02} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="day"
                            tick={{ fontSize: 8, fill: "hsl(var(--muted-foreground))" }}
                            axisLine={{ stroke: "hsl(var(--border))" }}
                            tickLine={false}
                            interval={4}
                          />
                          <YAxis
                            tick={{ fontSize: 8, fill: "hsl(var(--muted-foreground))" }}
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 100]}
                            width={28}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "2px",
                              fontSize: "10px",
                              fontFamily: "monospace",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="threshold"
                            stroke="hsl(var(--destructive))"
                            strokeWidth={1}
                            strokeDasharray="4 4"
                            dot={false}
                            strokeOpacity={0.4}
                          />
                          <Area
                            type="monotone"
                            dataKey="risk"
                            stroke={activeCase.color}
                            strokeWidth={1.5}
                            fill={`url(#grad-${activeCase.id})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Right sidebar */}
                  <div className="p-5 border-l border-border/50 flex flex-col gap-4 bg-background/50">
                    {/* Stats */}
                    <div>
                      <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Key Outcomes
                      </div>
                      <div className="space-y-3">
                        {activeCase.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="font-heading text-lg text-foreground">{stat.value}</div>
                            <div className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Risk */}
                    <div>
                      <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Risk Assessment
                      </div>
                      <RiskBar before={activeCase.riskBefore} after={activeCase.riskAfter} color={activeCase.color} />
                    </div>

                    {/* Disciplines */}
                    <div>
                      <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Disciplines
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {activeCase.disciplines.map((d) => (
                          <span
                            key={d}
                            className="font-mono-data text-[7px] px-1.5 py-0.5 border border-border text-muted-foreground"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer link */}
                    <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
                      <div className="font-heading text-2xl text-foreground/15">
                        {String(activeIndex + 1).padStart(2, "0")}
                        <span className="font-mono-data text-[7px] text-muted-foreground ml-1">/07</span>
                      </div>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-1.5 font-mono-data text-[9px] uppercase tracking-[0.15em] hover:text-accent transition-colors group"
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

          {/* Glow */}
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
