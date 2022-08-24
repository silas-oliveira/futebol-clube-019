import { Router } from 'express';
import LoginValidateController from '../../app/controllers/login.validate.controller';

const loginValidateRouter = Router();

loginValidateRouter.get('/', async (req, res, _next) => {
  const result = await LoginValidateController.verifyToken(req.headers);
  return res.status(200).json({ role: result });
});

export default loginValidateRouter;
