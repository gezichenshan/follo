// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@ant-design-vue/nuxt', '@hebilicious/vue-query-nuxt', '@vueuse/nuxt'],
  css: ['@/assets/css/variables.css', '@/assets/css/reboot.css'],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      title: '叁镜选校系统',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
})
