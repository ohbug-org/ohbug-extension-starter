import path from 'path'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const name = `extension`
const input = path.resolve('src/index.ts')
const packageFormats = {
  es: {
    file: path.resolve(`dist/${name}.es.js`),
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
    packageConfigs.push(
      createMinifiedConfig(input, packageFormats[format], [], [])
    )
  })
}

export default packageConfigs
