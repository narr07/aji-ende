<script setup>
const hariH = new Date('2024-01-21')
const now = ref(new Date())

const countdown = computed(() => {
  const diff = hariH - now.value
  if (diff < 0)
    return 'Waktu telah berlalu'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})

setInterval(() => {
  now.value = new Date()
}, 1000)
</script>

<template>
  <div class="flex items-center justify-center my-2 space-x-4">
    <div class="flex flex-col p-1 px-4 text-lg font-extrabold rounded-md md:text-2xl bg-warna1 text-warna2">
      {{ countdown.days }}
      <div class="-mt-1 text-sm font-normal ">
        Hari
      </div>
    </div>
    <div class="flex flex-row p-1 px-3 space-x-4 text-lg font-extrabold rounded-md md:text-2xl bg-warna1 text-warna2">
      <div class="flex flex-col">
        <div>
          {{ countdown.hours }}
        </div>
        <div class="-mt-1 text-sm font-normal ">
          Jam
        </div>
      </div>
      <div class="flex flex-col">
        <div>
          {{ countdown.minutes }}
        </div>
        <div class="-mt-1 text-sm font-normal ">
          Menit
        </div>
      </div>
      <div class="flex flex-col">
        <div>
          {{ countdown.seconds }}
        </div>
        <div class="-mt-1 text-sm font-normal ">
          Detik
        </div>
      </div>
    </div>
  </div>
</template>
