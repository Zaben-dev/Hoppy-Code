import { CommonResponse, Post } from '@hoppy-code/shared';
import { NextFunction, Request, Response } from 'express';
import { createPost } from './posts-service';

export const handleCreatePost = async (
  req: Request<{}, {}, Post>,
  res: Response<CommonResponse<Post>>,
  next: NextFunction
) => {
  try {
    const response = await createPost(req.body);
    res.status(201).send(response);
  } catch (err) {
    next(err);
  }
};

export const handleGetPostsList = async (Request: Request, res: any) => {
  res.status(200).send();
};
