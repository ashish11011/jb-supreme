import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#1b1818",
        "primary-red": "#d92c28",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        comfortaa: ["Comfortaa", "serif"],
        railway: ["Raleway", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
