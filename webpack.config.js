var path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

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
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
};
