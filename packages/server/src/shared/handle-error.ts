import { Request, Response } from 'express';

export const handleError = (err: Error, req: Request, res: Response) => {
  console.log(err.message);
  res.status(500).send({ error: err.message });
};
