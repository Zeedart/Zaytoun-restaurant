import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Olive green + warm cream + brass gold: calm, elegant, Mediterranean
        brand: {
          DEFAULT: "#9b1c24",   // deep red
          light: "#c0343c",
          dark: "#5c1017",
          deep: "#171011",      // warm black (hero, footer backgrounds)
        },
        cream: { DEFAULT: "#f6efe3", dark: "#ede1cd" },
        sand: "#dfcfae",
        gold: { DEFAULT: "#e8a02a", light: "#f0b24f" },   // now orange
        terracotta: "#c8202f",  // bright accent red
        ink: "#1a1213",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27, 44, 32, 0.25)",
        card: "0 2px 0 rgba(27, 44, 32, 0.04), 0 18px 40px -20px rgba(27, 44, 32, 0.3)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
