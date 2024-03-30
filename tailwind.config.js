/** @type {import('tailwindcss').Config} */

const { fontfamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        white: "#fff",
        light_purple: "#8490ff",
        light_cyan: "#62bdfc",
        light_white: "#f9f9ff",
        text_color: "#777777",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/12": "33.33333%",
      },
    },
    borderWidth: {
      1: "1px",
      2: "2px",
    },
    screens: {
      xl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }

      lg: { max: "992px" },
      // => @media (max-width: 992px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "576px" },
      // => @media (max-width: 576px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
