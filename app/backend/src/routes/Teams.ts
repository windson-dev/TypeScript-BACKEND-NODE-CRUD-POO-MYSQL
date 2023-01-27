import { Router } from 'express';
import TeamsController from '../Controller/Teams';

const route = Router();

const { getAll, findById } = new TeamsController();

route.get('/teams', getAll);
route.get('/teams/:id', findById);

export default route;
