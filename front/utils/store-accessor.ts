import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Pet from '~/store/Pet'

let petStore: Pet

const initializeStores = (store: Store<any>): void => {
  petStore = getModule(Pet, store)
}

export {
  initializeStores,
  petStore
}
