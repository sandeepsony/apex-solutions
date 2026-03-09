interface NovaActaLogoProps {
  variant?: "full" | "mark" | "wordmark";
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
}

const sizes = {
  sm: { mark: 16, text: "text-[11px]", spacing: "tracking-[0.35em]", gap: "gap-2" },
  md: { mark: 20, text: "text-[13px]", spacing: "tracking-[0.3em]", gap: "gap-2.5" },
  lg: { mark: 28, text: "text-base", spacing: "tracking-[0.25em]", gap: "gap-3" },
  xl: { mark: 36, text: "text-xl", spacing: "tracking-[0.2em]", gap: "gap-4" },
  hero: { mark: 56, text: "text-3xl md:text-4xl", spacing: "tracking-[0.15em]", gap: "gap-5" },
};

/**
 * NovaActa brand mark — an abstract "convergence" symbol.
 * Two angled lines converging to a point with a small circle — 
 * representing the moment disparate data points reveal a single truth.
 */
const BrandMark = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    {/* Outer diamond frame — quiet authority */}
    <path
      d="M20 2 L38 20 L20 38 L2 20 Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.4"
    />
    {/* Inner convergence lines */}
    <line x1="10" y1="10" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    <line x1="30" y1="10" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    {/* The insight point */}
    <circle cx="20" cy="20" r="2" fill="currentColor" />
    {/* Emanation — the answer radiating outward */}
    <line x1="20" y1="20" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const NovaActaLogo = ({ variant = "full", size = "md", className = "" }: NovaActaLogoProps) => {
  const s = sizes[size];

  if (variant === "mark") {
    return (
      <div className={`text-foreground ${className}`}>
        <BrandMark size={s.mark} />
      </div>
    );
  }

  if (variant === "wordmark") {
    return (
      <div className={`text-foreground ${className}`}>
        <span className={`font-heading font-medium ${s.text} ${s.spacing} uppercase`}>
          Nova<span className="text-accent">Acta</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${s.gap} text-foreground ${className}`}>
      <BrandMark size={s.mark} />
      <div className="flex flex-col">
        <span className={`font-heading font-medium ${s.text} ${s.spacing} uppercase leading-none`}>
          Nova<span className="text-accent">Acta</span>
        </span>
        {(size === "lg" || size === "xl" || size === "hero") && (
          <span className="font-mono-data text-[8px] uppercase tracking-[0.4em] text-muted-foreground mt-1">
            Engineering Intelligence
          </span>
        )}
      </div>
    </div>
  );
};

export default NovaActaLogo;
export { BrandMark };
