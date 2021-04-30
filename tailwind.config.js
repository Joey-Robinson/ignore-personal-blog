module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      dark: "#1a1a1a",
      secondary: "#ffed4a",
      danger: "#e3342f",
      indie: "#4f46e5",
      lightIndie: "#818cf8",
    }),
    textColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
      white: "#fafafa",
      baby: "#1affff",
      lightBlue: "#818cf8",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xxl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
      "7xl": "7rem",
    },
    fontFamily: {
      roboto: "roboto",
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
