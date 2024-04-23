import { z } from "zod";


const sessionBodyCreateSchema = z.object({
  username: z.string().max(50),
  password: z.string().max(255),
});

const sessionReturnSchema = z.object({
  token: z.string(),
});

export { sessionBodyCreateSchema, sessionReturnSchema };
