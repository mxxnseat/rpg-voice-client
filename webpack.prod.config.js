const { merge } = require('webpack-merge');
const path = require('path');

const base = require('./webpack.config.js');

module.exports = merge(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.prod.json'),
        },
      },
    ],
  },
});
