import { Router } from 'express';
import LoginValidateController from '../../app/controllers/login.validate.controller';
import UserController from '../../app/controllers/user.controller';

const userRouter = Router();

userRouter.get('/validate', async (req, res, _next) => {
  const result = await LoginValidateController.verifyToken(req.headers);
  return res.status(200).json({ role: result });
});

userRouter.post('/', async (req, res, _next) => {
  const result = await UserController.login(req.body);
  return res.status(200).json({ token: result });
});

export default userRouter;
