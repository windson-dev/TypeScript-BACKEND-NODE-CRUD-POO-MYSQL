import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import UserDTO from '../DTO/UserDTO';

export default class Token {
  private secret: string = process.env.JWT_SECRET || 'aaa';
  private jwtConfig: object = { expiresIn: '1d', algorithm: 'HS256' };

  public createToken = (user: UserDTO) => {
    const token = jwt.sign({ user }, this.secret, this.jwtConfig);
    return token;
  };

  public validToken = (token: string): string | jwt.JwtPayload => jwt.verify(token, this.secret);
}
