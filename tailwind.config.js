const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#01001F',
        darkred: '#2E0605',
        darkgreen: '#1A3915',
        darkgray: '#353e43',
        darkmagenta: '#180018',
        darkorange: '#421d16',
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()],
}