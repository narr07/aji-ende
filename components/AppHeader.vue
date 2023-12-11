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
    <div class="max-w-3xl p-2 mx-auto text-white rounded-md bg-warna2">
      <ul class="flex justify-between">
        <li>
          <div>
            <button @click="toggleMusic">
              <Icon :name="musicIcon" />
            </button>
          </div>
        </li>
        <li>
          <div>
            <NuxtLink href="#ucapan">
              Ucapkan Selamat
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
