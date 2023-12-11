<script setup lang="ts">
definePageMeta({
  layout: 'default',

})
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.btn',
    scale: [0.9, 1],
    direction: 'alternate',
    loop: true,
  })
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <NuxtParticles
      id="tsparticles2"
      url="/particles.json"
    />
    <div class="mx-auto">
      <h1 class="text-3xl md:text-4xl ">
        The Wedding of
      </h1>
    </div>
    <div>
      <Section1 />
    </div>
    <div class="pt-10 btn">
      <NuxtLink class="px-2 py-3 rounded-md ring-2 ring-warna2 bg-warna4" to="/invite">
        Buka Undangan
      </NuxtLink>
    </div>
  </div>
</template>
