import logo1 from "@/assets/logo-option-1.png";
import logo2 from "@/assets/logo-option-2.png";
import logo3 from "@/assets/logo-option-3.png";
import logo5 from "@/assets/logo-option-5.png";
import logo6 from "@/assets/logo-option-6.png";
import logo7 from "@/assets/logo-option-7.png";
import logo8 from "@/assets/logo-option-8.png";

const logos = [
  { id: 1, src: logo1, name: "Option 1", desc: "Classic serif NA monogram — timeless, old-money prestige" },
  { id: 2, src: logo2, name: "Option 2", desc: "Diamond compass mark — precision and convergence" },
  { id: 3, src: logo3, name: "Option 3", desc: "Nova star burst — scientific, precise, luminous" },
  { id: 5, src: logo5, name: "Option 5", desc: "3D prism / delta — depth, facets, insight" },
  { id: 6, src: logo6, name: "Option 6", desc: "N in circle — minimal, architectural, authoritative" },
  { id: 7, src: logo7, name: "Option 7", desc: "Geometric NA grid — engineered, structural, technical" },
  { id: 8, src: logo8, name: "Option 8", desc: "North star compass — direction, discovery, exploration" },
];

const LogoGallery = () => {
  return (
    <section className="min-h-screen py-24 bg-background">
      <div className="cinematic-container">
        <div className="label-mono mb-4">NovaActa · Logo Options</div>
        <div className="divider-line mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-background group hover:bg-card transition-colors duration-500"
            >
              {/* Logo display area */}
              <div className="aspect-square flex items-center justify-center p-12 relative overflow-hidden">
                {/* Dark background to see white logos */}
                <div className="absolute inset-0 bg-background group-hover:bg-card transition-colors duration-500" />
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="relative z-10 w-full h-full object-contain max-w-[60%] max-h-[60%] invert"
                />
              </div>
              {/* Info */}
              <div className="px-8 pb-10 border-t border-border pt-6">
                <div className="font-mono-data text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                  {logo.name}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {logo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-heading text-xl italic text-muted-foreground">
            Tell me which number you prefer and I'll implement it throughout the site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoGallery;
