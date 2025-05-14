import { Post } from '@hoppy-code/shared/src/schemas/posts';
import { savePost, getPostsCount, getPaginatedPosts } from './posts-queries';
import { CommonResponse } from '@hoppy-code/shared/src/interfaces/common-response';

const POSTS_PER_PAGE = 10;

export const createPost = async (post: Post) => {
  try {
    const result = await savePost(post);
    const response: CommonResponse<Post> = {
      success: true,
      message: 'Post Created',
      data: result,
      error: null,
    };
    return response;
  } catch (err) {
    throw err;
  }
};

export const getPostsList = async (page: number) => {
  try {
    const postsCount = await getPostsCount();
    const numberOfPages = Math.ceil(postsCount / POSTS_PER_PAGE);
    const paginatedPosts = await getPaginatedPosts(page, POSTS_PER_PAGE);
  } catch (error) {}
};
