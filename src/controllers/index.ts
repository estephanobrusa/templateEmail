import { Request, Response } from 'express';

export const indexController = (req: Request, res: Response): void => {
  res.send('Hello World!');
};