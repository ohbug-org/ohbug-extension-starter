import path from 'path'
import postcss from 'rollup-plugin-postcss'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const name = `ui`
const pkg = require('./package.json')
const extensionName = pkg.ohbug.ui.name
const input = path.resolve(__dirname, 'ui/component.tsx')
const packageFormats = {
  umd: {
    file: path.resolve(`dist/${name}.umd.js`),
    format: `umd`,
    name: extensionName,
    globals: {
      react: 'React',
    },
  },
  esm: {
    file: path.resolve(`dist/${name}.esm.js`),
    format: `es`,
  },
}
const plugins = [
  postcss({
    plugins: [],
  }),
]
const external = ['react']

const packageConfigs = Object.keys(packageFormats).map((format) =>
  createConfig(input, packageFormats[format], plugins, external)
)
if (process.env.NODE_ENV === 'production') {
  Object.keys(packageFormats).forEach((format) => {
    if (format === 'umd' || format === 'esm') {
      packageConfigs.push(createMinifiedConfig(input, packageFormats[format], plugins, external))
    }
  })
}

export default packageConfigs
