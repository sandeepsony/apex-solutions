import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroPlatform from "@/assets/hero-platform.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroPlatform}
          alt="Offshore platform at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      </div>

      <div className="cinematic-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="label-mono mb-16"
        >
          A case study in engineering intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] text-foreground max-w-4xl mx-auto mb-8"
        >
          A $400M offshore platform was losing 6% output.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl italic text-muted-foreground max-w-3xl mx-auto mb-20"
        >
          Nobody knew why.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="divider-line" />
          <span className="label-mono">Scroll to investigate</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
