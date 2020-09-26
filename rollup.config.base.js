import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'

export function createConfig(input, output, plugins = [], external = []) {
  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production',
    tsconfig: path.resolve('tsconfig.json'),
  })
  const extensions = ['.js', '.ts']
  const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
  }

  return {
    input,
    output,
    plugins: [tsPlugin, nodeResolve({ extensions }), commonjs(commonjsOptions), ...plugins],
    external,
  }
}

export function createMinifiedConfig(input, output, plugins = [], external = []) {
  const { terser } = require('rollup-plugin-terser')
  return createConfig(
    input,
    { ...output, file: output.file.replace(/\.js$/, '.min.js') },
    [terser(), ...plugins],
    external
  )
}
