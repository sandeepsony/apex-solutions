const Footer = () => {
  const columns = [
    {
      title: "Capabilities",
      links: ["Engineering", "Climate", "Oil & Gas", "Manufacturing", "BIM", "Digital Twins"],
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
    <footer className="border-t border-border py-16 md:py-20">
      <div className="editorial-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground mb-4">
              Apex Advisory
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              PhD-led consulting at the intersection of deep science,
              engineering expertise, and artificial intelligence.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="label-uppercase mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apex Advisory. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
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
