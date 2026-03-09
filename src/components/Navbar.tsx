import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center">
            <span className="font-heading text-primary-foreground text-sm font-bold">A</span>
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            Apex Advisory
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Expertise", "Approach", "Industries", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <Button variant="hero" size="sm" className="hidden sm:inline-flex">
          Engage Us <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
