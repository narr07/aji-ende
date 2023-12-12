<script setup lang="ts">
definePageMeta({
  layout: 'default',

})

const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.ok',
    scale: [0.9, 1],
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
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
    <div class="pt-10 ok">
      <NuxtLink class="px-2 py-3 rounded-md ring-2 ring-warna2 bg-warna4" to="/invite">
        Buka Undangan
      </NuxtLink>
    </div>
  </div>
</template>
