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
  private _pet: ApiClient.Pet = {
    id: 0,
    name: ''
  }

  public get pets () {
    return this._pets
  }

  public get pet () {
    return this._pet
  }

  @Mutation
  private SET_PETS (pets: ApiClient.Pet[]) {
    this._pets = pets
  }

  @Mutation
  private SET_PET (payload: {}) {
    this._pet = { ...this._pet, ...payload }
  }

  @Action({ rawError: true })
  public async fetchPets () {
    const result = await (await apiClientWrapper().listPets(10)).data
    this.SET_PETS(result)
  }

  @Action({ rawError: true })
  public async fetchPet (petId: string) {
    const pet = await (await apiClientWrapper().showPetById(petId)).data
    this.SET_PET(pet)
  }

  @Action({ rawError: true })
  public async register (petNew: ApiClient.PetNew) {
    await apiClientWrapper().createPet(petNew)
  }

  @Action({ rawError: true })
  public async setPet (payload: {}) {
    this.SET_PET(payload)
  }

  @Action({ rawError: true })
  public async update (petId: string) {
    await apiClientWrapper().updatePet(petId, this.pet)
  }

  @Action({ rawError: true })
  public async delete (petId: string) {
    await apiClientWrapper().deletePet(petId)
  }
}
