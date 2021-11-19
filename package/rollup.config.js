import path from 'node:path'
import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

export default [{
  input: 'govuk/all.js',
  context: 'window',
  output: {
    file: 'govuk/assets/govuk-eleventy.min.js',
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonJs(),
    terser(),
    scss({
      failOnError: true,
      includePaths: [
        path.join(__dirname, '../')
      ],
      outputStyle: 'compressed',
      quietDeps: true,
      sourceMap: true,
      verbose: false
    })
  ]
}]
