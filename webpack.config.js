// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
module.exports = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    path: OUTPUT_DIR,
    filename: "[main].[format]",
  },
  // plugins: [new MiniCssExtractPlugin()],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: [MiniCssExtractPlugin.loader, "css-loader"],
  //     },
  //   ],
  // },
};
