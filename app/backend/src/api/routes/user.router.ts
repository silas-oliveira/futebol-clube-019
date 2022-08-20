import { Router } from 'express';
import UserController from '../../app/controllers/user.controller';

const userRouter = Router();

userRouter.post('/', async (req, res, _next) => {
  const result = await UserController.login(req.body);
  return res.status(201).json({ token: result });
});

export default userRouter;
