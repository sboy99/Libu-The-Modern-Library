/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        lexend: "Lexend",
        inter: "Inter",
      },
      backgroundColor: {
        "base-light": "rgb(241 245 249)",
        "base-dark": "rgb(30 41 59)",
        "high-light": "rgb(6 182 212)",
        "high-dark": "rgb(250 204 21)",
      },
      height: {
        "screen-16": "16vh",
        "screen-33": "33vh",
        "screen-50": "50vh",
        "screen-75": "75vh",
        "screen-85": "85vh",
      },
      minHeight: {
        16: "4rem",
        64: "16rem",
        "screen-50": "50vh",
        "screen-75": "75vh",
        "screen-85": "85vh",
        "screen-90": "90vh",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
