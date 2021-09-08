import path from 'path'
import postcss from 'rollup-plugin-postcss'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const name = `ui`
const input = path.resolve(__dirname, 'ui/index.ts')
const packageFormats = {
  es: {
    file: path.resolve(`dist/${name}.es.js`),
    format: `es`,
  },
}
const plugins = [
  postcss({
    plugins: [],
  }),
]
const external = []

const packageConfigs = Object.keys(packageFormats).map((format) =>
  createConfig(input, packageFormats[format], plugins, external)
)
if (process.env.NODE_ENV === 'production') {
  Object.keys(packageFormats).forEach((format) => {
    packageConfigs.push(
      createMinifiedConfig(input, packageFormats[format], plugins, external)
    )
  })
}

export default packageConfigs
