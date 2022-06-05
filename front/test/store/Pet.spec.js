import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { initializeStores } from '~/store/index.ts';
import Pet from '~/store/Pet';
import { petStore } from '~/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/Pet.ts', () => {
  beforeEach(() => {
    const modules = {
      Pet 
    }
    initializeStores(new Vuex.Store({ modules }))
  })

  test('get pet() が正しい値を返すこと', () => {
    const pet =  { id: 1, name: 'あああ' }
    petStore.setPet(pet)
    expect(petStore.pet).toStrictEqual(pet)
  })

})
