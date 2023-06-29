/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hauora', 'sans-serif'],
      },
      colors: {
        'grayish-blue': '#444651',
        'very-light-gray': '#e5e5e5',
        'light-gray': '#cccccc',
        'vivid-blue': '#31caff',
        'strong-blue': '#009ed8',
      },
    },
  },
  plugins: [],
};
