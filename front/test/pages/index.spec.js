import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { initializeStores } from '~/store/index.ts';
import { cloneDeep } from 'lodash'
import Pet from '~/store/Pet';
import Index from '~/pages/index'

const localVue = createLocalVue()
localVue.use(Vuex)

const pets = [
  {id: 1, name: 'あああ'},
  {id: 2, name: 'いいい'},
]

describe('store/Pet.ts', () => {
  let mockPet

  beforeEach(() => {
    mockPet = cloneDeep(Pet)
  })

  test('get pet() が正しい値を返すこと', () => {
    // PetStoreのmockを作成する
    mockPet = {
      ...mockPet,
      getters: {
        pets: () => pets
      },
      actions: {
        fetchPets: async () => await {}
      }
    }
    const modules = {
      Pet: mockPet 
    }
    // Vuex Storeが作成される
    initializeStores(new Vuex.Store({ modules }))

    const wrapper = shallowMount(Index, {
      mocks: {
        $nuxt: {
          context: {}, // useFetchがエラーになるので空で定義しておく
        },
      },
      stubs: {
        NuxtLink: true, // <Nuxtlink>を使ったComponentはエラーになるので空で定義しておく
      },
      localVue,
    })

    const expected = '2匹です'
    expect(wrapper.vm.countPet()).toBe(expected)
  })

})
