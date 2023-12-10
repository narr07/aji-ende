<!-- eslint-disable unused-imports/no-unused-vars -->
<!-- eslint-disable no-console -->
<script setup>
const greetings = ref([])
async function checkConnection() {
  const client = useSupabaseClient()
  try {
    const { data, error } = await client.from('greetings').select('*')

    if (error) {
      console.error('Gagal terkoneksi ke Supabase:', error)
      return false
    }

    return true
  }
  catch (error) {
    console.error('Terjadi kesalahan:', error)
    return false
  }
}

const isConnectedSuccess = ref(false)

// Input fields
const nama = ref('')
const ucapan = ref('')
const hadir = ref('')

async function kirimUcapan() {
  const client = useSupabaseClient() // Deklarasikan variabel client di dalam function

  if (!nama.value || !ucapan.value) {
    console.error('Nama dan Ucapan harus diisi!')
    return
  }

  const { data, error } = await client
    .from('greetings')
    .insert({ nama: nama.value, ucapan: ucapan.value, kehadiran: hadir.value }) // Tambahkan hadir ke data

  if (error) {
    console.error('Gagal mengirim ucapan:', error)
  }
  else {
    console.log('Ucapan berhasil dikirim:', data)
    nama.value = ''
    ucapan.value = ''
    hadir.value = '' // Reset hadir ke default
    greetings.value = await getAllGreetings() // Perbarui greetings
  }
}

const isLoading = ref(false)

async function getAllGreetings() {
  isLoading.value = true
  try {
    const client = useSupabaseClient()
    const { data, error } = await client.from('greetings').select('*').order('id', { ascending: false })

    if (error) {
      console.error('Gagal mengambil data:', error)
      return []
    }

    return data
  }
  finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  const isConnected = await checkConnection()
  isConnectedSuccess.value = isConnected

  if (isConnected)
    greetings.value = await getAllGreetings()
})
</script>

<template>
  <div class="px-2 mx-auto md:px-10">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold">
          Ucapaan Selamat Kepada Mempelai
        </h1>
      </div>
    </div>
    <div class="grid items-center gap-6 mt-12 lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col p-4 border drop-shadow-lg rounded-xl bg-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 class="mb-6 text-xl font-semibold">
          Kirim Ucapan
        </h2>

        <div v-if="isConnectedSuccess">
          <div class="mb-4">
            <label for="nama" class="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              id="nama"
              v-model="nama"
              type="text"
              class="block w-full px-3 py-2 rounded-md shadow-sm form-input focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
            <!-- Pesan kesalahan jika nama kosong -->
            <p v-if="!nama" class="text-red-600">Nama harus diisi!</p>
          </div>

          <div class="mb-4">
            <label for="ucapan" class="block text-sm font-medium text-gray-700">
              Ucapan
            </label>
            <textarea
              id="ucapan"
              v-model="ucapan"
              class="block w-full px-3 py-2 rounded-md shadow-sm form-textarea focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows="5"
            ></textarea>
            <!-- Pesan kesalahan jika ucapan kosong -->
            <p v-if="!ucapan" class="text-red-600">Ucapan harus diisi!</p>
          </div>
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Kehadiran</label>
            <div class="flex items-center space-x-4">
              <input
                id="hadir"
                v-model="hadir"
                type="radio"
                value="Akan Hadir"
                class="text-blue-500 form-radio focus:ring-blue-500"
              >
              <label for="hadir" class="font-medium">Hadir</label>

              <input
                id="tidak-hadir"
                v-model="hadir"
                type="radio"
                value="Tidak Bisa Hadir"
                class="text-red-500 form-radio focus:ring-red-500"
              >
              <label for="tidak-hadir" class="font-medium">Tidak</label>
            </div>
            <!-- Pesan kesalahan jika hadir tidak terpilih -->
            <p v-if="!hadir" class="text-red-600">Pilih kehadiran!</p>
          </div>

          <button
            class="inline-flex items-center px-4 py-2 font-bold text-white rounded-md shadow-sm bg-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="kirimUcapan"
          >
            Kirim Ucapan
          </button>
        </div>
        <div v-else>
          <p class="text-red-600">
            Gagal terkoneksi ke Supabase!
          </p>
        </div>
      </div>
      <div>
        <div v-if="isLoading">
          <p class="text-center">
            Loading...
          </p>
        </div>
        <div v-else-if="isConnectedSuccess">
          <div class="p-2 space-y-2 overflow-y-auto rounded-md h-96 bg-2 scroll-m-1">
            <div v-for="greeting in greetings" :key="greeting.id">
              <div class="p-2 rounded-md bg-4 ">
                <h2>{{ greeting.nama }}</h2>
                <p> {{ greeting.kehadiran }}</p>
                <p>{{ greeting.ucapan }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
