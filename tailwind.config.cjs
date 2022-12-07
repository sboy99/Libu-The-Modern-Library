const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const withOpacity =
  (variable) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}),${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "base-light": colors.slate[100],
        "base-dark": colors.slate[900],

        "light-bg": colors.white,
        "dark-bg": colors.slate[700],
        "light-bg-deep": colors.slate[100],
        "dark-bg-deep": colors.slate[800],
        "light-bg-hover": colors.slate[200],
        "dark-bg-hover": colors.slate[600],
        "light-bg-accent": colors.cyan[500],
        "dark-bg-accent": colors.yellow[400],

        "light-text": colors.slate[700],
        "dark-text": colors.white,
        "light-text-p": colors.slate[500],
        "dark-text-p": colors.slate[300],
        "light-text-accent": colors.cyan[500],
        "dark-text-accent": colors.yellow[400],

        "placeholder-light": colors.slate[500],
        "placeholder-dark": colors.slate[400],

        "light-border": colors.slate[200],
        "dark-border": colors.slate[700],

        "light-divide": colors.slate[300],
        "dark-divide": colors.slate[500],

        "light-ring": colors.cyan[500],
        "dark-ring": colors.yellow[500],

        cancle: colors.rose[600],
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          accent: withOpacity("--color-text-accent"),
          "accent-hover": withOpacity("--color-text-accent-hover"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-fill"),
          muted: withOpacity("--color-fill-muted"),
          inverted: withOpacity("--color-fill-inverted"),
          accent: withOpacity("--color-fill-accent"),
        },
        btn: {
          accent: withOpacity("--color-button-accent"),
          "accent-hover": withOpacity("--color-button-accent-hover"),
          "accent-muted": withOpacity("--color-button-accent-muted"),
          classic: withOpacity("--color-button-classic"),
          "classic-hover": withOpacity("--color-button-classic-hover"),
          "classic-muted": withOpacity("--color-button-classic-muted"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-border-base"),
          accent: withOpacity("--color-border-accent"),
        },
      },
      ringColor: {
        skin: {
          base: withOpacity("--color-ring-base"),
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code VF", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        "ubuntu-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
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
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
