<template>
  <div>
    <h1>Nuxt.js Rendering mode: SPA(Single Page App)</h1>
    <p><a href="/">aタグでトップに戻る</a></p>
    <p><button @click="toTop">window.location.href</button></p>
    <p><NuxtLink to="/">NuxtLinkでトップに戻る</NuxtLink></p>
    <p><button @click="push">$router.pushでトップに戻る</button></p>

    <button @click="addCatImage">ねこ画像追加する</button>現在{{ images.length }}匹
    <div v-if="$fetchState.pending">
      <img class="loading__img" src="@/assets/img/loading-spin.svg">
    </div>
    <div v-else class="imagebox">
      <img :src="image" v-for="image in images" :key="image">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    images (): string[] {
      log('computed')
      return this.$store.state.images
    },
  },
  async fetch(): Promise<void> {
    log('fetch')
    await this.$store.dispatch('fetchRandomCat')
    await this.$store.dispatch('fetchPets')
  },
  async mounted(): Promise<void> {
    log('mounted')
  },
  async created(): Promise<void> {
    log('created')
  },
  methods: {
    async addCatImage(): Promise<void> {
      log('addCatImage')
      await this.$fetch()
    },
    async toTop(): Promise<void> {
      log('toTop')
      window.location.href = '/'
    },
    async push(): Promise<void> {
      log('push')
      this.$router.push('/')
    },
  }
})

const log = (funcName: string): void => {
  const str = `${funcName}: client=${process.client} server=${process.server}`
  console.log(str)
}
</script>

<style scoped>
.loading__img {
  width:30%;
}
.imagebox img {
  width: 30%;
}
</style>
