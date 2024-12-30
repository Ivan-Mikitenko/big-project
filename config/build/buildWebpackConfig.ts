import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/config";
import webpack from "webpack";

export function buildWebpackConfig(config: IBuildOptions): webpack.Configuration {
    const {paths, mode} = config

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
  }

}
