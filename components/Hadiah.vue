<script setup>
const noAji = '0429375292' // Replace with actual number
const noEnde = '1436190317' // Replace with actual number
const clipboard = useClipboard()

async function copyAji() {
  await clipboard.copy(noAji)
  console.log('Nomor rekening 0429375292 berhasil disalin!')
}
async function copyEnde() {
  await clipboard.copy(noEnde)
  console.log('Nomor rekening 1436190317 berhasil disalin!')
}
</script>

<template>
  <div>
    <section class="max-w-4xl px-2 mx-auto body-font">
      <div class="container px-5 py-24 mx-auto">
        <h2 class="py-4 text-xl text-center md:text-3xl">
          Gift Untuk  Mempelai
        </h2>
        <div class="grid gap-6 -mx-4 text-center md:grid-cols-2">
          <div class="">
            <div class="py-4 text-xl rounded-md ring-2 ring-warna2 md:text-3xl bg-warna4">
              BNI
              <br>
              0429375292
              <br>
              Aji Nur Tirtayasa
            </div>
            <button class="px-4 py-2 mt-4 text-xl font-bold text-white rounded-md bg-warna2" @click="copyAji">
              Salin
            </button>
          </div>
          <div class="">
            <div class="py-4 text-xl rounded-md ring-2 ring-warna2 md:text-3xl bg-warna4">
              BNI
              <br>
              1436190317
              <br>
              Ende Nurazizah
            </div>
            <button class="px-4 py-2 mt-4 text-xl font-bold text-white rounded-md bg-warna2" @click="copyEnde">
              Salin
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
