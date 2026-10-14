"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/Icons";

export function Footer() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <footer id="contact" className="bg-brand-deep pt-20 text-cream">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl font-bold">{t.brand.name}</p>
            <p className="mt-2 text-gold-light">{t.brand.tagline}</p>
            <p className="mt-5 max-w-sm text-sm text-cream/65">{t.meta.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-cream/60">{c.followUs}</span>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-cream/20 p-2.5 transition-colors hover:bg-gold hover:text-brand-deep"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-cream/20 p-2.5 transition-colors hover:bg-gold hover:text-brand-deep"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold">{c.title}</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/75">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                {c.address}
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} dir="ltr">
                  {c.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-2xl font-bold">
              <ClockIcon className="h-5 w-5 text-gold-light" />
              {c.hoursTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {c.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                  <span>{h.days}</span>
                  <span className="font-semibold text-cream">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
          <p>{t.footer.demo}</p>
        </div>
      </Container>
    </footer>
  );
}
