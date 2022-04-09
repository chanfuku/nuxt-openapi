import { NextFunction, Request, Response } from 'express';
import { PetService } from "../../services/petService";
import { Schemas } from '../../api-types/types';

export default (petService: PetService) => {

  const GET = async (req: Request, res: Response, next: NextFunction): Promise<Response<Schemas.Pet>> => {
    return res.status(200).json(await petService.findOne(Number(req.params.id)));
  }

  return {
    GET,
  }
}
