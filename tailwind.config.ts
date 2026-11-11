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
        "chatbot-shake": "chatbot-shake 5s ease-in-out infinite",
        "chatbot-ripple": "chatbot-ripple 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "chatbot-shake": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          },
          "2%, 6%, 10%, 14%": {
            transform: "translate3d(-3px, 0, 0) rotate(-6deg) scale(1.05)",
          },
          "4%, 8%, 12%, 16%": {
            transform: "translate3d(3px, 0, 0) rotate(6deg) scale(1.05)",
          },
          "18%": {
            transform: "translate3d(-1px, 0, 0) rotate(-2deg) scale(1.02)",
          },
          "20%": {
            transform: "translate3d(1px, 0, 0) rotate(2deg) scale(1.02)",
          },
          "22%, 85%": {
            transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          },
          "87%, 91%, 95%": {
            transform: "translate3d(-2.5px, 0, 0) rotate(-5deg) scale(1.04)",
          },
          "89%, 93%, 97%": {
            transform: "translate3d(2.5px, 0, 0) rotate(5deg) scale(1.04)",
          },
          "99%": {
            transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
          },
        },
        "chatbot-ripple": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0.75",
          },
          "50%": {
            transform: "scale(1.4)",
            opacity: "0.3",
          },
          "100%": {
            transform: "scale(1.85)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
