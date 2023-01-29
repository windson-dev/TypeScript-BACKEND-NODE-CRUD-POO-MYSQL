import { Request, Response } from 'express';
import LeaderBoardService from '../Services/LeaderBoard';

export default class LeaderBoardController {
  constructor(private leaderBoardService = new LeaderBoardService()) {}

  public teamHomeResults = async (_req: Request, res: Response) => {
    const leaderBoard = await this.leaderBoardService.teamHomeResults();

    leaderBoard.sort((el, i) => i.totalPoints - el.totalPoints
    || i.goalsBalance - el.goalsBalance
    || i.goalsFavor - el.goalsFavor
    || i.goalsOwn - el.goalsOwn);

    return res.status(200).json(leaderBoard);
  };
}
