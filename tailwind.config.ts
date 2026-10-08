import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F9F9FB",
        surface: "#FFFFFF",
        "surface-card": "#EDEFF3",
        "surface-warm": "#F5F5F0",
        "surface-muted": "#F3F4F6",
        ink: "#0D0D11",
        "ink-muted": "#646775",
        "ink-light": "#969BAA",
        accent: "#39FF14",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(13, 13, 17, 0.06)",
        float: "0 20px 40px -15px rgba(13, 13, 17, 0.12)",
        hero: "0 25px 60px -20px rgba(13, 13, 17, 0.08)",
        "hard-green": "4px 4px 0 #39FF14",
        badge: "0 8px 24px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
      },
      keyframes: {
        // Défilement de GAUCHE à DROITE (les items apparaissent par la gauche)
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
