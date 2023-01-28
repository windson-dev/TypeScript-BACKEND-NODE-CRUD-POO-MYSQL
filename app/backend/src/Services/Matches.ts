import MatchesRepository from '../Repository/Matches';
import inProgressDTO from '../DTO/MatchesDTO';

export default class MatchesService {
  private repository: MatchesRepository;

  constructor() {
    this.repository = new MatchesRepository();
  }

  public findAll = async (query?: string) => {
    const matches = await this.repository.findAll(query);

    return matches;
  };

  public create = async ({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  }: inProgressDTO) => {
    const matches = await this.repository
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });

    const homeTeam = await this.repository.findById(Number(homeTeamId));
    const awayTeam = await this.repository.findById(Number(awayTeamId));

    if (!homeTeam || !awayTeam) {
      return { errorId: 'There is no team with such id!' };
    }
    if (homeTeamId === awayTeamId) {
      return { error: 'It is not possible to create a match with two equal teams' };
    }

    return { matches };
  };

  public updateMatchesInProgress = async (
    id: number,
    { homeTeamGoals,
      awayTeamGoals }: inProgressDTO,
  ) => {
    const matches = await this
      .repository.updateMatchesInProgress(id, { homeTeamGoals, awayTeamGoals });
    return matches;
  };

  public update = async (id: number) => {
    const matches = this.repository.update(id);

    return matches;
  };
}
