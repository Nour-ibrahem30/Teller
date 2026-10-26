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
        // Teller Brand Colors (Provisional - pending CEO confirmation)
        teller: {
          teal: {
            DEFAULT: "#528f92",
            dark: "#18383a",
            light: "#6ba8ab",
          },
          cream: {
            DEFAULT: "#f7f2cf",
            light: "#faf8e8",
            dark: "#e8e2b8",
          },
          orange: {
            DEFAULT: "#e87930",
            light: "#f09050",
            dark: "#c56520",
          },
          brown: {
            DEFAULT: "#a17c61",
            light: "#b99a80",
            dark: "#8a6750",
          },
          ink: "#18383a",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tajawal", "sans-serif"],
        display: ["var(--font-display)", "Tajawal", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
