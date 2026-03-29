import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DataStreamViz from "@/components/DataStreamViz";

const PlatformSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  return (
    <section ref={ref} className="py-28 md:py-40 border-t border-border overflow-hidden">
      <motion.div style={{ opacity }} className="cinematic-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="label-mono mb-6">Our Platform</div>
          <div className="divider-line mx-auto mb-10" />
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground leading-[1.15] max-w-2xl mx-auto">
            Real-time intelligence,{" "}
            <span className="italic text-accent">not dashboards.</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto mt-6 leading-relaxed">
            Our proprietary platform continuously monitors your assets, detects anomalies 
            across disciplines, and surfaces the failures traditional systems miss.
          </p>
        </div>

        {/* Platform mock */}
        <motion.div style={{ y }} className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-sm overflow-hidden shadow-2xl shadow-background/50">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                NovaActa Platform
              </span>
            </div>

            {/* Visualization area */}
            <div className="relative h-[400px] md:h-[480px]">
              <DataStreamViz />

              {/* Floating stats overlay */}
              <div className="absolute top-6 left-6 right-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-accent">
                    Live Asset Monitoring
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono-data text-[8px] text-muted-foreground">ACTIVE</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Anomalies Detected", value: "3" },
                    { label: "Assets Online", value: "47" },
                    { label: "Risk Score", value: "0.12" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-background/60 backdrop-blur-sm border border-border/50 p-3">
                      <div className="font-heading text-2xl text-foreground">{stat.value}</div>
                      <div className="font-mono-data text-[7px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur border-t border-border/50 px-6 py-3 flex items-center justify-between">
                <span className="font-mono-data text-[8px] text-muted-foreground uppercase tracking-[0.15em]">
                  Predictive failure analysis in real-time
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-1 bg-accent/60 rounded-full" />
                  <div className="w-8 h-1 bg-accent/30 rounded-full" />
                  <div className="w-8 h-1 bg-accent/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PlatformSection;
