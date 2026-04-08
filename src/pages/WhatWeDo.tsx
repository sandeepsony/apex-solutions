import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  ShieldCheck,
  FileText,
  Database,
  GitBranch,
  BarChart3,
  TrendingUp,
  Brain,
  FileSearch,
  Eye,
  Boxes,
  Sparkles,
} from "lucide-react";

/* ── capability data ── */
const engineeringCapabilities = [
  {
    icon: Search,
    title: "Failure & Root Cause Analysis",
    description:
      "Forensic investigation of structural, mechanical, and process failures using first-principles physics and metallurgical evidence.",
    details: [
      "Fracture mechanics & fatigue analysis",
      "Metallurgical failure mode identification",
      "Cascade failure pathway mapping",
    ],
  },
  {
    icon: Cpu,
    title: "First-Principles Simulation",
    description:
      "Physics-based modeling including FEA, CFD, and thermodynamic analysis to replicate real-world conditions with precision.",
    details: [
      "Finite element & computational fluid dynamics",
      "Thermal-mechanical coupling models",
      "Multi-physics scenario simulation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Asset Integrity Management",
    description:
      "Lifecycle assessment, corrosion modeling, and predictive maintenance strategies that extend asset life and reduce unplanned downtime.",
    details: [
      "Remaining useful life estimation",
      "Corrosion rate modeling & mitigation",
      "Risk-based inspection planning",
    ],
  },
  {
    icon: FileText,
    title: "Regulatory & Compliance Engineering",
    description:
      "Code compliance analysis, safety case development, and expert testimony grounded in engineering evidence.",
    details: [
      "ASME, API, ASCE code compliance",
      "Safety case & risk assessment",
      "Litigation support & expert testimony",
    ],
  },
  {
    icon: TrendingUp,
    title: "Process Optimization",
    description:
      "Systematic improvement of industrial processes through energy audits, heat integration studies, and efficiency benchmarking.",
    details: [
      "Pinch analysis & heat integration",
      "Energy audit & loss identification",
      "Throughput & yield optimization",
    ],
  },
];

const dataCapabilities = [
  {
    icon: Database,
    title: "Industrial Data Curation",
    description:
      "Cleaning, harmonizing, and structuring sensor, SCADA, and historian data from disparate systems into analysis-ready datasets.",
    details: [
      "Multi-source data harmonization",
      "Sensor drift correction & validation",
      "Data quality scoring & lineage tracking",
    ],
  },
  {
    icon: GitBranch,
    title: "Data Pipeline Architecture",
    description:
      "Real-time ingestion, transformation, and warehousing pipelines designed for operational data at industrial scale.",
    details: [
      "Streaming & batch ingestion frameworks",
      "ETL/ELT pipeline design",
      "Time-series data warehousing",
    ],
  },
  {
    icon: BarChart3,
    title: "Operational Analytics & Dashboards",
    description:
      "KPI monitoring, anomaly detection, and performance benchmarking dashboards tailored to engineering decision-makers.",
    details: [
      "Real-time KPI dashboards",
      "Statistical anomaly detection",
      "Cross-asset performance benchmarking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Statistical modeling and trend forecasting for asset health, process degradation, and operational risk.",
    details: [
      "Time-series forecasting models",
      "Degradation trend analysis",
      "Risk probability scoring",
    ],
  },
];

const aiScenarios = [
  {
    icon: Brain,
    title: "AI-Augmented Failure Prediction",
    description:
      "Machine learning models trained on historical failure data flag at-risk assets before incidents occur — shifting organizations from reactive to predictive maintenance.",
    impact: "Up to 40% reduction in unplanned downtime",
  },
  {
    icon: FileSearch,
    title: "Natural Language Report Mining",
    description:
      "AI parses thousands of inspection reports, maintenance logs, and incident records to surface hidden patterns that human review would miss.",
    impact: "10x faster pattern discovery across document archives",
  },
  {
    icon: Eye,
    title: "Computer Vision for Inspection",
    description:
      "Automated defect detection from drone imagery, radiographic scans, and ultrasonic data — reducing human error and accelerating turnaround.",
    impact: "95%+ defect detection accuracy on trained asset classes",
  },
  {
    icon: Boxes,
    title: "Digital Twin Simulation",
    description:
      "AI-driven digital twins simulate 'what-if' scenarios for infrastructure under stress — from seismic events to thermal cycling to load redistribution.",
    impact: "Thousands of scenarios evaluated in hours, not months",
  },
  {
    icon: Sparkles,
    title: "Intelligent Data Preparation",
    description:
      "Automated data quality scoring, missing-value imputation, and sensor drift correction — turning raw industrial data into trustworthy analytics inputs.",
    impact: "80% reduction in manual data preparation effort",
  },
];

/* ── animation helpers ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ── page ── */
const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border">
        <div className="cinematic-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="label-mono mb-6">Capabilities</div>
            <div className="divider-line mx-auto mb-10" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] max-w-5xl mx-auto">
              Engineering Meets{" "}
              <span className="italic text-accent">Data Intelligence</span>
            </h1>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
              We combine deep engineering domain expertise with modern data
              engineering, analytics, and AI to solve problems that neither
              discipline can tackle alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Engineering Capabilities ─── */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="cinematic-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="label-mono mb-4">01 / Engineering Services</div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground max-w-2xl">
              Deep-Domain Engineering Expertise
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl">
              From forensic failure analysis to regulatory compliance — rigorous,
              first-principles engineering across critical infrastructure sectors.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {engineeringCapabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="group bg-card border border-border rounded-sm p-7 hover:border-accent/40 transition-colors duration-500"
              >
                <cap.icon className="w-5 h-5 text-accent mb-5" />
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-5">
                  {cap.description}
                </p>
                <ul className="space-y-2">
                  {cap.details.map((d) => (
                    <li
                      key={d}
                      className="font-mono-data text-[9px] uppercase tracking-[0.12em] text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-1 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Data Engineering & Analytics ─── */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/30">
        <div className="cinematic-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="label-mono mb-4">02 / Data Engineering & Analytics</div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground max-w-2xl">
              Industrial Data, Made Actionable
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl">
              From raw sensor feeds to executive dashboards — we build the data
              infrastructure that turns operational noise into engineering insight.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {dataCapabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="group bg-card border border-border rounded-sm p-7 hover:border-accent/40 transition-colors duration-500"
              >
                <div className="flex items-start gap-5">
                  <cap.icon className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">
                      {cap.title}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed mb-5">
                      {cap.description}
                    </p>
                    <ul className="space-y-2">
                      {cap.details.map((d) => (
                        <li
                          key={d}
                          className="font-mono-data text-[9px] uppercase tracking-[0.12em] text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent mt-1 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── AI Scenarios ─── */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="cinematic-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="label-mono mb-4">03 / AI-Powered Engineering</div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground max-w-3xl mx-auto">
              How Nova Acta Uses AI to{" "}
              <span className="italic text-accent">Transform</span> Your
              Operations
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Practical AI applications grounded in engineering reality — not
              hype. Each scenario is deployed with domain-specific validation.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {aiScenarios.map((scenario, i) => (
              <motion.div
                key={scenario.title}
                variants={fadeUp}
                className="group relative bg-card border border-border rounded-sm p-8 md:p-10 hover:border-accent/40 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-accent/10 shrink-0">
                    <scenario.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono-data text-[9px] text-accent uppercase tracking-[0.15em]">
                        Scenario {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-3">
                      {scenario.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                      {scenario.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-sm px-4 py-2">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      <span className="font-mono-data text-[9px] uppercase tracking-[0.12em] text-accent">
                        {scenario.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-20 md:py-28">
        <div className="cinematic-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground max-w-2xl mx-auto mb-6">
              Ready to see what's possible?
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto mb-10">
              Whether you need forensic engineering expertise, a modern data
              platform, or AI-driven insights — we bring it all together.
            </p>
            <a
              href="mailto:hello@novaacta.com"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono-data text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-accent/90 transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
