import { z } from "zod";


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
const bandSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(255),
    foundedAt: z.number().positive().nullish(),
});


const bandPayloadCreateSchema = bandSchema.omit({ id: true });

export { bandPayloadCreateSchema, bandSchema };
