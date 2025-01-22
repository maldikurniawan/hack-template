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
        lightGreen: "#0F0",
        lightGray: "#CCCCCC",
        lightPurple: "#8000FF",
        lightBlue: "#00FFFF",
        lightRed: "#FF0F0F",
        lightYellow: "#CCFF00",
      },
    },
  },
  plugins: [],
}