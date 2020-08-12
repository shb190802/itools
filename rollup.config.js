/*
 * @Author: suo
 * @Date: 2020-08-12 16:01:02
 * @LastEditTime: 2020-08-12 16:13:07
 * @LastEditors: suo
 * @Description: 
 */
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

module.exports = {
	input: 'src/index.js',
	output: [{
		file: 'dist/s-tools.js',
		format: 'umd',
		name: 'sTools'
	}, {
		file: 'dist/s-tools.esm.js',
		format: 'esm'
	}],
	plugins: [babel({
		exclude: '**/node_modules/**'
	})]
}