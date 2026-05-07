// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",

        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentSoft: "rgb(var(--color-accent-soft) / <alpha-value>)",

        lavender: "rgb(var(--color-lavender) / <alpha-value>)",

        text: "rgb(var(--color-text) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",

        border: "rgb(var(--color-border) / <alpha-value>)",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-grotesk)", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
        glow: "0 0 28px rgb(var(--color-primary) / 0.25)",
      },

      backgroundImage: {
        "main-gradient":
          "linear-gradient(135deg, rgb(var(--color-bg)), rgb(var(--color-surface)))",
        "card-gradient":
          "linear-gradient(135deg, rgb(var(--color-card)), rgb(var(--color-surface)))",
        "dot-grid":
          "radial-gradient(rgb(var(--color-border) / 0.5) 1px, transparent 1px)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fade: "fade 0.6s ease-out",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-6px)",
          },
        },

        fade: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },
    },
  },

  plugins: [],
};
