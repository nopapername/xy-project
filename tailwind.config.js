module.exports = {
  purge: {
    content: [
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.less',
      './src/**/*.css',
      './index.html',
    ],
    options: {
      safelist: ['h-32', 'h-64'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
