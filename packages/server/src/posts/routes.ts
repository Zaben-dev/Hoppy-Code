import express from 'express';
import { postSchema } from '@hoppy-code/shared/src/schemas/post';
import { validateBody } from '../shared/validate-body';
import { handleCreatePost } from './posts-handlers';
const router = express.Router();

router.get('/posts', validateBody(postSchema), handleCreatePost);
