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
  theme: {
    extend: {
      colors: {
        text: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          accent: withOpacity("--color-text-accent"),
          "accent-hover": withOpacity("--color-text-accent-hover"),
        },
        border: {
          base: withOpacity("--color-border-base"),
        },
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
          deep: withOpacity("--color-fill-bg"),
          muted: withOpacity("--color-fill-muted"),
          inverted: withOpacity("--color-fill-inverted"),
          accent: withOpacity("--color-fill-accent"),
          pop: withOpacity("--color-fill-pop"),
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
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
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
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      keyframes: {
        pokeLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "poke-left": "pokeLeft 1s ease-in-out infinite alternate",
        "bg-shift": "gradient 15s ease infinite alternate",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
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
          "bg-dot": (value) => ({
            backgroundImage: `radial-gradient(${value} 2px, transparent 2px), radial-gradient(${value} 2px, transparent 2px)`,
            backgroundSize: `44px 44px`,
            backgroundPosition: `0 0, 22px 22px`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
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
