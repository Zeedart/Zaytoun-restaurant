"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type Dictionary, type Lang } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "zaytoun-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Arabic is the default language
  const [lang, setLangState] = useState<Lang>("ar");

  // Restore saved choice after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  // Keep <html lang dir> and the page title in sync
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = dictionaries[lang].meta.title;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "ar" ? "en" : "ar"), [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: dictionaries[lang],
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
