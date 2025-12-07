/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      colors: {
        'dark-bg': '#242424',
        'light-bg': '#ffffff',
      },
    },
  },
  plugins: [],
};
