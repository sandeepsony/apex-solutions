const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-primary flex items-center justify-center">
            <span className="font-heading text-primary-foreground text-xs font-bold">A</span>
          </div>
          <span className="font-heading text-sm font-semibold text-foreground">
            Apex Advisory
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Apex Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
