<script setup lang="ts">
definePageMeta({
  layout: 'page',
  scrollToTop: false,

})

useSeoMeta({
  title: 'Undangan',
  description: 'Pernikahan Aji Nur Tirtayasa & Ende Nurazizah - Minggu 24 Januari 2024 - Kediaman Mempelai Wanita',
  ogImage: 'https://aji-ende.netlify.app/__og-image__/image/invite/og.png',
  ogUrl: 'https://aji-ende.netlify.app/',
  twitterCard: 'summary_large_image',

})
defineOgImageComponent('BlogPost', {
  title: 'Undangan Pernikahan Aji Nur Tirtayasa & Ende Nurazizah - Minggu 24 Januari 2024 - Kediaman Mempelai Wanita',
  description: 'Rajagaluh Kidul, Kec. Rajagaluh, Kab. Majalengka, Jawa Barat 45472',
})
</script>

<template>
  <div class="overflow-hidden scroll-smooth">
    <NuxtParticles
      id="tsparticles2"
      url="/particles2.json"
    />

    <div class="">
      <Intro />
      <Mempelai id="mempelai" />
      <TanggalTempat id="tanggal" />
      <Lokasi id="lokasi" />
      <Hadiah id="hadiah" />
      <Ucapan id="ucapan" />
    </div>
    <footer class="justify-center w-full pb-32">
      <div class="container flex flex-col items-center justify-center px-5 py-8 mx-auto sm:flex-row">
        <p class="p-2 mt-4 text-lg rounded-sm bg-warna2sm:border-l-2 text-warna1 font-Kreon bg-warna2 sm:border-gray-200 sm:py-2 sm:mt-0">
          © 2023  —
          <NuxtLink to="https://permadi.dev/" class="ml-1 text-warna4" rel="noopener noreferrer" target="_blank">
            @narr07
          </NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>
