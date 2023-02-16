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
          DEFAULT: '#995759',
          50: '#faf7f6',
          100: '#f6efed',
          200: '#eededd',
          300: '#e0c3c1',
          400: '#cf9e9d',
          500: '#ba7a79',
          600: '#995759',
          700: '#87494c',
          800: '#723f43',
          900: '#62393d',
        },
      },
    },
  },
  plugins: [],
}
