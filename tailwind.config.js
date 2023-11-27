/** @type {import('tailwindcss').Config} */

const { fontfamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        white: "#fff",
        light_purple: "#8490ff",
      },
    },
    borderWidth: {
      1: "1px",
      2: "2px",
    },
  },
  plugins: [],
};
