import { NextFunction, Request, Response } from 'express';

const errorHandler = ({ message }: Error, _req: Request, res: Response, _next: NextFunction) => {
  const [msg, status, token] = message.split('/');
  return res.status(Number(status)).json({ [token ? 'error' : 'message']: msg });
};

export default errorHandler;
