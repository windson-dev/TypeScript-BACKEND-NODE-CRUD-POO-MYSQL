import User from '../database/models/Users';
import UserDTO from '../DTO/UserDTO';

export default class UserRepository {
  private model = User;

  public findByEmail = async (email: string) => {
    const user = await this.model.findOne({ where: { email } });

    return user as UserDTO;
  };
}
