import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const input = 'src/index.ts'

const buildConfig = defineConfig({
  input,
  output: [
    {
      format: 'cjs',
      dir: 'dist/cjs',
      entryFileNames: '[name].js',
    },
    {
      format: 'esm',
      dir: 'dist/esm',
      entryFileNames: '[name].js',
    },
  ],
  plugins: [esbuild(), resolve()],
})

const dstConfig = defineConfig({
  input,
  output: {
    format: 'esm',
    dir: 'dist',
  },
  plugins: [esbuild(), dts(), resolve()],
})

export default [buildConfig, dstConfig]
