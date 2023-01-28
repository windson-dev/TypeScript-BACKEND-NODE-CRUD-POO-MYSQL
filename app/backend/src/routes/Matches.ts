import { Router } from 'express';
import MatchesController from '../Controller/Matches';
import isValidToken from '../middlewares/isValidToken';

const route = Router();

const { getAll, create, update, updateMatchesInProgress } = new MatchesController();

route.get('/matches', getAll);
route.post('/matches', isValidToken, create);
route.patch('/matches/:id/finish', update);
route.patch('/matches/:id', updateMatchesInProgress);

export default route;
