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
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      boxShadow: {
        buttonfocus: '0 0 0 0.2rem rgba(0, 123, 255, 0.5)',
      },
      keyframes: {
        hoversmall: {
          '50%': {
            transform: 'translateY(-2px)',
          },
          '100%': {
            transform: 'translateY(-4px)',
          },
        },
        hovermedium: {
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
        hoverlarge: {
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'hover-small': 'hoversmall 1.5s linear 0.3s infinite alternate',
        'hover-medium': 'hovermedium 1.5s linear 0.3s infinite alternate',
        'hover-large': 'hoverlarge 1.5s linear 0.3s infinite alternate',
      },
    },
  },
  plugins: [],
}
