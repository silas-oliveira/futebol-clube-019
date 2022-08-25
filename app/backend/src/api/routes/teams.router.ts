import { Router } from 'express';
import TeamsController from '../../app/controllers/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/', async (req, res, _next) => {
  const result = await TeamsController.list();
  return res.status(200).json(result);
});

export default teamsRouter;
