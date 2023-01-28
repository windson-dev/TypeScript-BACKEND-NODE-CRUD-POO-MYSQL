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

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default isValidToken;
