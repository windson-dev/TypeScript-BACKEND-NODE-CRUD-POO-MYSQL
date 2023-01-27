import { Router } from 'express';
import isValidToken from '../middlewares/isValidToken';
import UserController from '../Controller/Users';
import isValidLogin from '../middlewares/isValidLogin';

const route = Router();

const { login, role } = new UserController();

route.post('/login', isValidLogin, login);
route.get('/login/validate', isValidToken, role);

export default route;
