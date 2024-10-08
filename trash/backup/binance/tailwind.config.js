/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
// const {
//   flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
      },
      colors: {
        // alpha: "#8EBEF6",
        // alpha: "#F7FEFF",
        // beta: "#CFE5FB",
        // gamma: "#8EBEF6",
        alpha: "#000000",
        beta: "#ffffff",
        gamma: "#DEE4E5",
        charlie: "#F7FEFF",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-down": {
          "0%": { opacity: "0", transform: "translateY(-80%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "content-blur": {
          "0%": { filter: "blur(0.3rem)" },
          "100%": { filter: "blur(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    nextui(),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
