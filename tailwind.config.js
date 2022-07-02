/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c1': "#003f91",
        'c2': "#5da9e9"
      },
      backgroundImage: {
        'home-bg': "url('./images/home-bg.png')",
        'banner': "url('./images/banner-img.jpeg')"
      }
    },
  },
  plugins: [],
}
