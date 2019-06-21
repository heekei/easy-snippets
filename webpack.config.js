const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  node: {},
  entry: './src/index.js',
  output: {
    filename: 'easy-snippets.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'easySnippets',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'easy-snippets',
    // })
  ]
};