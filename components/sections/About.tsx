"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DishImage } from "@/components/ui/DishImage";
import { FlameIcon, LeafIcon, UsersIcon } from "@/components/ui/Icons";

const featureIcons = [LeafIcon, FlameIcon, UsersIcon];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad pattern-light">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <DishImage
              seed="about-main"
              alt={t.about.title}
              className="aspect-[4/5] w-full rounded-3xl shadow-card"
              /* src="/images/about.jpg" */
            />
            <DishImage
              seed="about-small"
              alt=""
              className="absolute -bottom-8 end-[-0.5rem] h-40 w-40 rounded-2xl border-4 border-cream shadow-card sm:end-[-2rem] sm:h-48 sm:w-48"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading align="start" eyebrow={t.about.eyebrow} title={t.about.title} />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-ink/70">
              {t.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {t.about.features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <Reveal key={f.title} delay={150 + i * 100}>
                  <li className="list-none">
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-gold-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-brand">{f.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{f.text}</p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
