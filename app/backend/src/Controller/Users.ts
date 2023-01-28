import { Request, Response } from 'express';
import UserService from '../Services/Users';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await this.userService.login(email, password);

    if (result.message) {
      return res.status(401).json({ message: result.message });
    }

    return res.status(200).json(result);
  };

  public role = async (req: Request, res: Response) => {
    const result = await this.userService.role(req.body.user.user.email);

    return res.status(200).send(result);
  };
}
