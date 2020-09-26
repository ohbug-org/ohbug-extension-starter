import path from 'path'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const name = `index`
const pkg = require('./package.json')
const extensionName = pkg.ohbug.name
const input = path.resolve('src/index.ts')
const packageFormats = {
  umd: {
    file: path.resolve(`dist/${name}.umd.js`),
    format: `umd`,
    name: extensionName,
  },
  esm: {
    file: path.resolve(`dist/${name}.esm.js`),
    format: `es`,
  },
  cjs: {
    file: path.resolve(`dist/${name}.cjs.js`),
    format: `cjs`,
  },
}

const packageConfigs = Object.keys(packageFormats).map((format) =>
  createConfig(input, packageFormats[format], [], [])
)
if (process.env.NODE_ENV === 'production') {
  Object.keys(packageFormats).forEach((format) => {
    if (format === 'umd' || format === 'esm') {
      packageConfigs.push(createMinifiedConfig(input, packageFormats[format], [], []))
    }
  })
}

export default packageConfigs
