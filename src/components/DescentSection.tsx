import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import descentCorrosion from "@/assets/descent-corrosion.jpg";

const layers = [
  {
    depth: "Surface Level",
    label: "01 — The Platform",
    description: "Production output dropped 6.2% over 14 months. Operations team attributed it to seasonal variance.",
    detail: "Mechanical Engineer PhD",
    color: "hsl(0 0% 45%)",
  },
  {
    depth: "Deck Level",
    label: "02 — Process Systems",
    description: "Flow analysis revealed micro-pressure fluctuations in the separator train — invisible to standard SCADA thresholds.",
    detail: "Chemical Engineer PhD",
    color: "hsl(0 0% 55%)",
  },
  {
    depth: "Sub-deck",
    label: "03 — Heat Exchange Network",
    description: "Thermal imaging cross-referenced with physics models showed progressive fouling in three exchangers, degrading efficiency by 0.3% per month.",
    detail: "Thermodynamics PhD",
    color: "hsl(0 0% 65%)",
    showImage: true,
  },
  {
    depth: "Subsea",
    label: "04 — Pipeline & Riser",
    description: "Vibration frequency analysis identified flow-induced oscillation at the riser base — a precursor to fatigue cracking with a 26-month failure horizon.",
    detail: "Structural Dynamics PhD",
    color: "hsl(0 0% 75%)",
  },
  {
    depth: "Data Layer",
    label: "05 — The Convergence",
    description: "All four issues were interconnected. A physics-informed ML model mapped the cascade: fouling → pressure shift → vibration → accelerated fatigue. One root cause, four symptoms.",
    detail: "Applied Mathematics PhD",
    color: "hsl(35 100% 50%)",
  },
];

const DescentSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${layers.length * 100}vh` }}>
      {layers.map((layer, i) => {
        const start = i / layers.length;
        const end = (i + 0.8) / layers.length;

        return (
          <DescentLayer
            key={i}
            layer={layer}
            index={i}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
            isLast={i === layers.length - 1}
          />
        );
      })}
    </div>
  );
};

interface DescentLayerProps {
  layer: typeof layers[0];
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
  isLast: boolean;
}

const DescentLayer = ({ layer, index, scrollYProgress, start, end, isLast }: DescentLayerProps) => {
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.08], [60, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="sticky top-0 min-h-screen flex items-center"
    >
      <div className="cinematic-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            {/* Depth indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="h-px flex-grow max-w-16"
                style={{ backgroundColor: layer.color }}
              />
              <span
                className="font-mono-data text-[10px] uppercase tracking-[0.3em]"
                style={{ color: layer.color }}
              >
                {layer.depth}
              </span>
            </div>

            {/* Label */}
            <h2
              className="font-mono-data text-xs font-medium uppercase tracking-[0.2em] mb-6"
              style={{ color: layer.color }}
            >
              {layer.label}
            </h2>

            {/* Description */}
            <p className={`font-heading text-2xl md:text-3xl leading-relaxed mb-8 ${isLast ? 'text-accent' : 'text-foreground'}`}>
              {layer.description}
            </p>

            {/* Expert tag */}
            <div className="inline-flex items-center gap-3 border border-border px-4 py-2">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: layer.color }}
              />
              <span className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {layer.detail}
              </span>
            </div>
          </div>

          {/* Image on specific layers */}
          {layer.showImage && (
            <div className="hidden md:block">
              <div className="relative overflow-hidden">
                <img
                  src={descentCorrosion}
                  alt="Corroded pipe cross-section analysis"
                  className="w-full h-80 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono-data text-[8px] uppercase tracking-[0.3em] text-muted-foreground/60">
                    Cross-section analysis · Sample 03-T
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DescentSection;
