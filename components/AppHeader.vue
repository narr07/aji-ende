<script setup>
const isPlaying = ref(false)
let audio

onMounted(() => {
  audio = new Audio('/bs.mp3') // Inisialisasi Audio di sisi client
  // Autoplay musik ketika component dimuat
  audio.play()
  isPlaying.value = true
})

function toggleMusic() {
  if (audio) {
    if (isPlaying.value)
      audio.pause()

    else
      audio.play()

    isPlaying.value = !isPlaying.value
  }
}

onUnmounted(() => {
  // Berhenti memutar musik ketika meninggalkan halaman
  if (audio)
    audio.pause()

  isPlaying.value = false
})

const musicIcon = computed(() => isPlaying.value ? 'pepicons-print:music-note-double-off' : 'pepicons-print:music-note-double-circle-filled')
</script>

<template>
  <div class="fixed z-50 w-full p-2 bottom-6">
    <div class="fixed z-40 top-4 right-2 ">
      <button class="p-2 rounded-md bg-warna7 text-warna1" @click="toggleMusic">
        <Icon size="24" :name="musicIcon" />
      </button>
    </div>
    <div class="flex justify-center">
      <div class="inline-block p-2 mx-auto text-white rounded-md bg-warna6">
        <div class="flex items-center justify-between space-x-4 ">
          <NuxtLink class="p-1 rounded-md bg-warna2" to="#mempelai" scroll>
            <Icon name="twemoji:couple-with-heart-woman-man-light-skin-tone" size="32" />
          </NuxtLink>

          <NuxtLink class="p-1 rounded-md bg-warna2" href="#tanggal" scroll>
            <Icon name="twemoji:spiral-calendar" size="32" />
          </NuxtLink>

          <NuxtLink class="p-1 rounded-md bg-warna2" href="#lokasi" scroll>
            <Icon name="twemoji:world-map" size="32" />
          </NuxtLink>
          <NuxtLink class="p-1 rounded-md bg-warna2" href="#hadiah" scroll>
            <Icon name="twemoji:wrapped-gift" size="32" />
          </NuxtLink>

          <NuxtLink class="p-1 rounded-md bg-warna2" href="#ucapan" scroll>
            <Icon name="twemoji:open-mailbox-with-raised-flag" size="32" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
