// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ligvo',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        },
    },
    css: [
        // 'normalize.css/normalize.css',
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/style/main.scss'
    ],
    script: [
        {
            src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
        }
    ],
    plugins: [
        // '~/plugins/vee-validate.js',
    ],
    modules: [
        'nuxt-mapbox'
    ],
    mapbox: {
        accessToken: 'pk.eyJ1IjoidGVkZGk5MCIsImEiOiJjbGxna2pyZGsxNXNsM2ZtZ2g5ZHlidWoxIn0.DKa2sXY_Qofpm1pAmlQktg'
    },
    build: {
        transpile: ["vee-validate"],
    },
    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI,
        },
    },
})
