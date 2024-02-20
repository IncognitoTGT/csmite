import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-inconsolata)"],
      },
    },
  },
  plugins: [
    catppuccin({
      prefix: false,
    }),
  ],
};

export default config;
