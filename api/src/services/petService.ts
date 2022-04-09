import { Pet } from "../types/api"
import { Pet as PetEntity } from "../entity/Pet"
import { getConnection, getRepository } from 'typeorm';

export const petService: PetService = {
  async find(): Promise<Pet[]> {
    return await getRepository(PetEntity).find() 
  },
  async findOne(id: number): Promise<Pet | undefined> {
    return await getRepository(PetEntity).findOne(id)
  },
  async register(pet: Pet): Promise<Pet> {
    return await getRepository(PetEntity).save(pet)
  }
}

export interface PetService {
  find: () => Promise<Pet[]>,
  findOne: (id: number) => Promise<Pet | undefined>,
  register: (pet: Pet) => Promise<Pet>
}
