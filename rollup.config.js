import path from 'path'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const name = `extension`
const input = path.resolve('src/index.ts')
// eslint-disable-next-line import/no-dynamic-require
const pkg = require(path.resolve(`package.json`))
const packageFormats = {
  umd: {
    file: path.resolve(`dist/${name}.umd.js`),
    format: `umd`,
    name: pkg.ohbug.name,
  },
  es: {
    file: path.resolve(`dist/${name}.es.js`),
    format: `es`,
  },
}

const packageConfigs = Object.keys(packageFormats).map((format) =>
  createConfig(input, packageFormats[format], [], [])
)
if (process.env.NODE_ENV === 'production') {
  Object.keys(packageFormats).forEach((format) => {
    packageConfigs.push(
      createMinifiedConfig(input, packageFormats[format], [], [])
    )
  })
}

export default packageConfigs
