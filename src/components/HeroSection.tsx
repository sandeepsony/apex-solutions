import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-16 relative">
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(38 80% 55% / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="editorial-container relative z-10 text-center">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              PhD-Led Engineering Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.0] text-foreground mb-8 max-w-4xl mx-auto"
          >
            You have the data.
            <br />
            <span className="text-primary">We see what's inside.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          >
            We embed PhD domain experts into your engineering data — revealing
            failures before they happen, efficiencies you can't see, and decisions
            your teams couldn't make alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button variant="command" size="lg">
              Start a Conversation
            </Button>
            <Button variant="commandOutline" size="lg">
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll invitation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60">
              See how we dissect complex systems
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-4 w-4 text-primary/50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
