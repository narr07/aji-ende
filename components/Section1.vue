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
  <div class="px-4 py-24 text-center md:px-10">
    <div>
      <div v-if="nama" class="p-4 rounded-md bg-2 text-3">
        <!-- Hanya tampilkan jika ada nama -->
        <h2>Undangan Kepada</h2>
        <p>{{ nama }}</p>
      </div>
    </div>
    <h2>Waktu Menuju Hari H</h2>
    <p>{{ countdown }}</p>
  </div>
</template>
