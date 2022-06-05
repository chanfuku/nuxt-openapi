<template>
  <div>
    <p><NuxtLink to="/new">新規登録</NuxtLink></p>
    <div v-for="pet in pets" :key="pet.id">
      <div>
        <span>{{ pet.id }} : {{ pet.name }}</span>
        <span @click="$router.push(`/edit/${pet.id}`)">編集</span>
        <span @click="deleteClick(pet.id)">削除</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useFetch } from '@nuxtjs/composition-api'
import { petStore } from '~/store'

export default defineComponent({
  name: 'Top',
  setup () {
    const pets = computed(() => petStore.pets)

    useFetch(async () => {
      await petStore.fetchPets()
    })

    const deleteClick = async (id: string) => {
      try {
        await petStore.delete(id)
        await petStore.fetchPets()
      } catch (e) {
        console.error(e)
        alert(e)
      }
    }

    const countPet = () => {
      return `${pets.value.length}匹です`
    }

    return { pets, deleteClick, countPet }
  },
})
</script>
