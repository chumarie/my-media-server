// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */


const tekflixPlugin = plugin(
  ({ addUtilities }) => {
    addUtilities({
      '.overlay': {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '100%',
        padding: '15px 15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1
      }
    });
  },
  {
    theme: {
        extend: {
            colors: {
              brand: { DEFAULT: "#ff0068"},
            },
            borderWidth: {
              DEFAULT: '2px',
            },
            borderColor: {
              DEFAULT: "#1c1c20"
            },
            width: {
              sidebar: "180px"
            },
            spacing: { 
              grid: "20px"
            },
            backgroundColor: {
            },
          }
    },
  },
);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [tekflixPlugin],
};