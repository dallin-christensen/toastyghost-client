/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#fff',
      primary: '#673ab7',
      messageblue: '#09f',
      // violet: colors.violet,
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
