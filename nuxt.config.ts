// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@hypernym/nuxt-anime',
    'nuxt-particles',
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
