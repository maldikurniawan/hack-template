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
        lightGray: "#99CC99",
        lightPurple: "#99FF99",
        lightBlue: "#00FFFF",
        lightRed: "#FF0F0F",
        lightYellow: "#CCFF00",
      },
    },
  },
  plugins: [],
}