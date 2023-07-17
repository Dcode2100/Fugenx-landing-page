/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#54ADF3",
        "dark": "#0D0D0D",
        "light": "#F6F6F6",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
      },
      textColor: {
        "primary": "#54ADF3",
        "secondary": "#a7a7a7",
        "tertiary": "#54ADF3"
      }
    },
  },
  plugins: [],
}
