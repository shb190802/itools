import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: [{
		file: 'dist/i-libs.js',
		format: 'umd',
		name: 'iLibs'
	}, {
		file: 'dist/i-libs.esm.js',
		format: 'esm'
	}],
	plugins: [babel({
		exclude: '**/node_modules/**'
	}), terser()]
}