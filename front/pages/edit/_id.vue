<template>
  <div>
    <p><NuxtLink to="/">一覧</NuxtLink></p>
    <input v-model="name" type="text">
    <input type="submit" @click="submit">
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useFetch, useRouter, useRoute, ComputedRef } from '@nuxtjs/composition-api'
import { petStore } from '~/store'

export default defineComponent({
  name: 'Edit',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const id = route.value.params.id
    const name = computed({
      get: () => petStore.pet.name,
      set: value => petStore.setPet({ name: value })
    })

    useFetch(async () => {
      await petStore.fetchPet(id)
    })

    const submit = async () => {
      try {
        await petStore.update(id)
        router.push('/')
      } catch (e) {
        console.error(e)
        alert(e)
      }
    }

    return { name, submit }
  },
})
</script>
