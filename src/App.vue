<template>
  <div class="bg-pink  h-screen">
    <!-- Title -->
    <div>
      <h1 class="text-4xl outline outline-offset-2 outline-4 text-font p-6 ">Anime Photo Randomizer</h1>
    </div>

    <!-- Anime Photo -->
    <div class="grid place-items-center w-2/4 h-2/4">
      <div class=" w-64 h-64 grid place-items-center mb-28">
        <img style="width: 100%; height: 100%; box-shadow: 0 0 0.6em #a3aaaf;" class="border-4 border-button-hover rounded-md shadow-md"  :src=waifuImg>
      </div>

      <!-- Option Menu -->
      <div>
        <select v-model="type" class="w-full h-full border-2 border-button-hover text-center mt-5 mb-5 rounded-md">
          <option value="waifu">Waifu</option>
          <option value="neko">Neko</option>
          <option value="megumin">Megumin</option>
          <option value="hug">Hug</option>
        </select>
      </div>
      <button class="bg-button hover:bg-button-hover text-white font-bold py-2 px-4 rounded-full ring-2 ring-button-hover" @click="randomize">
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
      type: 'waifu'
    }
  },
  methods: {
    async randomize() {
      const response = await fetch(`https://api.waifu.pics/sfw/${this.type}`);
      const data = await response.json();
      this.totalVuePackages = data.total;
      this.waifuImg = data.url;
    },
  }
}
</script>

<style>

</style>