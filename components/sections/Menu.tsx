"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MenuCard } from "./MenuCard";
import type { ITEMS_QUERY_RESULT, CATEGORIES_QUERY_RESULT } from "@/sanity.types";

type Props = {
  menuItems: ITEMS_QUERY_RESULT;
  categories: CATEGORIES_QUERY_RESULT ;
};

export function Menu({ menuItems, categories }: Props) {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<string>("all"); // "all" or a category _id

  const visible =
    active === "all" ? menuItems : menuItems.filter((i) => i.category?._id === active);

  const tabClass = (isActive: boolean) =>
    `shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
      isActive ? "bg-brand text-cream shadow-soft" : "bg-white text-brand hover:bg-brand/10"
    }`;

  return (
    <section id="menu" className="section-pad bg-cream-dark">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} subtitle={t.menu.subtitle} />
        </Reveal>

        <div
          role="tablist"
          aria-label={t.menu.title}
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          <button
            role="tab"
            aria-selected={active === "all"}
            onClick={() => setActive("all")}
            className={tabClass(active === "all")}
          >
            {t.menu.categories.all}
          </button>

          {categories.map((c) => (
            <button
              key={c._id}
              role="tab"
              aria-selected={active === c._id}
              onClick={() => setActive(c._id)}
              className={tabClass(active === c._id)}
            >
              {c.name?.[lang]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink/50">{t.menu.note}</p>
      </Container>
    </section>
  );
}