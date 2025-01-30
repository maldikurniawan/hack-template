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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        crack: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        flip: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(-1)' },
        },
        'flip-reverse': {
          '0%, 100%': { transform: 'scaleX(-1)' },
          '50%': { transform: 'scaleX(1)' },
        },
        'walk-person': {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(90%)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
        crack: 'crack 0.5s ease-in-out',
        spin: 'spin 10s linear infinite',
        'walk-person': 'walk-person 130s linear infinite',
        'flip-person': 'flip 130s step-end infinite',
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