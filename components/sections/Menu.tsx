"use client";

import { useState } from "react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MenuCard } from "./MenuCard";

export function Menu() {
  const { t } = useLanguage();
  const [active, setActive] = useState<"all" | MenuCategory>("all");

  const items = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-pad bg-cream-dark">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} subtitle={t.menu.subtitle} />
        </Reveal>

        {/* Category tabs: scrollable on small screens */}
        <div
          role="tablist"
          aria-label={t.menu.title}
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {menuCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                active === c
                  ? "bg-brand text-cream shadow-soft"
                  : "bg-white text-brand hover:bg-brand/10"
              }`}
            >
              {t.menu.categories[c]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink/50">{t.menu.note}</p>
      </Container>
    </section>
  );
}
