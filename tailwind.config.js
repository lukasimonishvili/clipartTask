/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#585EE3",
        "primary-light": "#F5F8FF",
        "interface-500": "#000000",
        "interface-400": "#1D2D35",
        "interface-300": "#657178",
        "interface-200": "#EFF4F5",
        "interface-100": "#FFFFFF",
      },
      boxShadow: {
        large: "0px 0px 40px 0px #00000014",
        small: "0px 0px 20px 0px #0000001A",
      },
      fontFamily: {
        header: "BPG Banner Caps",
      },
    },
  },
  plugins: [],
};
