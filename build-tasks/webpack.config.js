const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js', // bundle's entry point
  output: {
    path: path.resolve(__dirname, '../dist'), // output directory
    filename: '[name].js', // name of the generated bundle
  },
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*.php', 'src/**/*.html', 'public/**/*'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src', 'index.html'),
      // template: './src/index.html',
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      // eslint-disable-next-line no-restricted-globals
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
