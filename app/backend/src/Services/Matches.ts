import MatchesRepository from '../Repository/Matches';
import inProgressDTO from '../DTO/MatchesDTO';

export default class MatchesService {
  private repository: MatchesRepository;

  constructor() {
    this.repository = new MatchesRepository();
  }

  public findAll = async (query?: string) => {
    const matches = this.repository.findAll(query);

    return matches;
  };

  public create = async ({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  }: inProgressDTO) => {
    const matches = this.repository
      .create({ homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals });

    return matches;
  };
}
