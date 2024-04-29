"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountReturnSchema = exports.accountPayloadCreateSchema = exports.accountSchema = void 0;
const zod_1 = require("zod");
const accountSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    username: zod_1.z.string().max(50),
    password: zod_1.z.string().max(255),
    favoriteColor: zod_1.z.string().max(255).nullish(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.accountSchema = accountSchema;
const accountPayloadCreateSchema = accountSchema.omit({ id: true, createdAt: true, updatedAt: true });
exports.accountPayloadCreateSchema = accountPayloadCreateSchema;
const accountReturnSchema = accountSchema.omit({ password: true });
exports.accountReturnSchema = accountReturnSchema;
