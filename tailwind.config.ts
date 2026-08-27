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
        "primary-dark": "#84FB7F",
        "primary-light": "#49CC68",
        "neutral-900": "#090D14",
        "neutral-800": "#12161F",
        "neutral-700": "#1C212D",
        "neutral-600": "#2A303D",
        "neutral-400": "#6B7280",
        "neutral-200": "#E5E7EB",
        "base-white": "#FFFFFF",
        "base-black": "#000000",
        "up-green": "#49CC68",
        "down-red": "#FF5C5C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["44px", { lineHeight: "56px", fontWeight: "600" }],
        "hero-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        h1: ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "h1-mobile": ["26px", { lineHeight: "34px", fontWeight: "600" }],
        h2: ["28px", { lineHeight: "36px", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        paragraph: ["18px", { lineHeight: "26px" }],
        body1: ["14px", { lineHeight: "24px" }],
        body2: ["12px", { lineHeight: "20px" }],
        tag: ["10px", { lineHeight: "12px" }],
      },
      borderRadius: {
        pill: "999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
