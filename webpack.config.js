const path = require('path');
const {
  exec,
} = require('child_process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    './src/index.jsx',
    './src/scss/styles.scss',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react',
          ],
        },
      },
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            url: false,
          },
        }, {
          loader: 'sass-loader',
        }],
      }),
    }],
  },
  // resolve: {
  //     modules: [
  //         'node_modules',
  //         path.resolve(__dirname, './src/components'),
  //         path.resolve(__dirname, './src/containers')
  //     ]
  // },
  plugins: [
    // eslint-disable-next-line func-names
    function () {
      this.plugin('done', (stats) => {
        if (typeof stats.compilation.errors !== 'undefined' && stats.compilation.errors.length > 0) {
          exec(`open -a ${process.env.TERM_PROGRAM}`);
        }
      });
    },
    new WebpackNotifierPlugin({
      alwaysNotify: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
  ],
};
