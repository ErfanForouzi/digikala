/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "840px",
      lg: "1070px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      iran_Bold: "iran_Bold",
      iran_Light: "iran_Light",
      iran_Medium: "iran_Medium",
      iran_Regular: "iran_Regular",
    },
    extend: {
      colors: {
        main_digikala: "#ef4056",
        gray: "#ccc",
        gray_light: "#eee",
        text_dark: "#fff",
        bg_dark1: "#242424",
        bg_dark2: "#000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      spacing: {
        4.5: "1.125rem",
        25: "6.25rem",
        30: "7.5rem",
        45: "11.25rem",
        50: "12.5rem",
      },
      keyframes: {
        resNavAnimation: {
          "0%": { width: "0px", opacity: 1 },
          "100%": { width: "100%", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
