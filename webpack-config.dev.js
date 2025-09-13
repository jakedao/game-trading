const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack-config.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    client: {
      logging: "info",
      overlay: true,
    },
    compress: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: path.join(__dirname, "public/assets/"),
    },
  },
  stats: {
    errorDetails: true,
  },
});
