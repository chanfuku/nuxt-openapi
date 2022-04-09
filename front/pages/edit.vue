<template>
  <div>
    <input v-model="name" type="text">
    <input type="submit" @click="submit">
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useContext, useFetch, useRouter } from '@nuxtjs/composition-api'
import { petStore } from '~/store'

export default defineComponent({
  name: 'Edit',
  setup () {
    const router = useRouter()
    const route: ComputedRef<VueRouter.Route> = useRoute()
    const id = Number(route.value.params.id)
    const name = computed({
      get: () => petStore.pet.name,
      set: value => petStore.setPet({ name: value })
    })


    useFetch(async () => {
      await petStore.fetchPet(id)
    })

    const submit = async () => {
      try {
        const petNew = { name: name.value }
        await petStore.update(petNew)
        router.push('/')
      } catch (e) {
        console.log(e)
      }
    }

    return { name, submit }
  },
})
</script>
