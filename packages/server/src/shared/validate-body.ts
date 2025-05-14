import { NextFunction, Request, Response } from 'express';
import { Schema } from 'zod';

export const validateBody =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      res.send(err);
    }
  };
