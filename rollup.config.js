// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
	input: './index.ts',
	output: [
		{
			// 给html项目使用
			file: './dist/kurisu.umd.min.js',
			name: 'kurisu',
			format: 'umd',
		},
		{
			// 给工程化项目使用
			file: './dist/kurisu.es.min.js',
			format: 'es',
		},
	],
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**', // 只编译我们的源代码
		}),
	],
}
