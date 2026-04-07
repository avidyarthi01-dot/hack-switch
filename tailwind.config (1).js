/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald': {
          DEFAULT: '#10b981',
          hover: '#059669',
        },
        'dark': {
          900: '#09090b', // Deep black
          800: '#18181b', // Slightly lighter panel
          700: '#27272a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
