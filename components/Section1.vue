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

  return `${days} hari, ${hours} jam --- ${minutes} menit, ${seconds} detik`
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
  <div class="px-4 text-center md:px-10 ">
    <div class="">
      <div class="rounded-md shadow-lg bg-warna4">
        <div class="m-2 py-10 bg-[url('/badge1.svg')]  bg-warna4    bg-center bg-no-repeat bg-contain  ">
          <h2 class="m-4 text-5xl font-bold md:m-5 md:text-6xl font-Sarthane">
            Aji Nur Tirtayasa <br> & <br> Ende Nurazizah
          </h2>
        </div>
      </div>
      <p class="mt-4 text-2xl font-semibold">
        21 Januari 2024
      </p>
    </div>
    <div>
      <div v-if="nama" class="p-4 rounded-md bg-warna2 text-3">
        <!-- Hanya tampilkan jika ada nama -->
        <h2>Undangan Kepada</h2>
        <p>{{ nama }}</p>
      </div>
    </div>
    <h2>Waktu Menuju Hari H</h2>
    <p>{{ countdown }}</p>
  </div>
</template>
