"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumPayloadCreateSchema = exports.albumSchema = void 0;
const zod_1 = require("zod");
const albumSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().max(255).min(1),
    year: zod_1.z.number().positive(),
    bandId: zod_1.z.number().positive(),
});
exports.albumSchema = albumSchema;
const albumPayloadCreateSchema = albumSchema.omit({ id: true });
exports.albumPayloadCreateSchema = albumPayloadCreateSchema;
