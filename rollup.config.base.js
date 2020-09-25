import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const tsPlugin = ts({
  check: process.env.NODE_ENV === 'production',
  tsconfig: path.resolve('tsconfig.json'),
})
const extensions = ['.js', '.ts']
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
}

export function createConfig({
  name,
  extensionName,
  input,
  configs,
  packageFormats,
  isProduction = false,
  external = [],
  additionalPlugins = [],
}) {
  const output = packageFormats.map((format) => {
    const target = {
      file: path.resolve(`dist/${name}.${format}${isProduction ? '.prod' : ''}.js`),
      format: configs[format].format,
    }
    if (format === 'umd' || format === 'global') {
      target.name = extensionName
    }
    return target
  })
  const plugins = [
    tsPlugin,
    nodeResolve({ extensions }),
    commonjs(commonjsOptions),
    ...additionalPlugins,
  ]
  if (isProduction) {
    plugins.push(terser())
  }

  return {
    input,
    output,
    plugins,
    external,
  }
}
