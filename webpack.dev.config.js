const { merge } = require('webpack-merge');

const base = require('./webpack.config.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    static: 'dist',
    compress: true,
    port: 3005,
    hot: true,
  },
});
