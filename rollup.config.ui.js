import path from 'path'
import postcss from 'rollup-plugin-postcss'
import { createConfig } from './rollup.config.base'

const pkg = require('./package.json')

const name = pkg.name
const extensionName = pkg.ohbug.ui.name
const input = path.resolve(__dirname, 'ui/component.tsx')
const configs = {
  esm: {
    format: `es`,
  },
  umd: {
    format: `umd`,
  },
  global: {
    format: `iife`,
  },
  cjs: {
    format: `cjs`,
  },
}
const packageFormats = ['umd']
const external = ['react']
const additionalPlugins = [
  postcss({
    plugins: [],
  }),
]

const packageConfigs = [
  createConfig({
    name,
    extensionName,
    input,
    configs,
    packageFormats,
    isProduction: false,
    external,
    additionalPlugins,
  }),
]
if (process.env.NODE_ENV === 'production')
  packageConfigs.push(
    createConfig({
      name,
      extensionName,
      input,
      configs,
      packageFormats,
      isProduction: true,
      external,
      additionalPlugins,
    })
  )

export default packageConfigs
