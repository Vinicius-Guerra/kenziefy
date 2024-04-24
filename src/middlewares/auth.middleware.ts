import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { status } from "../utils/httpStatusCode";
import { jwtConfig } from "../configs";
import { verify } from "jsonwebtoken";

class AuthMiddleware {
    public isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
        const { authorization } = req.headers;

        if(!authorization) {
            throw new AppError("Missing bearer token", status.HTTP_401_UNAUTHORIZED);
        }

        const [_, token] = authorization.split(" ");

        const { secret } = jwtConfig();
        const jwtPayload = verify(token, secret);
        console.log(jwtPayload);

        res.locals = {
            ...res.locals,
            decoded: jwtPayload,
        };

        return next();
    };

    public isAccountOwner = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const { decoded } = res.locals;
        const { accountId } = req.params;
    
        if (decoded.sub !== accountId) {
          throw new AppError(
            "You dont have permission to perform this action",
            status.HTTP_403_FORBIDDEN
          );
        }
    
        return next();
      };

      public isAdmin = async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const { decoded } = res.locals;
        
        if (decoded.role !== "ADMIN") {
            throw new AppError(
              "You dont have permission to perform this action",
              status.HTTP_403_FORBIDDEN
            );
        }
        return next();
    };

}

export const auth = new AuthMiddleware();