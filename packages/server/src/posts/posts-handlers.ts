import { CommonResponse, Post } from '@hoppy-code/shared';
import { Request, Response } from 'express';
import { createPost } from './posts-service';

export const handleCreatePost = async (
  req: Request,
  res: Response<CommonResponse<Post>>
) => {
  try {
    const result = await createPost(req.body);
    const response: CommonResponse<Post> = {
      success: true,
      message: 'Post Created',
      data: result,
      error: null,
    };
    res.status(201).send(response);
  } catch {
    res.status(500).send();
  }
};

export const handleGetPostsList = async (Request: Request, res: any) => {
  res.status(200).send();
};
