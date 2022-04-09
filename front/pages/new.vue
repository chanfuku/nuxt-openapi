<template>
  <div>
    <input v-model="name" type="text">
    <input type="submit" @click="submit">
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { petStore } from '~/store'

export default defineComponent({
  name: 'New',
  setup () {
    const name = ref('')
    const submit = async () => {
      try {
        const petNew = { name: name.value }
        await petStore.register(petNew)
      } catch (e) {
        console.log(e)
      }
    }

    return { name, submit }
  },
})
</script>
