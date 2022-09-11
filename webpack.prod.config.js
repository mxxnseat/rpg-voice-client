const { merge } = require('webpack-merge');

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
          configFile: 'tsconfig.build.json',
        },
      },
    ],
  },
});
