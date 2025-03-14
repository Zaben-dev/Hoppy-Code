import { PrismaClient } from '@prisma/client';
import { Post } from '@hoppy-code/shared/src/schemas/post';

const prisma = new PrismaClient();

export const savePost = async (data: Post) => {
  return prisma.post.create({ data });
};
