var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

loaders.push({
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"]
});

module.exports = {
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  entry: {
    home: [
      'webpack-dev-server/client?http://' + HOST + ":" + PORT,
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    calendar: [
      'webpack-dev-server/client?http://' + HOST + ":" + PORT,
      'webpack/hot/only-dev-server',
      './src/calendar.js'
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  module: {
    loaders
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
};
