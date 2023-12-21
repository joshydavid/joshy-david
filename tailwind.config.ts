import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    logs: false,
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#1F1D1D",
        lightGray: "#E8E8E8",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
export default config;
