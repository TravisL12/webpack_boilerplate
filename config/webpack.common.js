const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      template: "index.html",
    }),
  ],
};