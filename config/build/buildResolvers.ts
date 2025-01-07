import {ResolveOptions} from "webpack";
import path from "path";
import {IBuildOptions} from "./types/config";

export function buildResolvers(options: IBuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ['index'],
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@': options.paths.src
            // Utilities: path.resolve(__dirname, 'src'),
        }
    }
}
