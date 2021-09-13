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
      filename: "./blog/intro-tailwindcss.html",
      template: "./src/articles/intro-tailwindcss.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/tinderellas-data-chart-bars.html",
      template: "./src/articles/tinderellas-data-chart-bars.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/sign-up-linkedin-rails.html",
      template: "./src/articles/sign-up-linkedin-rails.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "resources.html",
      template: "./src/resources.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./resources/bamboosticks.html",
      template: "./src/resources/bamboosticks.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/algolia-autocomplete-predictions-rails.html",
      template: "./src/articles/algolia-autocomplete-predictions-rails.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/passing-referral-codes-in-rails.html",
      template: "./src/articles/passing-referral-codes-in-rails.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./blog/custom-and-vanity-urls-rails.html",
      template: "./src/articles/custom-and-vanity-urls-rails.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./resources/gradient-hover-effect.html",
      template: "./src/resources/gradient-hover-effect.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: "./resources/flippable-card.html",
      template: "./src/resources/flippable-card.html",
      minify: false,
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
