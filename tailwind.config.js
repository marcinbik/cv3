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
          DEFAULT: '#0867e2',
          50: '#edf9ff',
          100: '#d7f0ff',
          200: '#b8e6ff',
          300: '#87d9ff',
          400: '#4fc2ff',
          500: '#26a3ff',
          600: '#0f85ff',
          700: '#0867e2',
          800: '#0e57bf',
          900: '#124b96',
        },
        accent: {
          DEFAULT: '#214e34',
          50: '#f1f8f3',
          100: '#dcefdf',
          200: '#bcdec4',
          300: '#8fc6a0',
          400: '#5fa877',
          500: '#3e8b5b',
          600: '#2c6f46',
          700: '#23593a',
          800: '#214e34',
          900: '#193b28',
        },
      },
    },
  },
  plugins: [],
}
