import { Pet } from "../../types/api";

export default (petService) => {

  const GET = (req, res, next) => {
    const data: Pet[] = petService.getPet(Number(req.params.id));
    res.status(200).json(data);
  }

  return {
    GET,
  }
}
