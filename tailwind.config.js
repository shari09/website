const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.vue',
      './src/**/**/*.vue',
    ],
  },
  // defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          lightest: '#F7F8FF',
          light: '#CDC4E7',
          DEFAULT: '#B8ABDE',
          dark: '#AFA2DA',
          darkest: '#9D8CD1',
        },
        blue: {
          light: '#A5B1DA',
          DEFAULT: '#D3D8ED',
          dark: '#8F9DD2',
        },
        magenta: {
          DEFAULT: '#E999C1',
        },
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ['Open Sans', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
