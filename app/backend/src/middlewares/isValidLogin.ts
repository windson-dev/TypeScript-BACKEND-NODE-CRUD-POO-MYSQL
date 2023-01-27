import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const isValidLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    email: Joi.string().not().empty()
      .email()
      .required(),
    password: Joi.string().not().empty()
      .min(6)
      .required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

export default isValidLogin;
