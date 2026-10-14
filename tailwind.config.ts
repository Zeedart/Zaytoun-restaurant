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
          DEFAULT: "#2f4a35",
          light: "#4c6b52",
          dark: "#1b2c20",
          deep: "#121e16",
        },
        cream: {
          DEFAULT: "#f8f3e9",
          dark: "#efe6d2",
        },
        sand: "#e4d6b8",
        gold: {
          DEFAULT: "#c0913f",
          light: "#dcb56a",
        },
        terracotta: "#b5593a",
        ink: "#1b1f1a",
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
