<template>
  <div>
    <p><NuxtLink to="/">トップに戻る</NuxtLink></p>
    <div v-if="imageUrl" class="leaflet-maps-container">
      <LeftMap />
      <RightMap />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LeftMap from '@/components/leaflet/LeftMap.vue'
import RightMap from '@/components/leaflet/RightMap.vue'

export default Vue.extend({
  components: { LeftMap, RightMap },
  async fetch(): Promise<void> {
    const images = this.$store.state.images 
    if (!images.length) {
      await this.$store.dispatch('fetchRandomCat')
    }
  },
  computed: {
    imageUrl () {
      return this.$store.state.images[0]
    }
  }
})
</script>

<style scoped>
.leaflet-maps-container {
  display: flex;
  justify-content: space-between;
  height: calc(60vh);
}
</style>
