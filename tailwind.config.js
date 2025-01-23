/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Anonymous Pro"', 'monospace'],
      },
      colors: {
        lightGreen: "#00FF00",
        lightGray: "#BEBEBE",
        lightPurple: "#9B30FF",
        lightBlue: "#0000FF",
        lightRed: "#FF0000",
        lightYellow: "#FFFF00",
      },
    },
  },
  plugins: [],
}