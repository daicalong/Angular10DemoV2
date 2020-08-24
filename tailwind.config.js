module.exports = {
  purge: {
    enabled: true,
    content:  ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    extend: {
      flex: {
        '1/5': '1 1 20%',
        '1/4': '1 1 25%',
        '1/3': '1 1 33.3%'
      }
    },
  },
  variants: {},
  plugins: [],
}
