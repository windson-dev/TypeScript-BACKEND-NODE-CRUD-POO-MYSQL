import TeamsRepository from '../Repository/Teams';
import MatchesRepository from '../Repository/Matches';
import LeaderboardDTO from '../DTO/LeaderBoardDTO';

export default class LeaderBoardService {
  private readonly matchesRepository: MatchesRepository;
  private readonly teamsRepository: TeamsRepository;

  constructor() {
    this.matchesRepository = new MatchesRepository();
    this.teamsRepository = new TeamsRepository();
  }

  public createBoard = async () => {
    const teams = await this.teamsRepository.findAll();
    const board = teams.map((element) => ({
      name: element.teamName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    }));
    return board;
  };

  public calculateEfficiency = (team: LeaderboardDTO) => {
    const games = team.totalDraws + team.totalLosses + team.totalVictories;
    const efficiency = (((team.totalPoints / (games * 3))) * 100).toFixed(2);
    return parseFloat(efficiency);
  };

  public teamHomeResults = async () => {
    const board = await this.createBoard();
    const matchs = await this.matchesRepository.findAll('false');
    matchs.forEach((database) => {
      const team = board
        .find((element) => database.homeTeam.teamName === element.name) as LeaderboardDTO;
      if (database.homeTeamGoals > database.awayTeamGoals) {
        team.totalPoints += 3;
        team.totalVictories += 1;
      } else if (database.homeTeamGoals < database.awayTeamGoals) {
        team.totalLosses += 1;
      } else { team.totalPoints += 1; team.totalDraws += 1; }
      team.totalGames += 1;
      team.goalsFavor += database.homeTeamGoals;
      team.goalsOwn += database.awayTeamGoals;
      team.goalsBalance = team.goalsFavor - team.goalsOwn;
      team.efficiency = this.calculateEfficiency(team);
    });
    return board;
  };
}
