const Footer = () => {
  const columns = [
    {
      title: "Capabilities",
      links: ["Predictive Analytics", "Process Optimization", "Subsurface Intelligence", "Climate Risk", "Digital Twins", "BIM Intelligence"],
    },
    {
      title: "Firm",
      links: ["About", "Leadership", "Careers", "Newsroom"],
    },
    {
      title: "Connect",
      links: ["Contact", "London", "Houston", "Singapore", "Abu Dhabi"],
    },
  ];

  return (
    <footer className="border-t border-border py-16">
      <div className="editorial-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                Apex Advisory
              </span>
            </div>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              PhD-led data advisory at the intersection of deep engineering
              expertise and advanced analytics.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[9px] text-muted-foreground/40 tracking-wider">
            © {new Date().getFullYear()} APEX ADVISORY · ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[9px] text-muted-foreground/40 hover:text-primary transition-colors tracking-wider uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
