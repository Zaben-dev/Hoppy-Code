import { z } from 'zod';

export const postSchema = z.object({
  id: z.number().optional(),
  title: z.string({ required_error: 'title is required' }),
  coverImageUrl: z.union([z.string(), z.null()]),
  summary: z.string({ required_error: 'summary is required' }),
  content: z.string({ required_error: 'content is required' }),
  CreatedAt: z.date({ required_error: 'createdAt is required' }),
  UpdatedAt: z.union([z.date(), z.null()]),
  tags: z.array(z.string()),
});

export const postsListItemSchema = postSchema.pick({
  id: true,
  title: true,
  coverImageUrl: true,
  summary: true,
  CreatedAt: true,
});

export type Post = z.infer<typeof postSchema>;
export type postsListItem = z.infer<typeof postsListItemSchema>;
