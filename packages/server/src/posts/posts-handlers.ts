import { CommonResponse, Post } from '@hoppy-code/shared';
import { Request, Response } from 'express';
import { createPost } from './posts-service';

export const handleCreatePost = async (req: Request, res: Response) => {
  try {
    const result = await createPost(req.body);
    const res: CommonResponse<Post> = {
      success: true,
      message: 'Post Created',
      data: result,
      error: null,
    };
    res.status(201).send({});
  } catch {}
};

export const handleGetPosts = async (req: any, res: any) => {
  res.status(200).send();
};
