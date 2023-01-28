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

    const { matches, error, errorId } = await this.matchesService
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });

    if (error) {
      return res.status(422).json({ message: error });
    }

    if (errorId) {
      return res.status(404).json({ message: errorId });
    }

    return res.status(201).json(matches);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matchesService.update(Number(id));

    return res.status(200).json({ message: 'finished' });
  };

  public updateMatchesInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.matchesService.updateMatchesInProgress(Number(id), req.body);

    return res.status(200).json({ message: 'atualizado com sucesso' });
  };
}
