// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: true},
  ssr: false,
  app: {
    baseURL: '/my-portfolio/',
    buildAssetsDir: 'assets'
  },
  build: {
    transpile: ['vuetify']
  },
  css: ['vuetify/styles'],
  plugins: ['/plugins/vuetify.ts']
});
