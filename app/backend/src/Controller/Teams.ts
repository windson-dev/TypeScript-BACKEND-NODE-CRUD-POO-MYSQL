import { Request, Response } from 'express';
import TeamsService from '../Services/Teams';

export default class TeamsController {
  constructor(private teamsService = new TeamsService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const teams = await this.teamsService.findAll();

    return res.status(200).json(teams);
  };

  public findById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const teams = await this.teamsService.findById(Number(id));

    return res.status(200).json(teams);
  };
}
