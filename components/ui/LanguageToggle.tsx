"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { toggleLang, t, lang } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLang}
      lang={lang === "ar" ? "en" : "ar"}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${className}`}
    >
      <span aria-hidden className="text-base leading-none">🌐</span>
      {t.nav.language}
    </button>
  );
}
