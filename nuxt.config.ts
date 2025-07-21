// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    ssr: true,
    build: {
        transpile: ['vuetify']
    },
    css: ['vuetify/styles'],
    plugins: ['/plugins/vuetify.ts']

})
