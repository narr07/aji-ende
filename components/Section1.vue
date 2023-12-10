<!-- eslint-disable ts/no-use-before-define -->
<script setup>
const hariH = new Date('2024-01-21')

const countdown = computed(() => {
  const now = new Date()
  const diff = hariH - now
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff - (days * (1000 * 60 * 60 * 24))) / (1000 * 60 * 60))
  const minutes = Math.floor((diff - (days * (1000 * 60 * 60 * 24)) - (hours * (1000 * 60 * 60))) / (1000 * 60))
  const seconds = Math.floor((diff - (days * (1000 * 60 * 60 * 24)) - (hours * (1000 * 60 * 60)) - (minutes * (1000 * 60))) / 1000)

  return `${days} hari, ${hours} jam --- ${minutes} menit, ${seconds} detik`
})

const nama = computed(() => {
  const url = window.location.href

  // Cek apakah string url mengandung karakter #
  const index = url.indexOf('#')

  // Jika tidak, kembalikan nilai default
  const namaLengkap = index === -1 ? defaultNama : url.split('#')[0]

  return decodeURIComponent(namaLengkap.split(' ')[0])
})

const defaultNama = 'Teman-teman'
</script>

<template>
  <div class="px-4 py-24 text-center md:px-10">
    <div>
      <div class="p-4 rounded-md bg-2 text-3">
        <h2>Undangan Kepada</h2>
        <p v-if="nama">
          {{ nama }}
        </p>
        <p v-else>
          Undangan untuk {{ defaultNama }}
        </p>
      </div>
    </div>
    <h2>Waktu Menuju Hari H</h2>
    <p>{{ countdown }}</p>

  </div>
</template>
