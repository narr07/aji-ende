<script setup lang="ts">
definePageMeta({
  layout: 'default',

})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="absolute z-40 top-2 left-2">
      masih dalam proses ....
    </p>

    <div class="">
      <h1 class="text-3xl md:text-4xl ">
        The Wedding of
      </h1>
    </div>
    <Section1 />
    <div class="pt-10">
      <NuxtLink class="px-2 py-3 rounded-md ring-2 ring-warna2 bg-warna4" to="/invite">
        Buka Undangan
      </NuxtLink>
    </div>
  </div>
</template>
