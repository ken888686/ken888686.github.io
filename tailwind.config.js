module.exports = {
  daisyui: {
    themes: ['garden'],
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
