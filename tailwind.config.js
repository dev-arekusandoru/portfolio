/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sd: "350px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "740px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      ...colors,
      bone: "#D7D9CE",
      lightgreen: "#6F8C75",
      midgreen: "#4A5E4E",
      darkgreen: "#062600"
    }
  },
  plugins: [require("tailwind-scrollbar-hide")]
};
