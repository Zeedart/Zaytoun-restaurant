"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon, StarIcon } from "@/components/ui/Icons";
import { DishImage } from "@/components/ui/DishImage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="pattern-dark relative overflow-hidden bg-brand-deep pb-20 pt-32 text-cream sm:pb-28 sm:pt-40"
    >
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-32 start-[-10%] h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] end-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-light/30 blur-3xl" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
            <StarIcon className="h-3.5 w-3.5" />
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.15] sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="#reserve" variant="gold">
              {t.hero.ctaPrimary}
              <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#menu" variant="outline-light">
              {t.hero.ctaSecondary}
            </ButtonLink>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-gold-light">{s.value}</dt>
                <dd className="mt-1 text-xs text-cream/65 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Arch visual */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-3xl border border-gold/30 p-3">
            <DishImage
              seed="hero-bazin"
              alt={t.hero.badgeDish}
              className="h-full w-full rounded-t-[999px] rounded-b-2xl"
              /* src="/images/hero.jpg"  <- drop a real photo in /public/images and uncomment */
            />
          </div>
          <div className="absolute bottom-8 start-0 animate-floaty rounded-2xl bg-cream px-5 py-4 text-brand-deep shadow-soft sm:-start-4">
            <p className="text-xs font-semibold text-gold">{t.hero.badge}</p>
            <p className="font-display text-xl font-bold">{t.hero.badgeDish}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
