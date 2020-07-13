import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { builtinModules } from 'module'
import { dependencies } from './package.json'

const { NODE_ENV } = process.env
const prod = NODE_ENV === 'production'

export default {
	input: 'src/cli.js',
	output: {
		file: 'dist/cli.js',
		format: 'cjs',
	},
	external: [...builtinModules, ...Object.keys(dependencies)],
	plugins: [
		json(),
		resolve(),
		commonjs(),
		prod && terser(),
	],
	onwarn: (warning, onwarn) => (
		warning.code === 'CIRCULAR_DEPENDENCY'
		&& /[/\\]@qq[/\\]/.test(warning.message)
	) || onwarn(warning),
}
