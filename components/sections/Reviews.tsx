"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StarIcon } from "@/components/ui/Icons";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="pattern-dark section-pad bg-brand text-cream">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-cream/10 bg-brand-dark/60 p-8 backdrop-blur">
                <div className="flex gap-1 text-gold-light" aria-label="5 / 5">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <StarIcon key={n} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-cream/85">“{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-brand-deep">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{r.name}</span>
                    <span className="block text-xs text-cream/55">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
