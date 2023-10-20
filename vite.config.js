import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/

// Load env file based on `mode` in the current working directory.
// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
let env = loadEnv('string', process.cwd(), '');

export default defineConfig({


	plugins: [vue(), eslintPlugin()],

	resolve: {
		alias: {
			// '@': path.resolve(__dirname, '/src'),
			// alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
		__APP_ENV__: env.APP_ENV,
	},
});
