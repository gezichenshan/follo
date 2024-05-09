// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@ant-design-vue/nuxt'],
})
