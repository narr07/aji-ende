<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.tanggal',
    scale: [0.9, 1],
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  })
})
</script>

<template>
  <div class="pt-6 bg-[url('/patt.svg')]  md:bg-[url('/patt-md.svg')] md:bg-cover  mt-10 bg-warna2 text-warna1 ">
    <div class="max-w-4xl px-2 mx-auto">
      <LineSvg data-aos="fade-down" class="w-full mx-auto mb-8 md:w-1/2" />
      <h2 data-aos="fade-down" class="text-3xl font-bold text-center md:text-4xl">
        Save The Date
      </h2>
      <div class="grid items-center gap-2 mt-4 md:grid-cols-2">
        <div data-aos="fade-down" class="inline-block">
          <div class="flex justify-center w-full my-10 ">
            <NuxtLink
              target="_blank"
              to="https://calendar.google.com/calendar/event?action=TEMPLATE&dates=20240121T063055%2F20240121T163055&text=Pernikahan+Aji+dan+Ende&location=Rajagaluh+Kidul%2C+Rajagaluh%2C+Majalengka+Regency%2C+West+Java%2C+Indonesia"
              class="items-center justify-center inline-block p-6 mx-auto rounded-md shadow-md tanggal bg-warna6"
            >
              <div class="flex flex-col justify-center">
                <h3 class="p-2 pb-2 mb-2 text-2xl font-bold tracking-wide text-center border-2 rounded-md md:text-3xl">
                  Minggu <br>
                  <span>
                    21 Januari 2024
                  </span>
                </h3>
                <h3 class="text-xl font-bold text-center md:text-2xl">
                  08.00 - 16.00 WIB
                </h3>
                <Icon
                  class="flex justify-center mx-auto my-4" name="fluent-emoji-high-contrast:spiral-calendar"
                  size="50"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div data-aos="fade-down">
          <img height="300" class="h-96" src="/images/2.png">
        </div>
      </div>
    </div>
  </div>
</template>
