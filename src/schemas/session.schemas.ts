import { z } from "zod";


const sessionBodyCreateSchema = z.object({
  username: z.string().max(50),
  password: z.string().max(255),
});

// Realizar o Retorno de token depois!

export { sessionBodyCreateSchema };
