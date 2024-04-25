import { compare } from "bcrypt";
import { prisma } from "../database/database";
import { AppError } from "../errors/appError";
import { SessionBodyCreate, SessionReturn } from "../interfaces/session.interfaces";
import { sessionBodyCreateSchema, sessionReturnSchema } from "../schemas";
import { status } from "../utils/httpStatusCode";
import { jwtConfig } from "../configs";
import { sign } from "jsonwebtoken";

export class SessionServices {
    private account = prisma.account;

    public login = async ({
        username,
        password,
      }: SessionBodyCreate): Promise<SessionReturn> => {
        // VERIFY USERNAME
        const foundUser = await this.account.findFirst({
          where: { username: username },
        });

        if(!foundUser) {
            throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
        }
   
        // VERIFY PASSWORD
        const passwordMatch = await compare(password, foundUser.password);
        if(!passwordMatch) {
            throw new AppError("Invalid credentials.", status.HTTP_401_UNAUTHORIZED);
        }

        const { secret, expiresIn } = jwtConfig();

        // GENERATOR JWT
        const token = sign(
            { favoriteColor: foundUser.favoriteColor, role: foundUser.role },
            secret,
            {
                expiresIn: expiresIn,
                subject: foundUser.id.toString(),
            }
        );

        return sessionReturnSchema.parse({ token });
    }
}