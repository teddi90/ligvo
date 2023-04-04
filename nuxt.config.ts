// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ligvo',
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1'
        },
    },
    css: [
        'normalize.css/normalize.css',
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/style/main.scss'
    ],
    script: [
        {
            src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
        }
    ],
    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI,
        },
    }
})
