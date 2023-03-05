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
          DEFAULT: '#55aaac',
          50: '#f3faf9',
          100: '#d7f0ef',
          200: '#afe0de',
          300: '#7fc9c8',
          400: '#55aaac',
          500: '#3f979b',
          600: '#2d6f74',
          700: '#275b5e',
          800: '#23494c',
          900: '#213d40',
        },
        accent: {
          DEFAULT: '#f5e71a',
          50: '#fdfee8',
          100: '#fafdc4',
          200: '#f9fb8d',
          300: '#f9f54b',
          400: '#f5e71a',
          500: '#e5cd0d',
          600: '#c6a208',
          700: '#9e750a',
          800: '#825c11',
          900: '#6f4b14',
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
