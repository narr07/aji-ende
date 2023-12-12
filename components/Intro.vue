<script setup>
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '.scroll',
    scale: [0.9, 1],
    translateY: [0, 10],
    opacity: [0.8, 1],
    duration: 500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  })
})
</script>

<template>
  <section class="max-w-4xl px-2 mx-auto md:px-14">
    <div class="flex flex-col items-center justify-center h-screen">
      <div
        data-aos="fade-down"
        data-aos-duration="500" class="p-4 mb-4 rounded-md shadow-md bg-warna3"
      >
        <h1
          class="mb-4 text-3xl text-center md:text-4xl"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <br><br>
          Assalamu'alaikum Warahmatullahi Wabarakatuh
        </h1>

        <p
          class="text-center "
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
    <div class="grid grid-cols-2 p-4 py-6 bg-cover rounded-md shadow-md ring-1 ring-warna2 bg-warna4 md:gap-6">
      <img data-aos="fade-right" class="h-[250px] md:h-[500px] w-full object-contain" src="/images/aji.png" lazyload>
      <div class="text-left">
        <h2 data-aos="fade-left" class="text-lg font-Scripter md:text-2xl">
          Mempelai Pria
        </h2>
        <h2 data-aos="fade-left" class="py-4 text-xl md:text-4xl ">
          Aji Nur Tirtayasa
        </h2>
        <p data-aos="fade-left">
          Kel. Bpk. H. Obay Sobari B (alm) &
          Ibu Hj. N. Arisah / Hj. Isah
        </p>
      </div>
    </div>
    <div class="grid my-16 grid-cols-2 p-4 py-6 rounded-md bg-[url('/badge1.svg')]   bg-center bg-no-repeat items-center border-4 border-warna2 bg-cover  bg-warna4  md:gap-6">
      <div class="pl-4 text-left">
        <h2 data-aos="fade-right" class="text-lg font-Scripter md:text-2xl">
          Mempelai Wanita
        </h2>
        <h2 data-aos="fade-right" class="py-4 text-xl md:text-4xl ">
          Ende Nurazizah
        </h2>
        <p data-aos="fade-right">
          Kel. Bpk. Samhudi (alm) &   Ibu Julaeha (Eha)
        </p>
      </div>
      <img data-aos="fade-left" class="h-[250px] md:h-[500px] w-full object-contain" src="/images/ende.png" lazyload>
    </div>
  </section>
</template>
