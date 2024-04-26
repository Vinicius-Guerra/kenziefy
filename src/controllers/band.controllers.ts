import { Request, Response } from "express";
import { status } from "../utils/httpStatusCode";
import { IBandService } from "../interfaces/band.interfaces";
import { inject, injectable } from "tsyringe";

@injectable()
export class BandControllers {
    constructor(@inject("BandService") private service: IBandService) {}

    public create = async (req: Request, res: Response): Promise<Response> => {
        const band = await this.service.create(req.body);

        return res.status(status.HTTP_201_CREATED).json(band);
    };

    public list = async (req: Request, res: Response): Promise<Response> => {
        const bands = await this.service.list();

        return res.status(status.HTTP_200_OK).json(bands);
    };
};

