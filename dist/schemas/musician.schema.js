"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicianPayloadSchema = exports.musicianBodyCreateSchema = exports.musicianSchema = void 0;
const zod_1 = require("zod");
const musicianSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    firstName: zod_1.z.string().max(255),
    lastName: zod_1.z.string().max(255),
    birthDate: zod_1.z.date().nullish(),
});
exports.musicianSchema = musicianSchema;
const musicianBodyCreateSchema = musicianSchema
    .omit({ id: true })
    .extend({ joined: zod_1.z.number().positive(), left: zod_1.z.date().nullish() });
exports.musicianBodyCreateSchema = musicianBodyCreateSchema;
const musicianPayloadSchema = musicianBodyCreateSchema.extend({
    bandId: zod_1.z.number().positive(),
});
exports.musicianPayloadSchema = musicianPayloadSchema;
