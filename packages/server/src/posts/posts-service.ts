import { Post } from '@hoppy-code/shared/src/schemas/post';
import { savePost } from './posts-queries';

export const createPost = async (post: Post) => {
  return savePost(post);
};
