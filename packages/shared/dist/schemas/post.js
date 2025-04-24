"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const zod_1 = require("zod");
exports.postSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    title: zod_1.z.string(),
    summary: zod_1.z.string(),
});
