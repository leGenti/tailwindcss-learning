module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
