// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',

    '@hypernym/nuxt-anime',
    '@nuxtseo/module',
    'nuxt-particles',
    'nuxt-og-image',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
  ],

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
  site: {
    url: 'https://aji-ende.netlify.app/',
    name: 'Aji & Ende',
    description: 'Pernikahan Aji Nurtirtayasa & Ende Nurazizah',
    defaultLocale: 'id',
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
