
import { NextFunction, Request, Response } from 'express';
import { PetService } from '../services/petService';
import { Pet } from '../types/api';

export default (petService: PetService) => {

  const GET = async (req: Request, res: Response, next: NextFunction): Promise<Response<Pet>> => {
    return res.status(200).json(await petService.find());
  }

  const POST = (req: Request, res: Response, next: NextFunction) => {
    res.status(200);
  }

  return {
    GET,
    POST,
  }
}
