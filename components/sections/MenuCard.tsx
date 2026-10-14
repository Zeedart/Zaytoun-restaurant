"use client";

import type { MenuItem } from "@/data/menu";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { DishImage } from "@/components/ui/DishImage";

const tagStyles = {
  popular: "bg-gold/20 text-[#8a6420]",
  vegetarian: "bg-brand/10 text-brand",
  spicy: "bg-terracotta/15 text-terracotta",
  new: "bg-brand text-cream",
} as const;

export function MenuCard({ item }: { item: MenuItem }) {
  const { lang, t } = useLanguage();
  const name = item.name[lang];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <DishImage
          src={item.image}
          seed={item.id}
          alt={name}
          className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-brand">{name}</h3>
          <p className="shrink-0 whitespace-nowrap font-semibold text-gold">
            {item.price} <span className="text-xs">{t.menu.currency}</span>
          </p>
        </div>
        <p className="mt-2 flex-1 text-sm text-ink/65">{item.description[lang]}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[tag]}`}
              >
                {t.menu.tags[tag]}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
