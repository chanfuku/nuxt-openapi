
import { NextFunction, Request, Response } from 'express';
import { PetService } from '../services/petService';
import { Responses } from '../api-types/types';

export default (petService: PetService) => {

  const GET = async (req: Request, res: Response, next: NextFunction): Promise<Response<Responses.Pet.Content>> => {
    return res.status(200).json(await petService.find());
  }

  const POST = async (req: Request, res: Response, next: NextFunction): Promise<Response<Responses.Pet.Content> | undefined> => {
    try {
      const pet = await petService.register(req.body)
      return res.status(200).json(pet)
    } catch (e) {
      console.error(e)
    }
  }

  return {
    GET,
    POST,
  }
}
