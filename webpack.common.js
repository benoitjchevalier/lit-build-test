const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

   

module.exports = {
  entry: {
    app: resolve(__dirname, 'demo/src/2elem.js')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: 'scripts/[name].js',
    path: resolve(__dirname, 'dist')
  }
};
