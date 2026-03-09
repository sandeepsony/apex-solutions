import NovaActaLogo from "@/components/NovaActaLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="cinematic-container">
        <div className="flex flex-col items-center gap-8 mb-12">
          <NovaActaLogo variant="full" size="lg" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-mono-data text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40">
            © {new Date().getFullYear()} NovaActa · All rights reserved
          </span>
          
          <div className="flex gap-8">
            {["London", "Houston", "Singapore"].map((city) => (
              <span
                key={city}
                className="font-mono-data text-[9px] uppercase tracking-[0.2em] text-muted-foreground/30"
              >
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
