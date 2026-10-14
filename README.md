# Zaytoun — Restaurant Website Demo (Next.js)

A bilingual (Arabic RTL / English LTR) restaurant landing page built as a portfolio demo.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
src/
  app/
    layout.tsx            fonts, <html lang dir>, LanguageProvider
    page.tsx              composes the sections
    globals.css           base styles, patterns, scroll-reveal
  components/
    ui/                   reusable pieces: Button, Container, SectionHeading,
                          Reveal, DishImage, LanguageToggle, Icons
    sections/             Navbar, Hero, About, Menu, MenuCard, Reviews,
                          Reservation, Footer
  data/menu.ts            menu items (bilingual) + categories
  lib/i18n/
    dictionary.ts         ALL Arabic + English text
    LanguageProvider.tsx  language state, toggles dir/lang, remembers choice
tailwind.config.ts        colour palette + fonts
```

## Customising for a client

- **Name, text, hours, address:** edit `src/lib/i18n/dictionary.ts` (both `en` and `ar`).
- **Menu:** edit `src/data/menu.ts`. Add `image: "/images/dish.jpg"` to show a real photo.
- **Photos:** put files in `public/images/`. The hero and about images have commented `src` lines.
- **Colours:** change `brand`, `cream`, `gold` in `tailwind.config.ts`.
- **Reservation form:** `src/components/sections/Reservation.tsx` is demo-only. Wire `onSubmit` to
  an API route, email service, or a WhatsApp link.
- **Default language:** change the initial state in `LanguageProvider.tsx` (`"ar"` / `"en"`).

## Notes

- Layout uses Tailwind logical utilities (`ms-`, `ps-`, `start-`, `text-start`) and the `rtl:`
  variant so everything mirrors correctly when switching language.
- Fonts: Cairo + Amiri (Arabic), Inter + Playfair Display (English) via `next/font/google`.
