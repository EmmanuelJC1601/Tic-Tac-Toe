/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'yellow': {
        100: "#F2B137",
        200: "#FFC860"
      },
      'gray': {
        100: "#1A2A33",
        200: "#1F3641",
        300: "#A8BFC9"
      },
      'white': {
        100: "#DBE8ED"
      },
      'blue': {
        100: "31C3BD",
        200: "#65E9E4"
      }
    },
    extend: {
      backgroundImage: {
        'icon-o-outline': 'url("./assets/icons/icon-o-outline.svg")',
        'icon-o': 'url("./assets/icons/icon-o.svg")',
        'icon-restart': 'url("./assets/icons/icon-restart.svg")',
        'icon-x-outline': 'url("./assets/icons/icon-x-outline.svg")',
        'icon-x': 'url("./assets/icons/icon-x.svg")',
        'logo': 'url("./assets/icons/lofo.svg")',
      }
    },
  },
  plugins: [
    require("./src/theme/image.js")
  ],
}
