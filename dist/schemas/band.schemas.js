"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandSchema = exports.bandPayloadCreateSchema = void 0;
const zod_1 = require("zod");
/**
 * @openapi
 * components:
 *  schemas:
 *      Band:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  readOnly: true
 *                  example: 1
 *              name:
 *                  type: string
 *                  example: Minha nova banda
 *                  description: Required, 255 characteres or fewer
 *                  maxLength: 255
 *              foundedAt:
 *                  type: integer
 *                  example: 1993
 *                  description: Optional, Positive integer
 *                  nullable: true
 */
const bandSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().max(255),
    foundedAt: zod_1.z.number().positive().nullish(),
});
exports.bandSchema = bandSchema;
const bandPayloadCreateSchema = bandSchema.omit({ id: true });
exports.bandPayloadCreateSchema = bandPayloadCreateSchema;
