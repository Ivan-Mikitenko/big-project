import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IBuildOptions, IBuildPaths} from "./types/config";

export function buildPlugins({paths}: IBuildOptions): webpack.ProgressPlugin[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}
