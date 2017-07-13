var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  disable: process.env.NODE_ENV === "development"
});

var loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          [
            "env",
            {
              targets: { browsers: ["last 2 versions", "safari >= 7"] }
            }
          ],
          ["react"]
        ],
        plugins: ["transform-object-rest-spread"]
      }
    }
  },
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ],
      // use style-loader in development
      fallback: "style-loader"
    })
  },
  {
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    loader: "url-loader",
    options: {
      limit: 10000
    }
  }
];

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: {
    home: ["./src/index.js"],
    calendar: ["./src/calendar.js"],
    addevent: ["./src/add-event.js"],
    about: ["./src/about.js"]
  },
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "[name].bundle.js"
    // publicPath: "/dist/",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/dist/"
  },
  module: {
    rules: loaders
  },
  plugins: [
    extractSass
  ]
};
