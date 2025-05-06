import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                maximumFileSizeToCacheInBytes: 5000000, // Увеличиваем лимит до 5 МБ
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,ttf}'],
                // Дополнительные настройки для оптимизации
                runtimeCaching: [
                    {
                        urlPattern: ({request}) =>
                            request.destination === 'script',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'scripts',
                            expiration: {
                                maxEntries: 30,
                                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 дней
                            },
                        },
                    },
                ],
            },
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'mask-icon.svg',
            ],
            manifest: {
                name: 'Экоконтроль',
                short_name: 'Экоконтроль',
                description: 'Экоконтроль - услуги по работе со септиками',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'web-app-manifest-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'web-app-manifest-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
});
