/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#202433',
        'forget': '#FC728B'
      },
      fontSize: {
        'logo': '20px',
        'title': '32px'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundColor: {
        'logo': '#33394F',
        'form': '#202433',
        'field': '#33394F',
        'checked': '#FC728B'
      }
    },
  },
  plugins: [],
}
