import logo8 from "@/assets/logo-option-8.png";
import wordmark1 from "@/assets/wordmark-1.png";
import wordmark2 from "@/assets/wordmark-2.png";
import wordmark3 from "@/assets/wordmark-3.png";
import wordmark4 from "@/assets/wordmark-4.png";
import wordmark5 from "@/assets/wordmark-5.png";
import wordmark6 from "@/assets/wordmark-6.png";

const logos = [
  { id: "logo-8", src: logo8, name: "Compass Mark", desc: "North star compass — your chosen icon", isSquare: true },
];

const wordmarks = [
  { id: "wordmark-1", src: wordmark1, name: "Wordmark 1", desc: "Thin elegant serif — timeless, refined" },
  { id: "wordmark-2", src: wordmark2, name: "Wordmark 2", desc: "Geometric sans — modern, tech-forward" },
  { id: "wordmark-3", src: wordmark3, name: "Wordmark 3", desc: "Bold serif — commanding, editorial" },
  { id: "wordmark-4", src: wordmark4, name: "Wordmark 4", desc: "Didone serif — luxury fashion feel" },
  { id: "wordmark-5", src: wordmark5, name: "Wordmark 5", desc: "Monospace split — technical blueprint" },
  { id: "wordmark-6", src: wordmark6, name: "Wordmark 6", desc: "Script signature — personal, bespoke" },
];

const BrandGallery = () => {
  return (
    <section className="min-h-screen py-24 bg-background">
      <div className="cinematic-container">
        {/* Compass Logo Section */}
        <div className="mb-20">
          <div className="label-mono mb-4">Your Chosen Logo Mark</div>
          <div className="divider-line mb-12" />
          
          <div className="flex justify-center">
            <div className="bg-card border border-border p-16 inline-block">
              <img
                src={logo8}
                alt="NovaActa Compass Mark"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          <p className="text-center mt-6 font-body text-sm text-muted-foreground">
            North Star Compass — Direction, Discovery, Exploration
          </p>
        </div>

        {/* Wordmark Options */}
        <div className="label-mono mb-4">Choose a Wordmark Style</div>
        <div className="divider-line mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {wordmarks.map((wm) => (
            <div
              key={wm.id}
              className="bg-background group hover:bg-card transition-colors duration-500 p-8"
            >
              {/* Wordmark display */}
              <div className="aspect-[2/1] flex items-center justify-center mb-6 bg-card rounded overflow-hidden">
                <img
                  src={wm.src}
                  alt={wm.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Info */}
              <div className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                {wm.name}
              </div>
              <p className="font-body text-sm text-muted-foreground">
                {wm.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-heading text-xl italic text-muted-foreground">
            Tell me which wordmark number (1-6) you prefer and I'll pair it with your compass logo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandGallery;
