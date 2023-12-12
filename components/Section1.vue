<!-- eslint-disable curly -->
<!-- eslint-disable ts/no-use-before-define -->
<script setup>
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
      <h2 class="m-4 text-4xl font-bold md:m-8 md:text-5xl font-Niconne">
        Aji Nur Tirtayasa <br> & <br> Ende Nurazizah
      </h2>
    </div>
    <div class="inline-block p-2 px-4 rounded bg-warna2 text-warna3 ">
      <h2 class="text-xl tracking-widest md:text-3xl">
        21 Januari 2024
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
