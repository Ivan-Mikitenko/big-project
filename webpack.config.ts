import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildOptions} from "./config/build/types/config";

const options: IBuildOptions = {
	paths: {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		build: path.resolve(__dirname, 'dist')
	},
	mode: 'development'
}

const config = buildWebpackConfig(options)

export default config;
