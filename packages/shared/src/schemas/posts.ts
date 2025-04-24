import { z } from 'zod';

export const postSchema = z.object({
  id: z.number().optional(),
  title: z.string({ required_error: 'title is required' }),
  coverImageUrl: z.string(),
  summary: z.string({ required_error: 'summary is required' }),
  content: z.string({ required_error: 'content is required' }),
  CreatedAt: z.string({ required_error: 'createdAt is required' }),
  UpdatedAt: z.string().datetime().optional(),
  tags: z.array(z.string()),
});

export const postsListItem = z.object({
  id: z.number().optional(),
  title: z.string({ required_error: 'title is required' }),
  summary: z.string({ required_error: 'summary is required' }),
  coverImageUrl: z.string(),
});

export type Post = z.infer<typeof postSchema>;
