import { Link } from "react-router-dom";
import logoGold from "@/assets/logo-compass-gold.png";
import wordmark from "@/assets/wordmark-tech-6.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="cinematic-container">
        <div className="flex flex-col items-center gap-6 mb-12">
          <img src={logoGold} alt="NovaActa" className="w-12 h-12 object-contain" />
          <img src={wordmark} alt="NOVA·ACTA" className="h-5 object-contain" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-mono-data text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40">
            © {new Date().getFullYear()} NovaActa · All rights reserved
          </span>

          <div className="flex gap-6">
            <Link to="/" className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/case-studies" className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 hover:text-accent transition-colors">
              Case Studies
            </Link>
          </div>

          <div className="flex gap-8">
            {["London", "Houston", "Singapore"].map((city) => (
              <span key={city} className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground/30">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
