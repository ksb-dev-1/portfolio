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
        primary: "#1DA1F2",
        secondary: "#171717",
        tertiary: "#444",
      },
      backgroundColor: {
        //primary: "#0AFF9D",
        //primary: "#38BDF8",
        primary: "#1DA1F2",
        secondary: "#171717",
        tertiary: "#444",
      },
      borderColor: {
        //primary: "#0AFF9D",
        //primary: "#38BDF8",
        primary: "#1DA1F2",
        secondary: "#171717",
        tertiary: "#444",
      },
    },
  },
  plugins: [],
};
export default config;
