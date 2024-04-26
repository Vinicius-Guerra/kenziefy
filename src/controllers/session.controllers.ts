import { Request, Response } from "express";
import { SessionServices } from "../services";
import { status } from "../utils/httpStatusCode";

export class SessionControllers {
    private service = new SessionServices();

    public login = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.service.login(req.body);
        return res.status(status.HTTP_200_OK).json(account);
    };

};

