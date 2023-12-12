<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.place',
    scale: [0.95, 1],
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  })
})
</script>

<template>
  <div class="p-4 bg-[url('/patt.svg')]  md:bg-[url('/patt-md.svg')] md:bg-cover  pt-16 pb-10 bg-warna2 text-warna1">
    <div data-aos="fade-down" class="flex flex-col items-center justify-center py-10">
      <h2 data-aos="fade-down" class="mb-2 text-3xl font-bold text-center md:text-4xl">
        Lokasi Akad Nikah
      </h2>
      <div>
        <NuxtLink target="_blank " to="https://maps.app.goo.gl/vcxmLE5uwuyJcQvD8">
          <Icon name="fluent:location-24-filled" size="50" class="p-2 rounded-md place bg-warna6" />
        </NuxtLink>
      </div>
    </div>
    <div data-aos="fade-down" class="flex justify-center mx-auto ">
      <iframe class="w-full rounded-md md:w-1/2 h-96" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jl.%20Sawah%20Asem,%20Rajagaluh%20Kidul,%20Majalengka%20Regency,%20West%20Java+(Rumah%20Mempelai%20Wanita)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
    </div>
    <div data-aos="fade-left" class="flex justify-center">
      <img height="300" class="h-96" src="/images/5.png">
    </div>
    <LineSvg data-aos="fade-down" class="w-full mx-auto my-8 rotate-90 md:w-1/3 " />
  </div>
</template>
