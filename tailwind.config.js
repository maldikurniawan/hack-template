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
        lightGreen: "#5CED73",
        lightGray: "#B0B0B0",
        lightPurple: "#B05CED",
        lightBlue: "#5CB0ED",
        lightRed: "#ED5C73",
        lightYellow: "#EDDB5C",
      },
    },
  },
  plugins: [],
}