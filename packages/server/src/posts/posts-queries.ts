import { PrismaClient } from '@prisma/client';
import { Post } from '@hoppy-code/shared/src/schemas/posts';

const prisma = new PrismaClient();

export const savePost = async (data: Post): Promise<Post> => {
  return prisma.post.create({ data });
};

export const getPaginatedPosts = async (
  page: number,
  pageSize: number
): Promise<Post[]> => {
  const results = prisma.post.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return results;
};

export const getPostsCount = (): Promise<number> => {
  const postsCount = prisma.post.count();
  return postsCount;
};
