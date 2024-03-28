import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#222831",
        gray: "#393E46",
        teal: "#00ADB5",
        white: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
