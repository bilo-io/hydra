const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      // test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      // use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
      include: path.resolve(__dirname, "../src/"),
    });

    // Return the altered config
    return config;
  },
};
