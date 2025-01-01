import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv} from "./config/build/types/config";
import webpack from "webpack";

export default (env: BuildEnv) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		build: path.resolve(__dirname, 'dist')
	}

	const port = env.port || 3000
	const mode = env.mode || 'development'
	const isDev = env.mode === "development"

	const config: webpack.Configuration = buildWebpackConfig({
		paths,
		port,
		mode,
		isDev
	})

	return config
};
