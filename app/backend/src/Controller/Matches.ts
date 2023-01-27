import { Request, Response } from 'express';
import MatchesService from '../Services/Matches';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const matches = await this.matchesService.findAll(inProgress as string);

    return res.status(200).json(matches);
  };

  public create = async (req: Request, res: Response) => {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

    const matches = await this.matchesService
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });

    return res.status(201).json(matches);
  };
}
