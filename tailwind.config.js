const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { moblg: "370px", ...screens, "4k": "3000px" },
    extend: {
      spacing: {
        marginDesktop: `122px`,
      },
    },
    boxShadow: {
      boxWhite: "11px 11px 0px 1px #FFFFFF",
      boxBlack: "11px 11px 0px 1px #000000",
    },
    colors: {
      green: "#00AD7C",
      grey: "#D7D7D7",
      pink: "#FFCECE",
      yellow: "#FFC621",
      neonYellow: "#FAFF00",
      red: "#F26656",
      blueLight: "#CEE2FF",
      blueDark: "#3F59A8",
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
    },
    fontSize: {
      bodymobile: "18px",
      body: "24px",
      title: "36px",
      title2: "48px",
      titlemobile: "24px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
