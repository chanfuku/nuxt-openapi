<template>
  <div>
    <p><NuxtLink to="/new">新規登録</NuxtLink></p>
    <div v-for="pet in pets" :key="pet.id">
      <span>{{ pet.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { petStore } from '~/store'

export default defineComponent({
  name: 'Top',
  setup () {
    const pets = computed(() => petStore.pets)

    useFetch(async () => {
      await petStore.fetchPets()
    })

    return { pets }
  },
})
</script>
