import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const disciplines = [
  { name: "Structural Engineering", count: 3 },
  { name: "Thermodynamics", count: 2 },
  { name: "Applied Mathematics", count: 2 },
  { name: "Materials Science", count: 2 },
  { name: "Chemical Engineering", count: 2 },
  { name: "Geomechanics", count: 1 },
  { name: "Control Systems", count: 1 },
  { name: "Fluid Dynamics", count: 1 },
];

const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-32 md:py-48">
      <motion.div style={{ opacity }} className="cinematic-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="label-mono mb-12">Who we are</div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground leading-tight mb-8">
            14 PhDs. 8 disciplines.
            <br />
            <span className="italic text-muted-foreground">One mandate: find what others miss.</span>
          </h2>

          <div className="divider-line mx-auto mb-12" />

          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            We are not consultants. We are researchers who chose industry over academia — 
            because the most interesting problems live inside your data, 
            not inside journals.
          </p>
        </div>

        {/* Discipline grid */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {disciplines.map((d) => (
              <div
                key={d.name}
                className="bg-background p-6 text-center group hover:bg-card transition-colors duration-500"
              >
                <div className="font-heading text-2xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                  {d.count}
                </div>
                <div className="font-mono-data text-[8px] uppercase tracking-[0.2em] text-muted-foreground leading-relaxed">
                  {d.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
