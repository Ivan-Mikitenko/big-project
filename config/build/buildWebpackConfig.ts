import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(config: IBuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = config

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(config),
        module: {
            rules: buildLoaders(config),
        },
        resolve: buildResolvers(config),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(config) : undefined,
    }
}
