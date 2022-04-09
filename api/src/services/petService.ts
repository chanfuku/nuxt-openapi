import { Schemas } from "../api-types/types";
import { Pet as PetEntity } from "../entity/Pet"
import { getConnection, getRepository } from 'typeorm';

export const petService: PetService = {
  async find(): Promise<Schemas.Pet[]> {
    return await getRepository(PetEntity).find() 
  },
  async findOne(id: string): Promise<Schemas.Pet | undefined> {
    return await getRepository(PetEntity).findOne(id)
  },
  async register(pet: Schemas.Pet): Promise<Schemas.Pet> {
    return await getRepository(PetEntity).save(pet)
  },
  async delete(id: string): Promise<void> {
    await getRepository(PetEntity).delete(id)
  }
}

export interface PetService {
  find: () => Promise<Schemas.Pet[]>,
  findOne: (id: string) => Promise<Schemas.Pet | undefined>,
  register: (pet: Schemas.Pet) => Promise<Schemas.Pet>
  delete: (id: string) => Promise<void>
}
