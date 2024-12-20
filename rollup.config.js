import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeExternals } from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser';
export default defineConfig({
    input: { index: 'src/index.ts' },
    output: {
        dir: 'dist',
        // file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [

        resolve(),
        nodeExternals({
            devDeps: true,
        }),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        json(),
        terser()
    ]
});