import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImageHome: {
        "greek-busts": "url('/greek-busts-standing-line.png')",
      },
      colors: {
        accentPrimary: "#132226",
        accentSecondary: "#AF8F7B",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        sacramento: ['"Sacramento"', "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
