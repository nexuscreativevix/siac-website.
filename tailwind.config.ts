import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#9F211C",
          "primary-dark": "#7A1915",
          black: "#000000",
          graphite: "#282928",
          gray: "#BEBEBE",
          ice: "#EFEEEF",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
      },
      borderRadius: {
        input: "8px",
        card: "12px",
        "card-lg": "16px",
        button: "24px",
        pill: "999px",
      },
      boxShadow: {
        "level-1": "0px 2px 8px 0px rgba(40, 41, 40, 0.08)",
        "level-2": "0px 8px 24px 0px rgba(40, 41, 40, 0.12)",
        "level-3": "0px 16px 40px 0px rgba(40, 41, 40, 0.18)",
        elevated: "0px 12px 32px 0px rgba(40, 41, 40, 0.14)",
        "glow-primary": "0px 0px 32px 0px rgba(159, 33, 28, 0.35)",
      },
      backdropBlur: {
        glass: "20px",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "whatsapp-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "whatsapp-pulse": "whatsapp-pulse 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
