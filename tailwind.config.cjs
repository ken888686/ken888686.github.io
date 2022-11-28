/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        0.5: '0.5',
        5: '5',
      },
    },
  },
  plugins: [],
};
