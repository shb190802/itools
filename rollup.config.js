import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: [{
		file: 'dist/itools.js',
		format: 'umd',
		name: 'iTools'
	}, {
		file: 'dist/itools.esm.js',
		format: 'esm'
	}],
	plugins: [babel({
		exclude: '**/node_modules/**'
	}), terser()]
}