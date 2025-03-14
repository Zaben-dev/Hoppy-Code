import { z } from 'zod';
export declare const postSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    summary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    summary: string;
    id?: string | undefined;
}, {
    title: string;
    summary: string;
    id?: string | undefined;
}>;
export type Post = z.infer<typeof postSchema>;
