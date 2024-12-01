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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        //primary: "#0AFF9D",
        //primary: "#38BDF8",
        primary: "#00bfff",
        secondary: "#0b1120",
        tertiary: "#1a233a",
      },
      backgroundColor: {
        //primary: "#0AFF9D",
        //primary: "#38BDF8",
        primary: "#00bfff",
        secondary: "#0b1120",
        tertiary: "#1a233a",
      },
      borderColor: {
        //primary: "#0AFF9D",
        //primary: "#38BDF8",
        primary: "#00bfff",
        secondary: "#0b1120",
        tertiary: "#1a233a",
      },
    },
  },
  plugins: [],
};
export default config;
