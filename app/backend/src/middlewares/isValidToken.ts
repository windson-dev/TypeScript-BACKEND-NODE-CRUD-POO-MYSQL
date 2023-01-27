import { Request, Response, NextFunction } from 'express';
import Token from '../Auth/jwtAuth';

const token = new Token();

const isValidToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const user = token.validToken(authorization);
    req.body.user = user;

    console.log(req.body.user);

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default isValidToken;