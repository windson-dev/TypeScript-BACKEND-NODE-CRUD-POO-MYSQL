import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import inProgressDTO from '../DTO/MatchesDTO';

export default class MatchesRepository {
  private model = Matches;

  public findAll = async (inProgress?: string) => {
    let inProgressValue = {};

    if (inProgress) {
      inProgressValue = { inProgress: inProgress === 'true' };
    }

    const matches = await this.model.findAll({
      where: inProgressValue,
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  };

  public create = async ({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals }: inProgressDTO) => {
    const matches = await this.model
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });

    return matches;
  };
}
