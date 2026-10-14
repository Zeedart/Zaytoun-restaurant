import type { Metadata } from "next";
import { Amiri, Cairo, Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "زيتون — مطبخ ليبي ومتوسطي | Zaytoun",
  description:
    "زيتون مطعم دافئ وعصري يقدّم أطباقاً ليبية ومتوسطية. Zaytoun — Libyan & Mediterranean kitchen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Arabic + RTL by default; LanguageProvider updates these when the user toggles
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
