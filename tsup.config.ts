
import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['./src/index.ts'],
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'es2017',
  minify: !options.watch,
}))
