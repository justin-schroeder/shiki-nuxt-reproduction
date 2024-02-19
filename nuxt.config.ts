// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-shiki'],
  shiki: {
    theme: 'github-light',
    lang: 'typescript'
  },
  devtools: { enabled: true }
})
