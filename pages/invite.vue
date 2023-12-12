<script setup lang="ts">
definePageMeta({
  layout: 'page',
  scrollToTop: true,

})
</script>

<template>
  <div class="scroll-smooth">
    <NuxtParticles
      id="tsparticles2"
      url="/particles2.json"
    />
    <div class="">
      <Intro id="mempelai" />
      <div data-aos="fade-right">
        <Ucapan id="ucapan" />
      </div>
    </div>
  </div>
</template>
