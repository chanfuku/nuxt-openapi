import * as ApiClient from '~/api-client'
import { apiClientWrapper } from '~/utils/api'
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'Pet',
  stateFactory: true,
  namespaced: true
})

export default class Pet extends VuexModule {
  private _pets: ApiClient.Pet[] = []

  public get pets () {
    return this._pets
  }

  @Mutation
  private SET_PETS (pets: ApiClient.Pet[]) {
    this._pets = pets
  }

  @Action({ rawError: true })
  public async fetchPets () {
    const result = await (await apiClientWrapper().listPets(10)).data
    this.SET_PETS(result)
  }

  @Action({ rawError: true })
  public async register (petNew: ApiClient.PetNew) {
    await apiClientWrapper().createPet(petNew)
  }
}
