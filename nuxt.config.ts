// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@hypernym/nuxt-anime',
    'nuxt-particles',
    'nuxt-icon',
  ],
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: ['/invite'],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    viewer: false,
  },
})
