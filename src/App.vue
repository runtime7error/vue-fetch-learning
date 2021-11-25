<template>
  <div class="bg-pink-400 h-screen">
    <div>
      <h1 class="text-4xl text-white p-6">Anime Photo Randomizer</h1>
    </div>
    <div class="grid place-items-center w-2/4 h-2/4">
      <div class=" w-64 h-64 grid place-items-center">
        <img style="width: 100%; height: 100%;" class="border-4 border-black" :src=waifuImg>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-52" @click="randomize">
        Randomize
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.randomize();
  },
  data() {
    return {
      waifuImg: '',
    }
  },
  methods: {
    async randomize() {
      const response = await fetch("https://api.waifu.pics/sfw/waifu");
      const data = await response.json();
      this.totalVuePackages = data.total;
      this.waifuImg = data.url;
    },
  }
}
</script>

<style>

</style>