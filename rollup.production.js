import { version } from './package.json';
import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
export default {
        input: './src/PadlersApp.ts',
        // eslint-disable-next-line
        onwarn: function(warning, warn) {},
        plugins: [
            clear({ targets: ['public'] }),
            resolve(),
            copy({
                targets: [
                    { src: 'assets/fonts/**.*', dest: 'public/fonts' },
                    { src: 'assets/profile/**.*', dest: 'public/profile' },
                    { src: 'assets/production/icons/**.*', dest: 'public/icons' },
                    {
                        src: 'assets/production/**.*',
                        dest: 'public',
                        transform: (contents) => contents.toString().replace('{{version}}', version).replace('{{version}}', version)
                    }
                ]
            }),
            typescript(),
            strip({ include: '**/*.ts' }),
            filesize({ showBrotliSize: true })
        ],
        output: [{
                entryFileNames: '[name].' + version + '.es2019.js',
                dir: './public/',
                format: 'esm',
                plugins: [
                    esbuild({
                        minify: true,
                        target: 'esnext'
                    })
                ]
            }
        ]
    };
