"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackBodyCreateSchema = exports.trackRetrieveSchema = exports.trackPayloadSchema = exports.trackSchema = void 0;
const zod_1 = require("zod");
const album_schemas_1 = require("./album.schemas");
const trackSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().max(255),
    trackNumber: zod_1.z.number().positive().nullish(),
    length: zod_1.z.number().positive(),
    albumId: zod_1.z.number().positive(),
});
exports.trackSchema = trackSchema;
const trackBodyCreateSchema = trackSchema.omit({ id: true, albumId: true });
exports.trackBodyCreateSchema = trackBodyCreateSchema;
const trackPayloadSchema = trackSchema.omit({ id: true });
exports.trackPayloadSchema = trackPayloadSchema;
const trackRetrieveSchema = trackSchema
    .omit({ albumId: true })
    .extend({ album: album_schemas_1.albumSchema });
exports.trackRetrieveSchema = trackRetrieveSchema;
