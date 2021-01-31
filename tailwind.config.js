const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
        blueGray: colors.blueGray,
        Cyan: colors.cyan,
        Emerald: colors.emerald,
        lightblue: colors.lightBlue,
      },
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mountain': "url('/src/imgs/mountain.jpg')",
        'water': "url('/src/imgs/water.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
