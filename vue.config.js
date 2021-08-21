/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.vue', '...'],
    },
  },
  publicPath: '',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer, tailwindcss],
      },
    },
  },
};
