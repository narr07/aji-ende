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
  <div class="h-full w-full flex items-start justify-start border-solid border-[#3F4A3E] border-[12px] bg-[#F1C376]">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col w-full h-full">
        <h1 class="text-[90px] text-[#3F4A3E] p-20 font-black text-left">
          {{ title }}
        </h1>
        <p class="px-20 text-[#606C5D] pb-10 mb-0 text-2xl font-bold">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
