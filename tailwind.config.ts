import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        foreground: "#0f0f10",
        muted: "#a0a0a0",
        border: "#e0e0e0"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

