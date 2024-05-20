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
      primary: '#0A2B3C', // blue
      secondary: '#D8D0C5', // cream
      tertiary: '#D9832C', // orange
      quaternary: '#6E7C7C', // gray
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0A2B3C', // blue
          secondary: '#D8D0C5', // cream
          accent: '#D9832C', // orange
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
  ],
};
