import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoGold from "@/assets/logo-compass-gold.png";
import wordmark from "@/assets/wordmark-tech-6.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Case Studies", path: "/case-studies" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoGold} alt="NovaActa" className="w-10 h-10 md:w-11 md:h-11 object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-mono-data text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-border" />
            <a
              href="mailto:hello@novaacta.com"
              className="font-mono-data text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
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
          <div className="cinematic-container py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block font-mono-data text-[11px] uppercase tracking-[0.2em] ${
                  location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:hello@novaacta.com"
              className="block font-mono-data text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
