import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          900: "#15311F",
          700: "#225234",
          500: "#2F6B43",
        },
        lime: {
          DEFAULT: "#A9D85B",
          deep: "#7FB13C",
        },
        sand: {
          DEFAULT: "#F4F1E6",
          2: "#EAE5D4",
        },
        ink: "#16201A",
        muted: "#5A6B5E",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,32,26,0.06), 0 8px 24px rgba(22,32,26,0.08)",
        lift: "0 12px 32px rgba(22,32,26,0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
