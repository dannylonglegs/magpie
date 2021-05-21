module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        marginDesktop: `122px`,
      },
    },
    colors: {
      green: "#CEFFD6",
      grey: "#D7D7D7",
      pink: "#FFCECE",
      yellow: "#FFF4CE",
      neonYellow: "#FAFF00",
      blueLight: "#CEE2FF",
      blueDark: "#0047FF",
      white: "#FFFFFF",
    },
    fontSize: {
      body: "24px",
      title: "36px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
