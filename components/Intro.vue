<script setup>
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.scroll',

    translateY: [0, 20],
    opacity: [0.8, 1],
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
  })
})
</script>

<template>
  <section class="max-w-4xl px-2 mx-auto md:px-14">
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        data-aos="fade-down"
        data-aos-duration="500" class="py-6 px-2 md:px-6 border-2 border-warna2 shadow-lg bg-[url('/badge4.svg')]  rounded-md  bg-center bg-no-repeat  bg-cover"
      >
        <h1
          class="mb-4 text-xl text-center md:text-4xl"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br><br>
          Assalamu'alaikum Warahmatullahi Wabarakatuh
        </h1>

        <p
          class="text-center font-Kreon "
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami. Merupakan suatu kehormatan dan
          kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada
        </p>
      </div>
      <div class="mt-10 scroll">
        <Icon name="ph:arrow-fat-lines-down-duotone" size="54" />
      </div>
    </div>
  </section>
</template>
