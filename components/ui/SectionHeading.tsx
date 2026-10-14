type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", tone = "light" }: Props) {
  const isDark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-start"}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-wide ${
            isDark ? "text-gold-light" : "text-gold"
          }`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-current opacity-60" />}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
          isDark ? "text-cream" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg ${isDark ? "text-cream/70" : "text-ink/65"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
