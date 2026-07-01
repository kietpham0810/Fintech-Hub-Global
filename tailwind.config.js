/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mysten: {
          black: '#000000',
          white: '#ffffff',
          red: '#FF1F3A',
          dark: '#111111',
          gray: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }
    },
  },
  plugins: [],
}