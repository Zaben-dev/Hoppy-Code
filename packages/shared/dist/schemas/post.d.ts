import { z } from 'zod';
export declare const postSchema: z.ZodObject<{
    name: z.ZodString;
    summary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    summary: string;
}, {
    name: string;
    summary: string;
}>;
export type Post = z.infer<typeof postSchema>;
