import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "as-black": "#050505",
        "as-dark": "#0B0B0D",
        "as-surface": "#111113",
        "as-gold": "#D4AF37",
        "as-gold-bright": "#FFD75A",
        "as-gold-dark": "#9C7820",
        "as-white": "#F5F5F5",
        "as-muted": "#A6A6A6",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #9C7820 0%, #D4AF37 45%, #FFD75A 55%, #D4AF37 75%, #9C7820 100%)",
        "radial-glow":
          "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.18) 0%, rgba(5,5,5,0) 65%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(212,175,55,0.35)",
        "gold-lg": "0 0 40px rgba(212,175,55,0.25)",
        "inner-gold": "inset 0 0 0 1px rgba(212,175,55,0.35)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "100%": { transform: "translateY(-120px) translateX(20px)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.05)" },
        },
      },
      animation: {
        shine: "shine 3.5s linear infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        drift: "drift 12s linear infinite",
        breathe: "breathe 9s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
