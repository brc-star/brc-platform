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
        background: "#030712",
        foreground: "#f8fafc",
        brand: {
          50: "#e0faff",
          100: "#b9f4fe",
          200: "#7de8fc",
          300: "#38d8f9",
          400: "#00c4f0",
          500: "#00e5ff", // Primary Deep-Tech Cyan
          600: "#0099cc",
          700: "#007a99",
          800: "#005c73",
          900: "#022837",
        },
        electric: {
          blue: "#0ea5e9",
          cyan: "#00e5ff",
          glow: "rgba(0, 229, 255, 0.4)",
          amber: "#f59e0b",
          emerald: "#10b981",
        },
        space: {
          950: "#02040a",
          900: "#050814",
          850: "#090d1f",
          800: "#0f1629",
          700: "#18223c",
          600: "#243254",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-highlight": "radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "electric-cyan": "0 0 25px -5px rgba(0, 229, 255, 0.3)",
        "electric-cyan-lg": "0 0 50px -10px rgba(0, 229, 255, 0.5)",
        "glass-edge": "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow": "flow 3s linear infinite",
        "chatbot-vibrate": "chatbot-vibrate 3.5s ease-in-out infinite",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "chatbot-vibrate": {
          "0%, 100%": {
            transform: "rotate(0deg) scale(1)",
          },
          "10%": {
            transform: "rotate(-10deg) scale(1.04)",
          },
          "20%": {
            transform: "rotate(10deg) scale(1.04)",
          },
          "30%": {
            transform: "rotate(-8deg) scale(1.02)",
          },
          "40%": {
            transform: "rotate(8deg) scale(1.02)",
          },
          "50%": {
            transform: "rotate(-3deg)",
          },
          "60%": {
            transform: "rotate(3deg)",
          },
          "70%, 90%": {
            transform: "rotate(0deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
