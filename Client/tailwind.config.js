/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './Client/src/**/*.html',
    './Client/src/**/*.js',
    './Client/src/**/*.jsx',
  ],
  theme: {
    colors: {
      'blue': '#0A2B3C',
      'cream': '#D8D0C5',
      'orange': '#D9832C',
      'gray': '#6E7C7C',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  plugins: [],
  },
}
