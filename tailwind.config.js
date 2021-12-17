module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink': '#ffcbdb ',
        'font': '#c6b0d5',
        'button': '#c6b0d5',
        'button-hover': '#ad9bba',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
