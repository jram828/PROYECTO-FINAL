const { addIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,css}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    colors: {
      primary: '#1D195B', // blue
      secondary: '#D8D0C5', // cream
      tertiary: '#3C63ED', // 
      quaternary: '#6E7C7C', // gray
      white: '#FFFFFF',
      black: '#000000',
      'bg-global': '#FF0000',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1D195B', // blue
          secondary: 'F8F8F8', // cream
          accent: '#3C63ED', // 
          neutral: '#6E7C7C', // gray
          'base-100': '#FFFFFF', // white 
          info: '#6E7C7C', // gray
          success: '#00ff00',
          warning: '#ffff00', // ajustado a amarillo
          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('daisyui'),
    addIconSelectors(['mdi', 'mdi-light']),
  ],
};
