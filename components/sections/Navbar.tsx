"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

const links = [
  { href: "#about", key: "about" },
  { href: "#menu", key: "menu" },
  { href: "#reviews", key: "reviews" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-brand-deep/95 py-3 shadow-soft backdrop-blur" : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-3xl font-bold text-cream">{t.brand.name}</span>
          <span className="hidden text-xs tracking-wide text-gold-light sm:block">
            {t.brand.tagline}
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold-light"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="border-cream/30 text-cream hover:bg-cream/10" />
          <ButtonLink href="#reserve" variant="gold" className="hidden sm:inline-flex">
            {t.nav.bookTable}
          </ButtonLink>
          <button
            type="button"
            className="rounded-full p-2 text-cream lg:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 overflow-y-auto bg-brand-deep px-6 pb-10 pt-8 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-4 font-display text-2xl text-cream"
              >
                {t.nav[l.key]}
              </a>
            ))}
          </nav>
          <ButtonLink
            href="#reserve"
            variant="gold"
            className="mt-8 w-full"
            onClick={() => setOpen(false)}
          >
            {t.nav.bookTable}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
