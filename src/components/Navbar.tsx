import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = ["Capabilities", "Industries", "Insights", "About", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="editorial-container">
        <div className="flex h-20 items-center justify-between border-b border-border">
          <a href="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Apex Advisory
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="editorial" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="editorial-container py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
            <Button variant="editorial" size="sm" className="w-fit mt-2">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
