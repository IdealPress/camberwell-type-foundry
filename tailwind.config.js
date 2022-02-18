const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neue Haas Unica W1G", "Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Angie Sans Std", ...defaultTheme.fontFamily.serif],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              color: "black",
            },
            h1: {
              fontWeight: 600,
            },
            img: {
              maxWidth: "100vw",
              width: "100vw",
              margin: "3rem 0rem 3rem -1.5rem",
            },
          },
        },
        invert: {
          css: {
            p: {
              color: "white",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
