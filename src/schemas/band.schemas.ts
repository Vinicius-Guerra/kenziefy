import { z } from "zod";

const bandSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(255),
    foundedAt: z.number().nullish(),
});

const bandPayloadCreateSchema = bandSchema.omit({ id: true });

export { bandPayloadCreateSchema, bandSchema };
