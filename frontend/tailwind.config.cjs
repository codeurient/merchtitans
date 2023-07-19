/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0A0D28',
        'rich-yellow': '#F4B913',
        'rich-yellow-2': '#FFB507',
        'light-purple': '#C3BED7',
        'b-price': 'rgba(255, 181, 7, 0.2)',
      }
    },
  },
  plugins: [],
}
