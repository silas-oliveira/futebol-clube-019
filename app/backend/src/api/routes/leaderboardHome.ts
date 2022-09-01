import { Router } from 'express';
import LeaderboardHomeController from '../../app/controllers/leaderboardHome.controller';

const leaderboardHomeRouter = Router();

leaderboardHomeRouter.get('/', async (req, res, _next) => {
  const result = await LeaderboardHomeController.list();
  return res.status(200).json(result);
});

export default leaderboardHomeRouter;
