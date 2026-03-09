import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParticleNetwork from "@/components/ParticleNetwork";
import AnimatedCounter from "@/components/AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="pt-16 relative">
      {/* Hero */}
      <div className="relative min-h-[85vh] flex items-center overflow-hidden grid-bg">
        <ParticleNetwork />

        {/* Scan line effect */}
        <div className="absolute inset-0 scan-line pointer-events-none" />

        <div className="editorial-container relative z-10 py-24">
          <div className="max-w-3xl">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Systems Active — Accepting New Engagements
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground mb-8"
            >
              You have the data.
              <br />
              <span className="text-primary">We have the PhDs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
            >
              Engineering-intensive industries generate petabytes of operational data they
              can't interpret. Our PhD domain experts turn that data into decisions —
              solving problems that have resisted conventional approaches for decades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="command" size="lg">
                See How We Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="commandOutline" size="lg">
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative grid coordinates */}
        <div className="absolute bottom-6 right-6 font-mono text-[9px] text-muted-foreground/30 hidden md:block">
          <p>LAT 25.2048 · LON 55.2708</p>
          <p>NODE: AX-PRIMARY · STATUS: ACTIVE</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-y border-border bg-card/50">
        <div className="editorial-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border py-12">
            <AnimatedCounter end={200} suffix="+" label="PhD Domain Experts" />
            <AnimatedCounter end={85} suffix="%" label="Of Client Data Untapped" />
            <AnimatedCounter end={12} prefix="$" suffix="B" label="Value Unlocked" />
            <AnimatedCounter end={40} suffix="+" label="Engineering Disciplines" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
