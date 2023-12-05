import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#1F1D1D",
        lightGray: "#BFBABA",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
export default config;
