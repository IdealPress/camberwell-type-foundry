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
        serif: ["Gray Medium", "Angie Sans Std", ...defaultTheme.fontFamily.serif],
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
              width: "calc(100vw - 4rem)",
              margin: "3rem 0rem 3rem 0",
            },
          },
        },
        invert: {
          css: {
            p: {
              color: "white",
            },
            ul: {
              color: "white",
            },
            li: {
              color: "white"
            }
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require('tailwind-scrollbar')
  ],
};
