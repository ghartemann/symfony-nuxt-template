import postcss from "postcss";
import tailwindcss from "tailwindcss";

export default defineNuxtConfig({
    app: {
        head: {
            title: 'My Nuxt.js Application!',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'}
            ]
        }
    },
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        }
    },
});
