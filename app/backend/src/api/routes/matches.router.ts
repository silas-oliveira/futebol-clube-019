import { Router } from 'express';
import MatchesController from '../../app/controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.patch('/:id/finish', async (req, res, _next) => {
  const result = await MatchesController.update(req.params);
  return res.status(200).json(result);
});

matchesRouter.get('/', async (req, res, _next) => {
  const result = await MatchesController.list(req.query);
  return res.status(200).json(result);
});

matchesRouter.post('/', async (req, res, _next) => {
  const result = await MatchesController.add(req.body, req.headers);
  return res.status(201).json(result);
});

export default matchesRouter;
