import { Request, Response } from "express";
import { IAccountService } from "../interfaces/account.interfaces";
import { status } from "../utils/httpStatusCode";

export class AccountControllers {

    constructor(private service: IAccountService) {
        this.service = service;
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.service.create(req.body);

        return res.status(status.HTTP_201_CREATED).json(account);
    };

    public list = async (req: Request, res: Response): Promise<Response> => {
        const accounts = await this.service.list();

        return res.status(status.HTTP_200_OK).json(accounts);
    }

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const account = await this.service.retrieve(Number(req.params.accountId));

        return res.status(status.HTTP_200_OK).json(account);
    };
};

