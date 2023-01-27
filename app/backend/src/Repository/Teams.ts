import Teams from '../database/models/Teams';

export default class TeamsRepository {
  private model = Teams;

  public findAll = async () => {
    const teams = this.model.findAll();

    return teams;
  };

  public findById = async (id: number) => {
    const teams = this.model.findByPk(id);

    return teams;
  };
}
