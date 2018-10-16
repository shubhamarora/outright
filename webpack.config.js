const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ['./src/app.scss', './src/app.js'],
  output: {
    filename: 'bundle.js',
  },
  devtool: false,
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          {loader: 'extract-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          }],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|external)/,
      }],
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       uglifyOptions: {
  //         keep_classnames: true,
  //       }
  //     })
  //   ]
  // },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    })
  ]
};