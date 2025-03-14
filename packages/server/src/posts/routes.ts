import express from 'express';
import { postSchema } from '@hoppy-code/shared/src/schemas/post';
import { validateBody } from '../shared/validate-body';
import { handleCreatePost } from './posts-handlers';
import { handleError } from '../shared/handle-error';
const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - summary
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the post
 *         summary:
 *           type: string
 *           description: The short summary.
 *
 * /posts:
 *   post:
 *     tags:
 *       - Posts
 *     description: Create a blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Returns the created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post(
  '/posts',
  express.json(),
  validateBody(postSchema),
  handleCreatePost,
  handleError
);

export default router;
