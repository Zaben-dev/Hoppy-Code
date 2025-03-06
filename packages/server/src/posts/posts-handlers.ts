import { Request, Response } from 'express';

export const handleCreatePost = async (req: Request, res: Response) => {
  const { title } = req.body;
  res.status(200).send(title + ' created');
};

export const handleGetPosts = async (req: any, res: any) => {
  res.status(200).send();
};
