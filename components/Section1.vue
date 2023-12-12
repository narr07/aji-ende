<!-- eslint-disable curly -->
<!-- eslint-disable ts/no-use-before-define -->
<script setup>
const hariH = new Date('2024-01-21')
const now = ref(new Date())

const countdown = computed(() => {
  const diff = hariH - now.value
  if (diff < 0) {
    return 'Waktu telah berlalu'
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return `${days} hari, ${hours} jam  ${minutes} menit, ${seconds} detik`
})

setInterval(() => {
  now.value = new Date()
}, 1000)

const nama = computed(() => {
  const url = window.location.href
  const index = url.indexOf('#')

  if (index !== -1) {
    const namaLengkap = url.substring(index + 1)
    return decodeURIComponent(namaLengkap)
  }

  return null // Kembali null jika tidak ada nama di URL
})
</script>

<template>
  <div class="px-4 text-center ">
    <div class="m-2  py-10 bg-[url('/badge.svg')]   bg-center bg-no-repeat  bg-contain">
      <h2 class="m-4 text-5xl font-bold md:m-5 md:text-6xl font-Kreon">
        Aji Nur Tirtayasa <br> & <br> Ende Nurazizah
      </h2>
    </div>
    <div class="inline-block p-4 my-2 rounded bg-warna2 text-warna1 ">
      <h2 class="text-lg tracking-widest md:text-3xl">
        21 Januari 2024
      </h2>
      <h2 class="mt-2 text-lg font-Eczar md:text-2xl">
        {{ countdown }}
      </h2>
    </div>
    <div class="my-4 rounded-md ">
      <div v-if="nama" class="inline-block p-2 px-10 bg-white rounded-md shadow-md">
        <!-- Hanya tampilkan jika ada nama -->
        <p class="text-sm">
          Kepada:
        </p>
        <h2 class="text-xl md:text-2xl">
          {{ nama }}
        </h2>
      </div>
    </div>
    <p class="text-sm">
      Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
    </p>
  </div>
</template>
