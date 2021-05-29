const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "myBundle",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 1234,
    compress: true,
  },
  devtool: "source-map",
};
