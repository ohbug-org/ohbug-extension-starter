import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import ts from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export function createConfig(input, output, plugins = [], external = []) {
  const tsPlugin = ts({
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  })
  const extensions = ['.js', '.ts']
  const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
  }

  return {
    input,
    output,
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV ? 'production' : 'development'
        ),
      }),
      tsPlugin,
      nodeResolve({ extensions }),
      commonjs(commonjsOptions),
      ...plugins,
    ],
    external,
  }
}

export function createMinifiedConfig(
  input,
  output,
  plugins = [],
  external = []
) {
  return createConfig(
    input,
    { ...output, file: output.file.replace(/\.js$/, '.min.js') },
    [...plugins, terser()],
    external
  )
}
