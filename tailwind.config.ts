import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#F7F3E9",
          200: "#EFE6D5",
          300: "#E5D7C0",
        },
        forest: {
          50: "#EAF3ED",
          100: "#CDE2D4",
          500: "#4E8752",
          700: "#2D5A40",
          800: "#1E3A2B",
          900: "#14291E",
        },
        gold: {
          100: "#FEF7DF",
          300: "#F4D068",
          400: "#E5C158",
          500: "#D4AF37",
          600: "#B89225",
        },
        skyCustom: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          300: "#8ECAE6",
          500: "#0284C7",
        },
        softBrown: {
          100: "#F5EFEA",
          300: "#D9C3B0",
          500: "#8B6B4D",
          700: "#6B4E3D",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(30, 58, 43, 0.08)",
        card: "0 15px 35px -5px rgba(30, 58, 43, 0.05), 0 5px 15px -3px rgba(0, 0, 0, 0.02)",
        glow: "0 0 25px rgba(212, 175, 55, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        leafDrift: "leafDrift 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" },
        },
        leafDrift: {
          "0%": { transform: "translate(0, -10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translate(100px, 100vh) rotate(360deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
