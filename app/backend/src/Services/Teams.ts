import TeamsRepository from '../Repository/Teams';

export default class TeamsService {
  private repository: TeamsRepository;

  constructor() {
    this.repository = new TeamsRepository();
  }

  public findAll = async () => {
    const teams = await this.repository.findAll();

    return teams;
  };

  public findById = async (id: number) => {
    const teams = await this.repository.findById(id);

    return teams;
  };
}
