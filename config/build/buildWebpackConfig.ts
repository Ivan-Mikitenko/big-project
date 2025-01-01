import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {builldDevServer} from "./builldDevServer";

export function buildWebpackConfig(config: IBuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = config

  return {
      mode,
      entry: paths.entry,
      output: {
          filename: "[name].[contenthash].js",
          path: paths.build,
          clean: true
      },
      plugins: buildPlugins(config),
      module: {
          rules: buildLoaders(),
      },
      resolve: buildResolvers(),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? builldDevServer(config) : undefined,
  }

}
