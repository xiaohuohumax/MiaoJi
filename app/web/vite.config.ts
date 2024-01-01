import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import vue from '@vitejs/plugin-vue';

function resolve(...paths: string[]) {
    return path.resolve(__dirname, ...paths);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const envDir = 'env';
    const env = loadEnv(mode, envDir);
    return {
        envDir,
        publicDir: resolve('../../public'),
        base: env.VITE_APP_BASE,
        plugins: [
            vue(),
            createHtmlPlugin({
                minify: false,
                pages: [
                    {
                        entry: 'src/main.ts',
                        filename: 'index.html',
                        template: 'index.html',
                        injectOptions: {
                            data: {
                                title: env.VITE_APP_NAME,
                                logingTime: env.VITE_APP_LOADING_TIME
                            }
                        }
                    }
                ]
            })
        ],
        resolve: {
            alias: {
                '@': resolve('src/'),
                '&': resolve('src/components'),
                '#': resolve('./'),
            }
        },
        build: {
            emptyOutDir: true,
            minify: false,
            chunkSizeWarningLimit: 1500,
            outDir: './dist',
            rollupOptions: {
                input: {
                    appConfig: resolve('./app.config.ts')
                },
                output: {
                    entryFileNames({ name, isEntry }) {
                        return isEntry && name === 'appConfig'
                            ? 'app.config.js'
                            : 'assets/[name]-[hash].js';
                    },
                }
            }
        },
        server: {
            port: 8900,
            host: '0.0.0.0',
        }
    };
});
