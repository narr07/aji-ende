<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'title',
  description: 'description',
})
</script>

<template>
  <div class="h-full w-full flex items-start justify-start border-solid border-warna2 border-[12px] bg-warna3">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-[80px] p-20 font-black text-left">
          {{ title }}
        </h1>
        <p class="px-20 pb-10 mb-0 text-2xl font-bold">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
