import { z } from 'zod';

export const postSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  summary: z.string(),
});

export type Post = z.infer<typeof postSchema>;
