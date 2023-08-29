/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
   
    extend: {
      colors: {
        primary: "#54ADF3",
        dark: "#0D0D0D",
        light: "#F6F6F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      textColor: {
        primary: "#54ADF3",
        secondary: "#a7a7a7",
        tertiary: "#54ADF3",
      },
    },
  },
  plugins: [],
};
