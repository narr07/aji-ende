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
    '@nuxtjs/google-fonts',
  ],
  image: {
    quality: 90,
    formats: ['webp'],
  },
  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    // download: true,
    // outputDir: "assets",
    // stylePath: "fonts.css",
    // fontsDir: "fonts",
    // overwriting: true,
    // fontsPath: 'fonts',
    families: {
      Redressed: {
        wght: [400],
      },
      Kreon: '300..700',
      Eczar: '400..800',
      Niconne: {
        wght: [400],
      },

    },
  },
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
