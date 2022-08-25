import { Router } from 'express';
import MatchesController from '../../app/controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', async (req, res, _next) => {
  const result = await MatchesController.list();
  return res.status(200).json(result);
});

export default matchesRouter;
