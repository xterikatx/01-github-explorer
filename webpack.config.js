const path = require("path");
const HtmlWebPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [
      new HtmlWebPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
