/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6d8182',
          50: '#f6f7f7',
          100: '#e0e7e6',
          200: '#c1cecd',
          300: '#9badad',
          400: '#6d8182',
          500: '#5b6f71',
          600: '#485759',
          700: '#3c4849',
          800: '#323c3d',
          900: '#2d3334',
        },
        accent: {
          DEFAULT: '#fa7d55',
          50: '#fff3ed',
          100: '#ffe4d5',
          200: '#fdc6ab',
          300: '#fc9e75',
          400: '#fa7d55',
          500: '#f74518',
          600: '#e82c0e',
          700: '#c01d0e',
          800: '#991913',
          900: '#7b1713',
        },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      variants: {
        animation: ['motion-safe'],
      },
    },
  },

  plugins: [],
}
