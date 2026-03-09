import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RevealSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      
      <motion.div style={{ opacity }} className="cinematic-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="label-mono mb-12">The outcome</div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground leading-tight mb-12">
            One root cause.
            <br />
            <span className="italic text-accent">Four symptoms nobody connected.</span>
          </h2>

          <div className="divider-line mx-auto mb-12" />

          <div className="grid grid-cols-3 gap-8 mb-16">
            {[
              { value: "$38M", label: "Prevented failure cost" },
              { value: "6.2%", label: "Output recovered" },
              { value: "26mo", label: "Early warning" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Five PhDs. Three disciplines. Fourteen months of overlooked data. 
            The answer was always there — it just needed the right people to see it.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default RevealSection;
