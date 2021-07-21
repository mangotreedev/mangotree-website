const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "./src/404.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: "./src/blog.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/intro-tailwindcss",
      template: "./src/articles/intro-tailwindcss.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/tinderellas-data-chart-bars",
      template: "./src/articles/tinderellas-data-chart-bars.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/sign-up-linkedin-rails",
      template: "./src/articles/sign-up-linkedin-rails.html",
    }),
    new HtmlWebpackPlugin({
      filename: "resources.html",
      template: "./src/resources.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./resources/bamboosticks",
      template: "./src/resources/bamboosticks.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/algolia-autocomplete-predictions-rails",
      template: "./src/articles/algolia-autocomplete-predictions-rails.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/passing-referral-codes-in-rails",
      template: "./src/articles/passing-referral-codes-in-rails.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/custom-and-vanity-urls-rails",
      template: "./src/articles/custom-and-vanity-urls-rails.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
