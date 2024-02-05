export default defineNuxtConfig({
    app: {
        head: {
            title: 'Symfony Nuxt template', // TODO: changer ça
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ]
        },
    },
    ssr: true,
    telemetry: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    edge: {
        middleware: {
            '/api': '~/middleware/api.js'
        }
    }
});
