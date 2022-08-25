import { Router } from 'express';
import TeamsController from '../../app/controllers/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/:id', async (req, res, _next) => {
  const result = await TeamsController.get(req.params);
  return res.status(200).json(result);
});

teamsRouter.get('/', async (req, res, _next) => {
  const result = await TeamsController.list();
  return res.status(200).json(result);
});

export default teamsRouter;
