import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import heroPlatform from "@/assets/hero-platform.jpg";
import logoGold from "@/assets/logo-compass-gold.png";
import wordmark from "@/assets/wordmark-tech-6.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroPlatform} alt="Offshore platform" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
      </div>

      <div className="cinematic-container relative z-10 text-center">
        {/* Gold compass logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div
              className="absolute inset-0 blur-3xl scale-[2]"
              style={{ background: "radial-gradient(circle, hsl(35 100% 50% / 0.2) 0%, transparent 70%)" }}
            />
            <img src={logoGold} alt="NovaActa" className="relative z-10 w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <img src={wordmark} alt="NOVA·ACTA" className="h-8 md:h-12 object-contain" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="label-mono mb-10"
        >
          Engineering Intelligence
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.2 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.15] text-foreground max-w-5xl mx-auto mb-6"
        >
          We solve engineering problems{" "}
          <span className="italic text-accent">nobody else can.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          14 PhDs across 8 engineering disciplines. We combine deep domain expertise 
          with advanced data science to uncover failures, optimize performance, and 
          prevent catastrophic events — before they happen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col items-center gap-3"
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
