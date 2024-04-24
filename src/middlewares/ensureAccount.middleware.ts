import { NextFunction, Request, Response } from "express";
import { IAccountService } from "../interfaces/account.interfaces";
import { status } from "../utils/httpStatusCode";

export class EnsureAccountMiddleware {
    public usernameIsUnique = 
        (service: IAccountService) => 
        async (req: Request, res: Response, next: NextFunction) => {
            const foundAccount = await service.isUsernameUnique(req.body.username);

            if(foundAccount) {
                return res.status(status.HTTP_409_CONFLICT).json({ message: "Username already exists." });
            }

            return next();
        };
}

export const ensureAccount = new EnsureAccountMiddleware();