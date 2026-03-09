import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NovaActaLogo from "@/components/NovaActaLogo";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="cinematic-container">
        <div className="flex h-20 items-center justify-between">
          <a href="/">
            <NovaActaLogo variant="full" size="sm" />
          </a>

          <a
            href="mailto:hello@novaacta.com"
            className="hidden md:block font-mono-data text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            hello@novaacta.com
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="cinematic-container py-6">
            <a
              href="mailto:hello@novaacta.com"
              className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              hello@novaacta.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
