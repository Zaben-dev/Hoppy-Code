import { z } from 'zod';
export declare const postSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    summary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    summary: string;
    id?: number | undefined;
}, {
    title: string;
    summary: string;
    id?: number | undefined;
}>;
export type Post = z.infer<typeof postSchema>;
