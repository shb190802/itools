import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: [{
		file: 'dist/shb-tools.js',
		format: 'umd',
		name: 'shbTools'
	}, {
		file: 'dist/shb-tools.esm.js',
		format: 'esm'
	}],
	plugins: [babel({
		exclude: '**/node_modules/**'
	}), terser()]
}