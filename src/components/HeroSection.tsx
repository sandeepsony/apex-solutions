import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import DataStreamViz from "@/components/DataStreamViz";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

      <div className="cinematic-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[85vh]">
          {/* Left — Bold text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <Wordmark size="hero" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="label-mono mb-8"
            >
              Engineering Intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.08] text-foreground mb-6"
            >
              We solve engineering problems{" "}
              <span className="italic text-accent">nobody else can.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              14 PhDs across 8 engineering disciplines. We combine deep domain expertise
              with advanced data science to uncover failures, optimize performance, and
              prevent catastrophic events — before they happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-mono-data text-[11px] uppercase tracking-[0.2em] hover:bg-accent/90 transition-all duration-300 group"
              >
                View Case Studies
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:hello@novaacta.com"
                className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 font-mono-data text-[11px] uppercase tracking-[0.2em] text-foreground hover:border-accent hover:text-accent transition-all duration-500"
              >
                Start a Conversation
              </a>
            </motion.div>
          </div>

          {/* Right — Data visualization panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Mock platform window */}
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
              <div className="relative h-[480px]">
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

            {/* Glow effect behind the panel */}
            <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="divider-line" />
          <span className="label-mono">Discover more</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
