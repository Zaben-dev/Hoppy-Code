import { Post } from '@hoppy-code/shared/src/schemas/posts';
import { savePost, getPostsCount, getPaginatedPosts } from './posts-queries';

const POSTS_PER_PAGE = 10;

export const createPost = async (post: Post) => {
  return savePost(post);
};

export const getPostsList = async (page: number) => {
  try {
    const postsCount = await getPostsCount();
    const numberOfPages = Math.ceil(postsCount / POSTS_PER_PAGE);
    const paginatedPosts = await getPaginatedPosts(page, POSTS_PER_PAGE);
  } catch (error) {}
};
