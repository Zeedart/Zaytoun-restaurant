import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-cream hover:bg-brand-light shadow-soft",
  gold: "bg-gold text-brand-deep hover:bg-gold-light shadow-soft",
  outline: "border border-brand/30 text-brand hover:border-brand hover:bg-brand hover:text-cream",
  "outline-light": "border border-cream/40 text-cream hover:bg-cream hover:text-brand-deep",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60";

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
