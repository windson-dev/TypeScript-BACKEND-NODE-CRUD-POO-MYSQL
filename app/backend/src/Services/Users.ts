import * as bcrypt from 'bcryptjs';
import UserRepository from '../Repository/Users';
import Token from '../Auth/jwtAuth';

const classToken = new Token();

export default class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  public login = async (email: string, password: string) => {
    const user = await this.repository.findByEmail(email);

    const token = classToken.createToken(user);

    if (!user) {
      return { message: 'Incorrect email or password' };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return { message: 'Incorrect email or password' };
    }
    return { token };
  };

  public role = async (email: string) => {
    const user = await this.repository.findByEmail(email);

    return { role: user.role };
  };
}
