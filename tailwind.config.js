const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const ColorPallet1 = {
  u1: '#171717',
  u2: '#2a3935',
  u3: '#19715c',
  u4: '#47b298',
  u5: '#d3efe9',
};
const ColorPallet2 = {
  m1: '#072440',
  m2: '#0b4470',
  m3: '#0c1521',
  m4: '#576778',
  m5: '#afc0ce',
};
const ColorPallet3 = {
  c1: '#08010e',
  c2: '#4f033d',
  c3: '#ab1858',
  c4: '#bf6382',
  c5: '#f4f4f4',
};



const ColorPallet4 = {
  y1:  '#292b27',
  y2:  '#bbde57',
  y3:  '#768de9',
  y4:  '#f0ebe5',
  y11:  '#0c0d23',
  y12:  '#ab2a35',
  y13:  '#388520',
  y21:  '#f1d1b8',
  y22: '#917BF3',
  y23: '#B3B1F2',
  y24: '#f3e5d7',
  y31: '#113956',
  y32: '#6E8766',
  y33: '#E49E59',
  y34: '#F1E9DC',
  y17: '#FFFFFF',
};

const ColorPallet5 = {
  blk1: '#0c0c0c',
  blk2: '#0b1215',
  blk3: '#0d1717',
  blk4: '#101720',
  blk5: '#171717',
  blk6: '#011222',
  blk7: '#020d19',
};
const ColorPallet6 = {
  wit1: '#fafafa',
  wit2: '#fbfbfb',
  wit3: '#f0f8ff',
  wit4: '#fffff0',
  wit5: '#c7c7c7',
  wit6: '#fffafa',
  wit7: '#f8f8ff',
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Combined content paths
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...ColorPallet1,
        ...ColorPallet2,
        ...ColorPallet3,
        ...ColorPallet4,
        ...ColorPallet5,
        ...ColorPallet6,
      },
      backgroundImage: {
        // Your custom background images
      },
    },
  },
  plugins: [
    addVariablesForColors,
    // Other plugins can go here
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

