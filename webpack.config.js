const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['redux'],
    main: './app'
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 9090,
    hot: true
  }
};
