// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

const tekflixPlugin = plugin(
  ({ addUtilities }) => {
    addUtilities({});
  },
  {
    theme: {
        extend: {
            colors: {
              brand: { DEFAULT: "#ff0095"},
            },
            borderWidth: {
              DEFAULT: '2px',
            },
            borderColor: {
              DEFAULT: "#1c1c20"
            },
            minWidth: {
              sidebar: "330px"
            },
            spacing: { 
              grid: "20px"
            }
          }
    },
  },
);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tekflixPlugin],
};