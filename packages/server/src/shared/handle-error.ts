import { Request, Response } from 'express';
import { CommonResponse, Post } from '@hoppy-code/shared';

export const handleError = (
  err: Error,
  req: Request,
  res: Response<CommonResponse<null>>
) => {
  console.log(err.message);
  const response: CommonResponse<null> = {
    success: false,
    data: null,
    error: {
      code: 500,
      details: err.message,
    },
  };
  res.status(500).send(response);
};
