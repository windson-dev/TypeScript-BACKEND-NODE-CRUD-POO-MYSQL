import { Router } from 'express';
import LeaderBoardController from '../Controller/LeaderBoard';

const route = Router();

const { teamHomeResults } = new LeaderBoardController();

route.get('/leaderboard/home', teamHomeResults);

export default route;
