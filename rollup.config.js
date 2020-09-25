import path from 'path'
import { createConfig } from './rollup.config.base'

const pkg = require('./package.json')

const name = pkg.name
const extensionName = pkg.ohbug.name
const input = path.resolve('src/index.ts')
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
const packageFormats = ['esm', 'umd', 'global', 'cjs']

const packageConfigs = [
  createConfig({
    name,
    extensionName,
    input,
    configs,
    packageFormats,
    isProduction: false,
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
    })
  )

export default packageConfigs
