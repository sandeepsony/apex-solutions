import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import Wordmark from "@/components/Wordmark";
import logoGold from "@/assets/logo-compass-gold.png";

const StealthOverlay = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Full-screen click blocker — clear, no blur, no tint */}
          <div className="absolute inset-0" />

          {/* Dialog box — this blocks clicks only on itself */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 max-w-md w-[90%] border border-accent/30 bg-card/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

            <div className="p-8 md:p-10">
              {/* Close button */}
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-accent transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img src={logoGold} alt="" className="w-14 h-14 object-contain" />
              </div>

              {/* Wordmark */}
              <div className="flex justify-center mb-6">
                <Wordmark size="lg" />
              </div>

              {/* Stealth badge */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Lock className="w-3 h-3 text-accent" />
                <span className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-accent">
                  Stealth Mode
                </span>
              </div>

              {/* Message */}
              <p className="font-body text-sm text-muted-foreground text-center leading-relaxed mb-6">
                We're currently operating in stealth. Our team of 14 PhDs is working on 
                groundbreaking engineering intelligence solutions. This preview is confidential.
              </p>

              <div className="divider-line mx-auto mb-6" />

              <p className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50 text-center">
                Scroll to explore · All content is under NDA
              </p>

              {/* Dismiss button */}
              <button
                onClick={() => setDismissed(true)}
                className="mt-6 w-full border border-accent/40 py-3 font-mono-data text-[10px] uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Enter Preview
              </button>
            </div>

            {/* Bottom accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StealthOverlay;
