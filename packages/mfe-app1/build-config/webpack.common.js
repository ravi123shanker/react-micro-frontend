const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;
const deps = require("../package.json").dependencies;

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: "app1", // Name of micro-frontend
      library: { type: "var", name: "app1" },
      filename: "remoteEntry.js", // Name of remote entry file
      exposes: { // list of components exposed and source file mapping
        "./App": "/src/App",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] }
      },
    }),
    new HtmlWebpackPlugin({
      title: "App 1",
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3001,
    static: path.resolve(__dirname, "..", "./dist"),
    hot: false,
    liveReload: true,
  },
};