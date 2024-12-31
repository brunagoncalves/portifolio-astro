import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "serif", ...defaultTheme.fontFamily.sans],
        secondary: ["Bricolage Grotesque", "serif"],
      },
      colors: {
        zinc: {
          50: "#f5f7fa",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
