const withTs = require("@zeit/next-typescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { ANALYZE } = process.env;

module.exports = withTs(
  withBundleAnalyzer({
    analyzeServer: ["server", "all"].includes(ANALYZE),
    analyzeBrowser: ["browser", "all"].includes(ANALYZE),
    distDir: "build",
    pageExtensions: ["jsx", "js", "tsx", "ts"],
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin());

      config.module.rules.push({
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      });

      config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]?[hash]"
            }
          }
        ]
      });

      return config;
    }
  })
);
